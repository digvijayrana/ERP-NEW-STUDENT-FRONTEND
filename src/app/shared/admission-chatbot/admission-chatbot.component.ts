import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ErpApiService } from '../../services/erp-api.service';

type ChatBubble = { role: 'user' | 'assistant'; text: string };

@Component({
  selector: 'app-admission-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admission-chatbot.component.html',
  styleUrl: './admission-chatbot.component.css'
})
export class AdmissionChatbotComponent implements OnInit {
  private readonly api = inject(ErpApiService);

  open = false;
  sending = false;
  draft = '';
  sessionId = '';
  messages: ChatBubble[] = [];
  suggestions: string[] = [
    'Fee for Class I',
    'Required documents',
    'Check eligibility',
    'Book interview'
  ];

  ngOnInit(): void {
    this.sessionId = localStorage.getItem('erp_admission_chat_session') || `web-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    localStorage.setItem('erp_admission_chat_session', this.sessionId);
    this.messages = [
      {
        role: 'assistant',
        text: 'Hi! I’m the AI Admission Assistant. Ask about fees, eligibility, documents, scholarships, or book an interview.'
      }
    ];
  }

  toggle(): void {
    this.open = !this.open;
  }

  sendSuggestion(text: string): void {
    this.draft = text;
    this.send();
  }

  send(): void {
    const message = this.draft.trim();
    if (!message || this.sending) return;
    this.messages = [...this.messages, { role: 'user', text: message }];
    this.draft = '';
    this.sending = true;
    this.api.admissionChat(this.sessionId, message).subscribe({
      next: (res) => {
        this.sessionId = res.sessionId || this.sessionId;
        localStorage.setItem('erp_admission_chat_session', this.sessionId);
        this.messages = [...this.messages, { role: 'assistant', text: res.reply }];
        if (res.suggestions?.length) this.suggestions = res.suggestions;
        this.sending = false;
      },
      error: () => {
        this.messages = [
          ...this.messages,
          { role: 'assistant', text: 'Sorry — I could not reach the admission service. Please try again shortly.' }
        ];
        this.sending = false;
      }
    });
  }
}
