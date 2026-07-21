import {
  LIST_FILTER_KEYS,
  applyDefaultListSort,
  exportRowsToCsv,
  exportRowsToPdf,
  sortItems
} from "./chunk-XUTYR2A2.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-OSBRT6XZ.js";
import {
  SpinnerComponent
} from "./chunk-PA65UFXL.js";
import {
  APP_BOOTSTRAP_LISTENER,
  APP_ID,
  APP_INITIALIZER,
  ApplicationModule,
  ApplicationRef,
  AsyncPipe,
  Attribute,
  BehaviorSubject,
  CSP_NONCE,
  ChangeDetectorRef,
  CommonModule,
  Compiler,
  Component,
  ConnectableObservable,
  Console,
  ContentChildren,
  CurrencyPipe,
  DOCUMENT,
  DatePipe,
  Directive,
  DomAdapter,
  EMPTY,
  ENVIRONMENT_INITIALIZER,
  ElementRef,
  EmptyError,
  EnvironmentInjector,
  ErrorHandler,
  EventEmitter,
  HashLocationStrategy,
  HostBinding,
  HostListener,
  INJECTOR_SCOPE,
  Inject,
  InjectFlags,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCATION_INITIALIZED,
  Location,
  LocationStrategy,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgModuleFactory$1,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_BROWSER_ID,
  PLATFORM_ID,
  PLATFORM_INITIALIZER,
  PathLocationStrategy,
  PendingTasks,
  Renderer2,
  RendererFactory2,
  RendererStyleFlags2,
  RuntimeError,
  SecurityContext,
  SkipSelf,
  Subject,
  Subscription,
  TESTABILITY,
  TESTABILITY_GETTER,
  Testability,
  TestabilityRegistry,
  TitleCasePipe,
  UpperCasePipe,
  Version,
  ViewContainerRef,
  ViewEncapsulation$1,
  ViewportScroller,
  XSS_SECURITY_URL,
  XhrFactory,
  __async,
  __spreadProps,
  __spreadValues,
  _global,
  _sanitizeHtml,
  _sanitizeUrl,
  afterNextRender,
  allowSanitizationBypassAndThrow,
  booleanAttribute,
  bypassSanitizationTrustHtml,
  bypassSanitizationTrustResourceUrl,
  bypassSanitizationTrustScript,
  bypassSanitizationTrustStyle,
  bypassSanitizationTrustUrl,
  catchError,
  combineLatest,
  concat,
  concatMap,
  createEnvironmentInjector,
  createPlatformFactory,
  defaultIfEmpty,
  defer,
  filter,
  finalize,
  first,
  forkJoin,
  formatRuntimeError,
  forwardRef,
  from,
  getDOM,
  inject,
  internalCreateApplication,
  isInjectable,
  isNgModule,
  isObservable,
  isPlatformServer,
  isPromise,
  isStandalone,
  last,
  makeEnvironmentProviders,
  map,
  mapTo,
  mergeAll,
  mergeMap,
  of,
  parseCookieValue,
  pipe,
  platformCore,
  refCount,
  reflectComponentType,
  runInInjectionContext,
  scan,
  setClassMetadata,
  setDocument,
  setRootDomAdapter,
  startWith,
  switchMap,
  take,
  takeLast,
  takeUntil,
  tap,
  throwError,
  unwrapSafeValue,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefer,
  ɵɵdeferEnableTimerScheduling,
  ɵɵdeferPrefetchOnIdle,
  ɵɵdeferWhen,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵsanitizeUrlOrResourceUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KJIDRE24.js";

// node_modules/@angular/common/fesm2022/http.mjs
var HttpHandler = class {
};
var HttpBackend = class {
};
var HttpHeaders = class _HttpHeaders {
  /**  Constructs a new HTTP header object with the given values.*/
  constructor(headers) {
    this.normalizedNames = /* @__PURE__ */ new Map();
    this.lazyUpdate = null;
    if (!headers) {
      this.headers = /* @__PURE__ */ new Map();
    } else if (typeof headers === "string") {
      this.lazyInit = () => {
        this.headers = /* @__PURE__ */ new Map();
        headers.split("\n").forEach((line) => {
          const index = line.indexOf(":");
          if (index > 0) {
            const name = line.slice(0, index);
            const key = name.toLowerCase();
            const value = line.slice(index + 1).trim();
            this.maybeSetNormalizedName(name, key);
            if (this.headers.has(key)) {
              this.headers.get(key).push(value);
            } else {
              this.headers.set(key, [value]);
            }
          }
        });
      };
    } else if (typeof Headers !== "undefined" && headers instanceof Headers) {
      this.headers = /* @__PURE__ */ new Map();
      headers.forEach((values, name) => {
        this.setHeaderEntries(name, values);
      });
    } else {
      this.lazyInit = () => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          assertValidHeaders(headers);
        }
        this.headers = /* @__PURE__ */ new Map();
        Object.entries(headers).forEach(([name, values]) => {
          this.setHeaderEntries(name, values);
        });
      };
    }
  }
  /**
   * Checks for existence of a given header.
   *
   * @param name The header name to check for existence.
   *
   * @returns True if the header exists, false otherwise.
   */
  has(name) {
    this.init();
    return this.headers.has(name.toLowerCase());
  }
  /**
   * Retrieves the first value of a given header.
   *
   * @param name The header name.
   *
   * @returns The value string if the header exists, null otherwise
   */
  get(name) {
    this.init();
    const values = this.headers.get(name.toLowerCase());
    return values && values.length > 0 ? values[0] : null;
  }
  /**
   * Retrieves the names of the headers.
   *
   * @returns A list of header names.
   */
  keys() {
    this.init();
    return Array.from(this.normalizedNames.values());
  }
  /**
   * Retrieves a list of values for a given header.
   *
   * @param name The header name from which to retrieve values.
   *
   * @returns A string of values if the header exists, null otherwise.
   */
  getAll(name) {
    this.init();
    return this.headers.get(name.toLowerCase()) || null;
  }
  /**
   * Appends a new value to the existing set of values for a header
   * and returns them in a clone of the original instance.
   *
   * @param name The header name for which to append the values.
   * @param value The value to append.
   *
   * @returns A clone of the HTTP headers object with the value appended to the given header.
   */
  append(name, value) {
    return this.clone({
      name,
      value,
      op: "a"
    });
  }
  /**
   * Sets or modifies a value for a given header in a clone of the original instance.
   * If the header already exists, its value is replaced with the given value
   * in the returned object.
   *
   * @param name The header name.
   * @param value The value or values to set or override for the given header.
   *
   * @returns A clone of the HTTP headers object with the newly set header value.
   */
  set(name, value) {
    return this.clone({
      name,
      value,
      op: "s"
    });
  }
  /**
   * Deletes values for a given header in a clone of the original instance.
   *
   * @param name The header name.
   * @param value The value or values to delete for the given header.
   *
   * @returns A clone of the HTTP headers object with the given value deleted.
   */
  delete(name, value) {
    return this.clone({
      name,
      value,
      op: "d"
    });
  }
  maybeSetNormalizedName(name, lcName) {
    if (!this.normalizedNames.has(lcName)) {
      this.normalizedNames.set(lcName, name);
    }
  }
  init() {
    if (!!this.lazyInit) {
      if (this.lazyInit instanceof _HttpHeaders) {
        this.copyFrom(this.lazyInit);
      } else {
        this.lazyInit();
      }
      this.lazyInit = null;
      if (!!this.lazyUpdate) {
        this.lazyUpdate.forEach((update) => this.applyUpdate(update));
        this.lazyUpdate = null;
      }
    }
  }
  copyFrom(other) {
    other.init();
    Array.from(other.headers.keys()).forEach((key) => {
      this.headers.set(key, other.headers.get(key));
      this.normalizedNames.set(key, other.normalizedNames.get(key));
    });
  }
  clone(update) {
    const clone = new _HttpHeaders();
    clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof _HttpHeaders ? this.lazyInit : this;
    clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
    return clone;
  }
  applyUpdate(update) {
    const key = update.name.toLowerCase();
    switch (update.op) {
      case "a":
      case "s":
        let value = update.value;
        if (typeof value === "string") {
          value = [value];
        }
        if (value.length === 0) {
          return;
        }
        this.maybeSetNormalizedName(update.name, key);
        const base = (update.op === "a" ? this.headers.get(key) : void 0) || [];
        base.push(...value);
        this.headers.set(key, base);
        break;
      case "d":
        const toDelete = update.value;
        if (!toDelete) {
          this.headers.delete(key);
          this.normalizedNames.delete(key);
        } else {
          let existing = this.headers.get(key);
          if (!existing) {
            return;
          }
          existing = existing.filter((value2) => toDelete.indexOf(value2) === -1);
          if (existing.length === 0) {
            this.headers.delete(key);
            this.normalizedNames.delete(key);
          } else {
            this.headers.set(key, existing);
          }
        }
        break;
    }
  }
  setHeaderEntries(name, values) {
    const headerValues = (Array.isArray(values) ? values : [values]).map((value) => value.toString());
    const key = name.toLowerCase();
    this.headers.set(key, headerValues);
    this.maybeSetNormalizedName(name, key);
  }
  /**
   * @internal
   */
  forEach(fn) {
    this.init();
    Array.from(this.normalizedNames.keys()).forEach((key) => fn(this.normalizedNames.get(key), this.headers.get(key)));
  }
};
function assertValidHeaders(headers) {
  for (const [key, value] of Object.entries(headers)) {
    if (!(typeof value === "string" || typeof value === "number") && !Array.isArray(value)) {
      throw new Error(`Unexpected value of the \`${key}\` header provided. Expecting either a string, a number or an array, but got: \`${value}\`.`);
    }
  }
}
var HttpUrlEncodingCodec = class {
  /**
   * Encodes a key name for a URL parameter or query-string.
   * @param key The key name.
   * @returns The encoded key name.
   */
  encodeKey(key) {
    return standardEncoding(key);
  }
  /**
   * Encodes the value of a URL parameter or query-string.
   * @param value The value.
   * @returns The encoded value.
   */
  encodeValue(value) {
    return standardEncoding(value);
  }
  /**
   * Decodes an encoded URL parameter or query-string key.
   * @param key The encoded key name.
   * @returns The decoded key name.
   */
  decodeKey(key) {
    return decodeURIComponent(key);
  }
  /**
   * Decodes an encoded URL parameter or query-string value.
   * @param value The encoded value.
   * @returns The decoded value.
   */
  decodeValue(value) {
    return decodeURIComponent(value);
  }
};
function paramParser(rawParams, codec) {
  const map2 = /* @__PURE__ */ new Map();
  if (rawParams.length > 0) {
    const params = rawParams.replace(/^\?/, "").split("&");
    params.forEach((param) => {
      const eqIdx = param.indexOf("=");
      const [key, val] = eqIdx == -1 ? [codec.decodeKey(param), ""] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
      const list = map2.get(key) || [];
      list.push(val);
      map2.set(key, list);
    });
  }
  return map2;
}
var STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi;
var STANDARD_ENCODING_REPLACEMENTS = {
  "40": "@",
  "3A": ":",
  "24": "$",
  "2C": ",",
  "3B": ";",
  "3D": "=",
  "3F": "?",
  "2F": "/"
};
function standardEncoding(v) {
  return encodeURIComponent(v).replace(STANDARD_ENCODING_REGEX, (s, t) => STANDARD_ENCODING_REPLACEMENTS[t] ?? s);
}
function valueToString(value) {
  return `${value}`;
}
var HttpParams = class _HttpParams {
  constructor(options = {}) {
    this.updates = null;
    this.cloneFrom = null;
    this.encoder = options.encoder || new HttpUrlEncodingCodec();
    if (!!options.fromString) {
      if (!!options.fromObject) {
        throw new Error(`Cannot specify both fromString and fromObject.`);
      }
      this.map = paramParser(options.fromString, this.encoder);
    } else if (!!options.fromObject) {
      this.map = /* @__PURE__ */ new Map();
      Object.keys(options.fromObject).forEach((key) => {
        const value = options.fromObject[key];
        const values = Array.isArray(value) ? value.map(valueToString) : [valueToString(value)];
        this.map.set(key, values);
      });
    } else {
      this.map = null;
    }
  }
  /**
   * Reports whether the body includes one or more values for a given parameter.
   * @param param The parameter name.
   * @returns True if the parameter has one or more values,
   * false if it has no value or is not present.
   */
  has(param) {
    this.init();
    return this.map.has(param);
  }
  /**
   * Retrieves the first value for a parameter.
   * @param param The parameter name.
   * @returns The first value of the given parameter,
   * or `null` if the parameter is not present.
   */
  get(param) {
    this.init();
    const res = this.map.get(param);
    return !!res ? res[0] : null;
  }
  /**
   * Retrieves all values for a  parameter.
   * @param param The parameter name.
   * @returns All values in a string array,
   * or `null` if the parameter not present.
   */
  getAll(param) {
    this.init();
    return this.map.get(param) || null;
  }
  /**
   * Retrieves all the parameters for this body.
   * @returns The parameter names in a string array.
   */
  keys() {
    this.init();
    return Array.from(this.map.keys());
  }
  /**
   * Appends a new value to existing values for a parameter.
   * @param param The parameter name.
   * @param value The new value to add.
   * @return A new body with the appended value.
   */
  append(param, value) {
    return this.clone({
      param,
      value,
      op: "a"
    });
  }
  /**
   * Constructs a new body with appended values for the given parameter name.
   * @param params parameters and values
   * @return A new body with the new value.
   */
  appendAll(params) {
    const updates = [];
    Object.keys(params).forEach((param) => {
      const value = params[param];
      if (Array.isArray(value)) {
        value.forEach((_value) => {
          updates.push({
            param,
            value: _value,
            op: "a"
          });
        });
      } else {
        updates.push({
          param,
          value,
          op: "a"
        });
      }
    });
    return this.clone(updates);
  }
  /**
   * Replaces the value for a parameter.
   * @param param The parameter name.
   * @param value The new value.
   * @return A new body with the new value.
   */
  set(param, value) {
    return this.clone({
      param,
      value,
      op: "s"
    });
  }
  /**
   * Removes a given value or all values from a parameter.
   * @param param The parameter name.
   * @param value The value to remove, if provided.
   * @return A new body with the given value removed, or with all values
   * removed if no value is specified.
   */
  delete(param, value) {
    return this.clone({
      param,
      value,
      op: "d"
    });
  }
  /**
   * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
   * separated by `&`s.
   */
  toString() {
    this.init();
    return this.keys().map((key) => {
      const eKey = this.encoder.encodeKey(key);
      return this.map.get(key).map((value) => eKey + "=" + this.encoder.encodeValue(value)).join("&");
    }).filter((param) => param !== "").join("&");
  }
  clone(update) {
    const clone = new _HttpParams({
      encoder: this.encoder
    });
    clone.cloneFrom = this.cloneFrom || this;
    clone.updates = (this.updates || []).concat(update);
    return clone;
  }
  init() {
    if (this.map === null) {
      this.map = /* @__PURE__ */ new Map();
    }
    if (this.cloneFrom !== null) {
      this.cloneFrom.init();
      this.cloneFrom.keys().forEach((key) => this.map.set(key, this.cloneFrom.map.get(key)));
      this.updates.forEach((update) => {
        switch (update.op) {
          case "a":
          case "s":
            const base = (update.op === "a" ? this.map.get(update.param) : void 0) || [];
            base.push(valueToString(update.value));
            this.map.set(update.param, base);
            break;
          case "d":
            if (update.value !== void 0) {
              let base2 = this.map.get(update.param) || [];
              const idx = base2.indexOf(valueToString(update.value));
              if (idx !== -1) {
                base2.splice(idx, 1);
              }
              if (base2.length > 0) {
                this.map.set(update.param, base2);
              } else {
                this.map.delete(update.param);
              }
            } else {
              this.map.delete(update.param);
              break;
            }
        }
      });
      this.cloneFrom = this.updates = null;
    }
  }
};
var HttpContext = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /**
   * Store a value in the context. If a value is already present it will be overwritten.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   * @param value The value to store.
   *
   * @returns A reference to itself for easy chaining.
   */
  set(token, value) {
    this.map.set(token, value);
    return this;
  }
  /**
   * Retrieve the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns The stored value or default if one is defined.
   */
  get(token) {
    if (!this.map.has(token)) {
      this.map.set(token, token.defaultValue());
    }
    return this.map.get(token);
  }
  /**
   * Delete the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns A reference to itself for easy chaining.
   */
  delete(token) {
    this.map.delete(token);
    return this;
  }
  /**
   * Checks for existence of a given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns True if the token exists, false otherwise.
   */
  has(token) {
    return this.map.has(token);
  }
  /**
   * @returns a list of tokens currently stored in the context.
   */
  keys() {
    return this.map.keys();
  }
};
function mightHaveBody(method) {
  switch (method) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return false;
    default:
      return true;
  }
}
function isArrayBuffer(value) {
  return typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer;
}
function isBlob(value) {
  return typeof Blob !== "undefined" && value instanceof Blob;
}
function isFormData(value) {
  return typeof FormData !== "undefined" && value instanceof FormData;
}
function isUrlSearchParams(value) {
  return typeof URLSearchParams !== "undefined" && value instanceof URLSearchParams;
}
var HttpRequest = class _HttpRequest {
  constructor(method, url, third, fourth) {
    this.url = url;
    this.body = null;
    this.reportProgress = false;
    this.withCredentials = false;
    this.responseType = "json";
    this.method = method.toUpperCase();
    let options;
    if (mightHaveBody(this.method) || !!fourth) {
      this.body = third !== void 0 ? third : null;
      options = fourth;
    } else {
      options = third;
    }
    if (options) {
      this.reportProgress = !!options.reportProgress;
      this.withCredentials = !!options.withCredentials;
      if (!!options.responseType) {
        this.responseType = options.responseType;
      }
      if (!!options.headers) {
        this.headers = options.headers;
      }
      if (!!options.context) {
        this.context = options.context;
      }
      if (!!options.params) {
        this.params = options.params;
      }
      this.transferCache = options.transferCache;
    }
    this.headers ??= new HttpHeaders();
    this.context ??= new HttpContext();
    if (!this.params) {
      this.params = new HttpParams();
      this.urlWithParams = url;
    } else {
      const params = this.params.toString();
      if (params.length === 0) {
        this.urlWithParams = url;
      } else {
        const qIdx = url.indexOf("?");
        const sep = qIdx === -1 ? "?" : qIdx < url.length - 1 ? "&" : "";
        this.urlWithParams = url + sep + params;
      }
    }
  }
  /**
   * Transform the free-form body into a serialized format suitable for
   * transmission to the server.
   */
  serializeBody() {
    if (this.body === null) {
      return null;
    }
    if (typeof this.body === "string" || isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || isUrlSearchParams(this.body)) {
      return this.body;
    }
    if (this.body instanceof HttpParams) {
      return this.body.toString();
    }
    if (typeof this.body === "object" || typeof this.body === "boolean" || Array.isArray(this.body)) {
      return JSON.stringify(this.body);
    }
    return this.body.toString();
  }
  /**
   * Examine the body and attempt to infer an appropriate MIME type
   * for it.
   *
   * If no such type can be inferred, this method will return `null`.
   */
  detectContentTypeHeader() {
    if (this.body === null) {
      return null;
    }
    if (isFormData(this.body)) {
      return null;
    }
    if (isBlob(this.body)) {
      return this.body.type || null;
    }
    if (isArrayBuffer(this.body)) {
      return null;
    }
    if (typeof this.body === "string") {
      return "text/plain";
    }
    if (this.body instanceof HttpParams) {
      return "application/x-www-form-urlencoded;charset=UTF-8";
    }
    if (typeof this.body === "object" || typeof this.body === "number" || typeof this.body === "boolean") {
      return "application/json";
    }
    return null;
  }
  clone(update = {}) {
    const method = update.method || this.method;
    const url = update.url || this.url;
    const responseType = update.responseType || this.responseType;
    const transferCache = update.transferCache ?? this.transferCache;
    const body = update.body !== void 0 ? update.body : this.body;
    const withCredentials = update.withCredentials ?? this.withCredentials;
    const reportProgress = update.reportProgress ?? this.reportProgress;
    let headers = update.headers || this.headers;
    let params = update.params || this.params;
    const context = update.context ?? this.context;
    if (update.setHeaders !== void 0) {
      headers = Object.keys(update.setHeaders).reduce((headers2, name) => headers2.set(name, update.setHeaders[name]), headers);
    }
    if (update.setParams) {
      params = Object.keys(update.setParams).reduce((params2, param) => params2.set(param, update.setParams[param]), params);
    }
    return new _HttpRequest(method, url, body, {
      params,
      headers,
      context,
      reportProgress,
      responseType,
      withCredentials,
      transferCache
    });
  }
};
var HttpEventType;
(function(HttpEventType2) {
  HttpEventType2[HttpEventType2["Sent"] = 0] = "Sent";
  HttpEventType2[HttpEventType2["UploadProgress"] = 1] = "UploadProgress";
  HttpEventType2[HttpEventType2["ResponseHeader"] = 2] = "ResponseHeader";
  HttpEventType2[HttpEventType2["DownloadProgress"] = 3] = "DownloadProgress";
  HttpEventType2[HttpEventType2["Response"] = 4] = "Response";
  HttpEventType2[HttpEventType2["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
var HttpResponseBase = class {
  /**
   * Super-constructor for all responses.
   *
   * The single parameter accepted is an initialization hash. Any properties
   * of the response passed there will override the default values.
   */
  constructor(init, defaultStatus = 200, defaultStatusText = "OK") {
    this.headers = init.headers || new HttpHeaders();
    this.status = init.status !== void 0 ? init.status : defaultStatus;
    this.statusText = init.statusText || defaultStatusText;
    this.url = init.url || null;
    this.ok = this.status >= 200 && this.status < 300;
  }
};
var HttpHeaderResponse = class _HttpHeaderResponse extends HttpResponseBase {
  /**
   * Create a new `HttpHeaderResponse` with the given parameters.
   */
  constructor(init = {}) {
    super(init);
    this.type = HttpEventType.ResponseHeader;
  }
  /**
   * Copy this `HttpHeaderResponse`, overriding its contents with the
   * given parameter hash.
   */
  clone(update = {}) {
    return new _HttpHeaderResponse({
      headers: update.headers || this.headers,
      status: update.status !== void 0 ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || void 0
    });
  }
};
var HttpResponse = class _HttpResponse extends HttpResponseBase {
  /**
   * Construct a new `HttpResponse`.
   */
  constructor(init = {}) {
    super(init);
    this.type = HttpEventType.Response;
    this.body = init.body !== void 0 ? init.body : null;
  }
  clone(update = {}) {
    return new _HttpResponse({
      body: update.body !== void 0 ? update.body : this.body,
      headers: update.headers || this.headers,
      status: update.status !== void 0 ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || void 0
    });
  }
};
var HttpErrorResponse = class extends HttpResponseBase {
  constructor(init) {
    super(init, 0, "Unknown Error");
    this.name = "HttpErrorResponse";
    this.ok = false;
    if (this.status >= 200 && this.status < 300) {
      this.message = `Http failure during parsing for ${init.url || "(unknown url)"}`;
    } else {
      this.message = `Http failure response for ${init.url || "(unknown url)"}: ${init.status} ${init.statusText}`;
    }
    this.error = init.error || null;
  }
};
var HTTP_STATUS_CODE_OK = 200;
var HTTP_STATUS_CODE_NO_CONTENT = 204;
var HttpStatusCode;
(function(HttpStatusCode2) {
  HttpStatusCode2[HttpStatusCode2["Continue"] = 100] = "Continue";
  HttpStatusCode2[HttpStatusCode2["SwitchingProtocols"] = 101] = "SwitchingProtocols";
  HttpStatusCode2[HttpStatusCode2["Processing"] = 102] = "Processing";
  HttpStatusCode2[HttpStatusCode2["EarlyHints"] = 103] = "EarlyHints";
  HttpStatusCode2[HttpStatusCode2["Ok"] = 200] = "Ok";
  HttpStatusCode2[HttpStatusCode2["Created"] = 201] = "Created";
  HttpStatusCode2[HttpStatusCode2["Accepted"] = 202] = "Accepted";
  HttpStatusCode2[HttpStatusCode2["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
  HttpStatusCode2[HttpStatusCode2["NoContent"] = 204] = "NoContent";
  HttpStatusCode2[HttpStatusCode2["ResetContent"] = 205] = "ResetContent";
  HttpStatusCode2[HttpStatusCode2["PartialContent"] = 206] = "PartialContent";
  HttpStatusCode2[HttpStatusCode2["MultiStatus"] = 207] = "MultiStatus";
  HttpStatusCode2[HttpStatusCode2["AlreadyReported"] = 208] = "AlreadyReported";
  HttpStatusCode2[HttpStatusCode2["ImUsed"] = 226] = "ImUsed";
  HttpStatusCode2[HttpStatusCode2["MultipleChoices"] = 300] = "MultipleChoices";
  HttpStatusCode2[HttpStatusCode2["MovedPermanently"] = 301] = "MovedPermanently";
  HttpStatusCode2[HttpStatusCode2["Found"] = 302] = "Found";
  HttpStatusCode2[HttpStatusCode2["SeeOther"] = 303] = "SeeOther";
  HttpStatusCode2[HttpStatusCode2["NotModified"] = 304] = "NotModified";
  HttpStatusCode2[HttpStatusCode2["UseProxy"] = 305] = "UseProxy";
  HttpStatusCode2[HttpStatusCode2["Unused"] = 306] = "Unused";
  HttpStatusCode2[HttpStatusCode2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
  HttpStatusCode2[HttpStatusCode2["PermanentRedirect"] = 308] = "PermanentRedirect";
  HttpStatusCode2[HttpStatusCode2["BadRequest"] = 400] = "BadRequest";
  HttpStatusCode2[HttpStatusCode2["Unauthorized"] = 401] = "Unauthorized";
  HttpStatusCode2[HttpStatusCode2["PaymentRequired"] = 402] = "PaymentRequired";
  HttpStatusCode2[HttpStatusCode2["Forbidden"] = 403] = "Forbidden";
  HttpStatusCode2[HttpStatusCode2["NotFound"] = 404] = "NotFound";
  HttpStatusCode2[HttpStatusCode2["MethodNotAllowed"] = 405] = "MethodNotAllowed";
  HttpStatusCode2[HttpStatusCode2["NotAcceptable"] = 406] = "NotAcceptable";
  HttpStatusCode2[HttpStatusCode2["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
  HttpStatusCode2[HttpStatusCode2["RequestTimeout"] = 408] = "RequestTimeout";
  HttpStatusCode2[HttpStatusCode2["Conflict"] = 409] = "Conflict";
  HttpStatusCode2[HttpStatusCode2["Gone"] = 410] = "Gone";
  HttpStatusCode2[HttpStatusCode2["LengthRequired"] = 411] = "LengthRequired";
  HttpStatusCode2[HttpStatusCode2["PreconditionFailed"] = 412] = "PreconditionFailed";
  HttpStatusCode2[HttpStatusCode2["PayloadTooLarge"] = 413] = "PayloadTooLarge";
  HttpStatusCode2[HttpStatusCode2["UriTooLong"] = 414] = "UriTooLong";
  HttpStatusCode2[HttpStatusCode2["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
  HttpStatusCode2[HttpStatusCode2["RangeNotSatisfiable"] = 416] = "RangeNotSatisfiable";
  HttpStatusCode2[HttpStatusCode2["ExpectationFailed"] = 417] = "ExpectationFailed";
  HttpStatusCode2[HttpStatusCode2["ImATeapot"] = 418] = "ImATeapot";
  HttpStatusCode2[HttpStatusCode2["MisdirectedRequest"] = 421] = "MisdirectedRequest";
  HttpStatusCode2[HttpStatusCode2["UnprocessableEntity"] = 422] = "UnprocessableEntity";
  HttpStatusCode2[HttpStatusCode2["Locked"] = 423] = "Locked";
  HttpStatusCode2[HttpStatusCode2["FailedDependency"] = 424] = "FailedDependency";
  HttpStatusCode2[HttpStatusCode2["TooEarly"] = 425] = "TooEarly";
  HttpStatusCode2[HttpStatusCode2["UpgradeRequired"] = 426] = "UpgradeRequired";
  HttpStatusCode2[HttpStatusCode2["PreconditionRequired"] = 428] = "PreconditionRequired";
  HttpStatusCode2[HttpStatusCode2["TooManyRequests"] = 429] = "TooManyRequests";
  HttpStatusCode2[HttpStatusCode2["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
  HttpStatusCode2[HttpStatusCode2["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
  HttpStatusCode2[HttpStatusCode2["InternalServerError"] = 500] = "InternalServerError";
  HttpStatusCode2[HttpStatusCode2["NotImplemented"] = 501] = "NotImplemented";
  HttpStatusCode2[HttpStatusCode2["BadGateway"] = 502] = "BadGateway";
  HttpStatusCode2[HttpStatusCode2["ServiceUnavailable"] = 503] = "ServiceUnavailable";
  HttpStatusCode2[HttpStatusCode2["GatewayTimeout"] = 504] = "GatewayTimeout";
  HttpStatusCode2[HttpStatusCode2["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
  HttpStatusCode2[HttpStatusCode2["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
  HttpStatusCode2[HttpStatusCode2["InsufficientStorage"] = 507] = "InsufficientStorage";
  HttpStatusCode2[HttpStatusCode2["LoopDetected"] = 508] = "LoopDetected";
  HttpStatusCode2[HttpStatusCode2["NotExtended"] = 510] = "NotExtended";
  HttpStatusCode2[HttpStatusCode2["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
})(HttpStatusCode || (HttpStatusCode = {}));
function addBody(options, body) {
  return {
    body,
    headers: options.headers,
    context: options.context,
    observe: options.observe,
    params: options.params,
    reportProgress: options.reportProgress,
    responseType: options.responseType,
    withCredentials: options.withCredentials,
    transferCache: options.transferCache
  };
}
var HttpClient = class _HttpClient {
  constructor(handler) {
    this.handler = handler;
  }
  /**
   * Constructs an observable for a generic HTTP request that, when subscribed,
   * fires the request through the chain of registered interceptors and on to the
   * server.
   *
   * You can pass an `HttpRequest` directly as the only parameter. In this case,
   * the call returns an observable of the raw `HttpEvent` stream.
   *
   * Alternatively you can pass an HTTP method as the first parameter,
   * a URL string as the second, and an options hash containing the request body as the third.
   * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
   * type of returned observable.
   *   * The `responseType` value determines how a successful response body is parsed.
   *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
   * object as a type parameter to the call.
   *
   * The `observe` value determines the return type, according to what you are interested in
   * observing.
   *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
   * progress events by default.
   *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
   * where the `T` parameter depends on the `responseType` and any optionally provided type
   * parameter.
   *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
   *
   */
  request(first2, url, options = {}) {
    let req;
    if (first2 instanceof HttpRequest) {
      req = first2;
    } else {
      let headers = void 0;
      if (options.headers instanceof HttpHeaders) {
        headers = options.headers;
      } else {
        headers = new HttpHeaders(options.headers);
      }
      let params = void 0;
      if (!!options.params) {
        if (options.params instanceof HttpParams) {
          params = options.params;
        } else {
          params = new HttpParams({
            fromObject: options.params
          });
        }
      }
      req = new HttpRequest(first2, url, options.body !== void 0 ? options.body : null, {
        headers,
        context: options.context,
        params,
        reportProgress: options.reportProgress,
        // By default, JSON is assumed to be returned for all calls.
        responseType: options.responseType || "json",
        withCredentials: options.withCredentials,
        transferCache: options.transferCache
      });
    }
    const events$ = of(req).pipe(concatMap((req2) => this.handler.handle(req2)));
    if (first2 instanceof HttpRequest || options.observe === "events") {
      return events$;
    }
    const res$ = events$.pipe(filter((event) => event instanceof HttpResponse));
    switch (options.observe || "body") {
      case "body":
        switch (req.responseType) {
          case "arraybuffer":
            return res$.pipe(map((res) => {
              if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                throw new Error("Response is not an ArrayBuffer.");
              }
              return res.body;
            }));
          case "blob":
            return res$.pipe(map((res) => {
              if (res.body !== null && !(res.body instanceof Blob)) {
                throw new Error("Response is not a Blob.");
              }
              return res.body;
            }));
          case "text":
            return res$.pipe(map((res) => {
              if (res.body !== null && typeof res.body !== "string") {
                throw new Error("Response is not a string.");
              }
              return res.body;
            }));
          case "json":
          default:
            return res$.pipe(map((res) => res.body));
        }
      case "response":
        return res$;
      default:
        throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
    }
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `DELETE` request to execute on the server. See the individual overloads for
   * details on the return type.
   *
   * @param url     The endpoint URL.
   * @param options The HTTP options to send with the request.
   *
   */
  delete(url, options = {}) {
    return this.request("DELETE", url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `GET` request to execute on the server. See the individual overloads for
   * details on the return type.
   */
  get(url, options = {}) {
    return this.request("GET", url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `HEAD` request to execute on the server. The `HEAD` method returns
   * meta information about the resource without transferring the
   * resource itself. See the individual overloads for
   * details on the return type.
   */
  head(url, options = {}) {
    return this.request("HEAD", url, options);
  }
  /**
   * Constructs an `Observable` that, when subscribed, causes a request with the special method
   * `JSONP` to be dispatched via the interceptor pipeline.
   * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
   * API endpoints that don't support newer,
   * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
   * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
   * requests even if the API endpoint is not located on the same domain (origin) as the client-side
   * application making the request.
   * The endpoint API must support JSONP callback for JSONP requests to work.
   * The resource API returns the JSON response wrapped in a callback function.
   * You can pass the callback function name as one of the query parameters.
   * Note that JSONP requests can only be used with `GET` requests.
   *
   * @param url The resource URL.
   * @param callbackParam The callback function name.
   *
   */
  jsonp(url, callbackParam) {
    return this.request("JSONP", url, {
      params: new HttpParams().append(callbackParam, "JSONP_CALLBACK"),
      observe: "body",
      responseType: "json"
    });
  }
  /**
   * Constructs an `Observable` that, when subscribed, causes the configured
   * `OPTIONS` request to execute on the server. This method allows the client
   * to determine the supported HTTP methods and other capabilities of an endpoint,
   * without implying a resource action. See the individual overloads for
   * details on the return type.
   */
  options(url, options = {}) {
    return this.request("OPTIONS", url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `PATCH` request to execute on the server. See the individual overloads for
   * details on the return type.
   */
  patch(url, body, options = {}) {
    return this.request("PATCH", url, addBody(options, body));
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `POST` request to execute on the server. The server responds with the location of
   * the replaced resource. See the individual overloads for
   * details on the return type.
   */
  post(url, body, options = {}) {
    return this.request("POST", url, addBody(options, body));
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
   * with a new set of values.
   * See the individual overloads for details on the return type.
   */
  put(url, body, options = {}) {
    return this.request("PUT", url, addBody(options, body));
  }
  static {
    this.\u0275fac = function HttpClient_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpClient)(\u0275\u0275inject(HttpHandler));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _HttpClient,
      factory: _HttpClient.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClient, [{
    type: Injectable
  }], () => [{
    type: HttpHandler
  }], null);
})();
var XSSI_PREFIX$1 = /^\)\]\}',?\n/;
var REQUEST_URL_HEADER = `X-Request-URL`;
function getResponseUrl$1(response) {
  if (response.url) {
    return response.url;
  }
  const xRequestUrl = REQUEST_URL_HEADER.toLocaleLowerCase();
  return response.headers.get(xRequestUrl);
}
var FetchBackend = class _FetchBackend {
  constructor() {
    this.fetchImpl = inject(FetchFactory, {
      optional: true
    })?.fetch ?? ((...args) => globalThis.fetch(...args));
    this.ngZone = inject(NgZone);
  }
  handle(request) {
    return new Observable((observer) => {
      const aborter = new AbortController();
      this.doRequest(request, aborter.signal, observer).then(noop, (error) => observer.error(new HttpErrorResponse({
        error
      })));
      return () => aborter.abort();
    });
  }
  doRequest(request, signal, observer) {
    return __async(this, null, function* () {
      const init = this.createRequestInit(request);
      let response;
      try {
        const fetchPromise = this.ngZone.runOutsideAngular(() => this.fetchImpl(request.urlWithParams, __spreadValues({
          signal
        }, init)));
        silenceSuperfluousUnhandledPromiseRejection(fetchPromise);
        observer.next({
          type: HttpEventType.Sent
        });
        response = yield fetchPromise;
      } catch (error) {
        observer.error(new HttpErrorResponse({
          error,
          status: error.status ?? 0,
          statusText: error.statusText,
          url: request.urlWithParams,
          headers: error.headers
        }));
        return;
      }
      const headers = new HttpHeaders(response.headers);
      const statusText = response.statusText;
      const url = getResponseUrl$1(response) ?? request.urlWithParams;
      let status = response.status;
      let body = null;
      if (request.reportProgress) {
        observer.next(new HttpHeaderResponse({
          headers,
          status,
          statusText,
          url
        }));
      }
      if (response.body) {
        const contentLength = response.headers.get("content-length");
        const chunks = [];
        const reader = response.body.getReader();
        let receivedLength = 0;
        let decoder;
        let partialText;
        const reqZone = typeof Zone !== "undefined" && Zone.current;
        yield this.ngZone.runOutsideAngular(() => __async(this, null, function* () {
          while (true) {
            const {
              done,
              value
            } = yield reader.read();
            if (done) {
              break;
            }
            chunks.push(value);
            receivedLength += value.length;
            if (request.reportProgress) {
              partialText = request.responseType === "text" ? (partialText ?? "") + (decoder ??= new TextDecoder()).decode(value, {
                stream: true
              }) : void 0;
              const reportProgress = () => observer.next({
                type: HttpEventType.DownloadProgress,
                total: contentLength ? +contentLength : void 0,
                loaded: receivedLength,
                partialText
              });
              reqZone ? reqZone.run(reportProgress) : reportProgress();
            }
          }
        }));
        const chunksAll = this.concatChunks(chunks, receivedLength);
        try {
          const contentType = response.headers.get("Content-Type") ?? "";
          body = this.parseBody(request, chunksAll, contentType);
        } catch (error) {
          observer.error(new HttpErrorResponse({
            error,
            headers: new HttpHeaders(response.headers),
            status: response.status,
            statusText: response.statusText,
            url: getResponseUrl$1(response) ?? request.urlWithParams
          }));
          return;
        }
      }
      if (status === 0) {
        status = body ? HTTP_STATUS_CODE_OK : 0;
      }
      const ok = status >= 200 && status < 300;
      if (ok) {
        observer.next(new HttpResponse({
          body,
          headers,
          status,
          statusText,
          url
        }));
        observer.complete();
      } else {
        observer.error(new HttpErrorResponse({
          error: body,
          headers,
          status,
          statusText,
          url
        }));
      }
    });
  }
  parseBody(request, binContent, contentType) {
    switch (request.responseType) {
      case "json":
        const text = new TextDecoder().decode(binContent).replace(XSSI_PREFIX$1, "");
        return text === "" ? null : JSON.parse(text);
      case "text":
        return new TextDecoder().decode(binContent);
      case "blob":
        return new Blob([binContent], {
          type: contentType
        });
      case "arraybuffer":
        return binContent.buffer;
    }
  }
  createRequestInit(req) {
    const headers = {};
    const credentials = req.withCredentials ? "include" : void 0;
    req.headers.forEach((name, values) => headers[name] = values.join(","));
    if (!req.headers.has("Accept")) {
      headers["Accept"] = "application/json, text/plain, */*";
    }
    if (!req.headers.has("Content-Type")) {
      const detectedType = req.detectContentTypeHeader();
      if (detectedType !== null) {
        headers["Content-Type"] = detectedType;
      }
    }
    return {
      body: req.serializeBody(),
      method: req.method,
      headers,
      credentials
    };
  }
  concatChunks(chunks, totalLength) {
    const chunksAll = new Uint8Array(totalLength);
    let position = 0;
    for (const chunk of chunks) {
      chunksAll.set(chunk, position);
      position += chunk.length;
    }
    return chunksAll;
  }
  static {
    this.\u0275fac = function FetchBackend_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FetchBackend)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _FetchBackend,
      factory: _FetchBackend.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FetchBackend, [{
    type: Injectable
  }], null, null);
})();
var FetchFactory = class {
};
function noop() {
}
function silenceSuperfluousUnhandledPromiseRejection(promise) {
  promise.then(noop, noop);
}
function interceptorChainEndFn(req, finalHandlerFn) {
  return finalHandlerFn(req);
}
function adaptLegacyInterceptorToChain(chainTailFn, interceptor) {
  return (initialRequest, finalHandlerFn) => interceptor.intercept(initialRequest, {
    handle: (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn)
  });
}
function chainedInterceptorFn(chainTailFn, interceptorFn, injector) {
  return (initialRequest, finalHandlerFn) => runInInjectionContext(injector, () => interceptorFn(initialRequest, (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn)));
}
var HTTP_INTERCEPTORS = new InjectionToken(ngDevMode ? "HTTP_INTERCEPTORS" : "");
var HTTP_INTERCEPTOR_FNS = new InjectionToken(ngDevMode ? "HTTP_INTERCEPTOR_FNS" : "");
var HTTP_ROOT_INTERCEPTOR_FNS = new InjectionToken(ngDevMode ? "HTTP_ROOT_INTERCEPTOR_FNS" : "");
var REQUESTS_CONTRIBUTE_TO_STABILITY = new InjectionToken(ngDevMode ? "REQUESTS_CONTRIBUTE_TO_STABILITY" : "", {
  providedIn: "root",
  factory: () => true
});
function legacyInterceptorFnFactory() {
  let chain = null;
  return (req, handler) => {
    if (chain === null) {
      const interceptors = inject(HTTP_INTERCEPTORS, {
        optional: true
      }) ?? [];
      chain = interceptors.reduceRight(adaptLegacyInterceptorToChain, interceptorChainEndFn);
    }
    const pendingTasks = inject(PendingTasks);
    const contributeToStability = inject(REQUESTS_CONTRIBUTE_TO_STABILITY);
    if (contributeToStability) {
      const taskId = pendingTasks.add();
      return chain(req, handler).pipe(finalize(() => pendingTasks.remove(taskId)));
    } else {
      return chain(req, handler);
    }
  };
}
var fetchBackendWarningDisplayed = false;
var HttpInterceptorHandler = class _HttpInterceptorHandler extends HttpHandler {
  constructor(backend, injector) {
    super();
    this.backend = backend;
    this.injector = injector;
    this.chain = null;
    this.pendingTasks = inject(PendingTasks);
    this.contributeToStability = inject(REQUESTS_CONTRIBUTE_TO_STABILITY);
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !fetchBackendWarningDisplayed) {
      const isServer = isPlatformServer(injector.get(PLATFORM_ID));
      if (isServer && !(this.backend instanceof FetchBackend)) {
        fetchBackendWarningDisplayed = true;
        injector.get(Console).warn(formatRuntimeError(2801, "Angular detected that `HttpClient` is not configured to use `fetch` APIs. It's strongly recommended to enable `fetch` for applications that use Server-Side Rendering for better performance and compatibility. To enable `fetch`, add the `withFetch()` to the `provideHttpClient()` call at the root of the application."));
      }
    }
  }
  handle(initialRequest) {
    if (this.chain === null) {
      const dedupedInterceptorFns = Array.from(/* @__PURE__ */ new Set([...this.injector.get(HTTP_INTERCEPTOR_FNS), ...this.injector.get(HTTP_ROOT_INTERCEPTOR_FNS, [])]));
      this.chain = dedupedInterceptorFns.reduceRight((nextSequencedFn, interceptorFn) => chainedInterceptorFn(nextSequencedFn, interceptorFn, this.injector), interceptorChainEndFn);
    }
    if (this.contributeToStability) {
      const taskId = this.pendingTasks.add();
      return this.chain(initialRequest, (downstreamRequest) => this.backend.handle(downstreamRequest)).pipe(finalize(() => this.pendingTasks.remove(taskId)));
    } else {
      return this.chain(initialRequest, (downstreamRequest) => this.backend.handle(downstreamRequest));
    }
  }
  static {
    this.\u0275fac = function HttpInterceptorHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpInterceptorHandler)(\u0275\u0275inject(HttpBackend), \u0275\u0275inject(EnvironmentInjector));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _HttpInterceptorHandler,
      factory: _HttpInterceptorHandler.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpInterceptorHandler, [{
    type: Injectable
  }], () => [{
    type: HttpBackend
  }, {
    type: EnvironmentInjector
  }], null);
})();
var nextRequestId = 0;
var foreignDocument;
var JSONP_ERR_NO_CALLBACK = "JSONP injected script did not invoke callback.";
var JSONP_ERR_WRONG_METHOD = "JSONP requests must use JSONP request method.";
var JSONP_ERR_WRONG_RESPONSE_TYPE = "JSONP requests must use Json response type.";
var JSONP_ERR_HEADERS_NOT_SUPPORTED = "JSONP requests do not support headers.";
var JsonpCallbackContext = class {
};
function jsonpCallbackContext() {
  if (typeof window === "object") {
    return window;
  }
  return {};
}
var JsonpClientBackend = class _JsonpClientBackend {
  constructor(callbackMap, document2) {
    this.callbackMap = callbackMap;
    this.document = document2;
    this.resolvedPromise = Promise.resolve();
  }
  /**
   * Get the name of the next callback method, by incrementing the global `nextRequestId`.
   */
  nextCallback() {
    return `ng_jsonp_callback_${nextRequestId++}`;
  }
  /**
   * Processes a JSONP request and returns an event stream of the results.
   * @param req The request object.
   * @returns An observable of the response events.
   *
   */
  handle(req) {
    if (req.method !== "JSONP") {
      throw new Error(JSONP_ERR_WRONG_METHOD);
    } else if (req.responseType !== "json") {
      throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
    }
    if (req.headers.keys().length > 0) {
      throw new Error(JSONP_ERR_HEADERS_NOT_SUPPORTED);
    }
    return new Observable((observer) => {
      const callback = this.nextCallback();
      const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
      const node = this.document.createElement("script");
      node.src = url;
      let body = null;
      let finished = false;
      this.callbackMap[callback] = (data) => {
        delete this.callbackMap[callback];
        body = data;
        finished = true;
      };
      const cleanup = () => {
        node.removeEventListener("load", onLoad);
        node.removeEventListener("error", onError);
        node.remove();
        delete this.callbackMap[callback];
      };
      const onLoad = (event) => {
        this.resolvedPromise.then(() => {
          cleanup();
          if (!finished) {
            observer.error(new HttpErrorResponse({
              url,
              status: 0,
              statusText: "JSONP Error",
              error: new Error(JSONP_ERR_NO_CALLBACK)
            }));
            return;
          }
          observer.next(new HttpResponse({
            body,
            status: HTTP_STATUS_CODE_OK,
            statusText: "OK",
            url
          }));
          observer.complete();
        });
      };
      const onError = (error) => {
        cleanup();
        observer.error(new HttpErrorResponse({
          error,
          status: 0,
          statusText: "JSONP Error",
          url
        }));
      };
      node.addEventListener("load", onLoad);
      node.addEventListener("error", onError);
      this.document.body.appendChild(node);
      observer.next({
        type: HttpEventType.Sent
      });
      return () => {
        if (!finished) {
          this.removeListeners(node);
        }
        cleanup();
      };
    });
  }
  removeListeners(script) {
    foreignDocument ??= this.document.implementation.createHTMLDocument();
    foreignDocument.adoptNode(script);
  }
  static {
    this.\u0275fac = function JsonpClientBackend_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JsonpClientBackend)(\u0275\u0275inject(JsonpCallbackContext), \u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _JsonpClientBackend,
      factory: _JsonpClientBackend.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonpClientBackend, [{
    type: Injectable
  }], () => [{
    type: JsonpCallbackContext
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
function jsonpInterceptorFn(req, next) {
  if (req.method === "JSONP") {
    return inject(JsonpClientBackend).handle(req);
  }
  return next(req);
}
var JsonpInterceptor = class _JsonpInterceptor {
  constructor(injector) {
    this.injector = injector;
  }
  /**
   * Identifies and handles a given JSONP request.
   * @param initialRequest The outgoing request object to handle.
   * @param next The next interceptor in the chain, or the backend
   * if no interceptors remain in the chain.
   * @returns An observable of the event stream.
   */
  intercept(initialRequest, next) {
    return runInInjectionContext(this.injector, () => jsonpInterceptorFn(initialRequest, (downstreamRequest) => next.handle(downstreamRequest)));
  }
  static {
    this.\u0275fac = function JsonpInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JsonpInterceptor)(\u0275\u0275inject(EnvironmentInjector));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _JsonpInterceptor,
      factory: _JsonpInterceptor.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonpInterceptor, [{
    type: Injectable
  }], () => [{
    type: EnvironmentInjector
  }], null);
})();
var XSSI_PREFIX = /^\)\]\}',?\n/;
function getResponseUrl(xhr) {
  if ("responseURL" in xhr && xhr.responseURL) {
    return xhr.responseURL;
  }
  if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
    return xhr.getResponseHeader("X-Request-URL");
  }
  return null;
}
var HttpXhrBackend = class _HttpXhrBackend {
  constructor(xhrFactory) {
    this.xhrFactory = xhrFactory;
  }
  /**
   * Processes a request and returns a stream of response events.
   * @param req The request object.
   * @returns An observable of the response events.
   */
  handle(req) {
    if (req.method === "JSONP") {
      throw new RuntimeError(-2800, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot make a JSONP request without JSONP support. To fix the problem, either add the \`withJsonpSupport()\` call (if \`provideHttpClient()\` is used) or import the \`HttpClientJsonpModule\` in the root NgModule.`);
    }
    const xhrFactory = this.xhrFactory;
    const source = xhrFactory.\u0275loadImpl ? from(xhrFactory.\u0275loadImpl()) : of(null);
    return source.pipe(switchMap(() => {
      return new Observable((observer) => {
        const xhr = xhrFactory.build();
        xhr.open(req.method, req.urlWithParams);
        if (req.withCredentials) {
          xhr.withCredentials = true;
        }
        req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(",")));
        if (!req.headers.has("Accept")) {
          xhr.setRequestHeader("Accept", "application/json, text/plain, */*");
        }
        if (!req.headers.has("Content-Type")) {
          const detectedType = req.detectContentTypeHeader();
          if (detectedType !== null) {
            xhr.setRequestHeader("Content-Type", detectedType);
          }
        }
        if (req.responseType) {
          const responseType = req.responseType.toLowerCase();
          xhr.responseType = responseType !== "json" ? responseType : "text";
        }
        const reqBody = req.serializeBody();
        let headerResponse = null;
        const partialFromXhr = () => {
          if (headerResponse !== null) {
            return headerResponse;
          }
          const statusText = xhr.statusText || "OK";
          const headers = new HttpHeaders(xhr.getAllResponseHeaders());
          const url = getResponseUrl(xhr) || req.url;
          headerResponse = new HttpHeaderResponse({
            headers,
            status: xhr.status,
            statusText,
            url
          });
          return headerResponse;
        };
        const onLoad = () => {
          let {
            headers,
            status,
            statusText,
            url
          } = partialFromXhr();
          let body = null;
          if (status !== HTTP_STATUS_CODE_NO_CONTENT) {
            body = typeof xhr.response === "undefined" ? xhr.responseText : xhr.response;
          }
          if (status === 0) {
            status = !!body ? HTTP_STATUS_CODE_OK : 0;
          }
          let ok = status >= 200 && status < 300;
          if (req.responseType === "json" && typeof body === "string") {
            const originalBody = body;
            body = body.replace(XSSI_PREFIX, "");
            try {
              body = body !== "" ? JSON.parse(body) : null;
            } catch (error) {
              body = originalBody;
              if (ok) {
                ok = false;
                body = {
                  error,
                  text: body
                };
              }
            }
          }
          if (ok) {
            observer.next(new HttpResponse({
              body,
              headers,
              status,
              statusText,
              url: url || void 0
            }));
            observer.complete();
          } else {
            observer.error(new HttpErrorResponse({
              // The error in this case is the response body (error from the server).
              error: body,
              headers,
              status,
              statusText,
              url: url || void 0
            }));
          }
        };
        const onError = (error) => {
          const {
            url
          } = partialFromXhr();
          const res = new HttpErrorResponse({
            error,
            status: xhr.status || 0,
            statusText: xhr.statusText || "Unknown Error",
            url: url || void 0
          });
          observer.error(res);
        };
        let sentHeaders = false;
        const onDownProgress = (event) => {
          if (!sentHeaders) {
            observer.next(partialFromXhr());
            sentHeaders = true;
          }
          let progressEvent = {
            type: HttpEventType.DownloadProgress,
            loaded: event.loaded
          };
          if (event.lengthComputable) {
            progressEvent.total = event.total;
          }
          if (req.responseType === "text" && !!xhr.responseText) {
            progressEvent.partialText = xhr.responseText;
          }
          observer.next(progressEvent);
        };
        const onUpProgress = (event) => {
          let progress = {
            type: HttpEventType.UploadProgress,
            loaded: event.loaded
          };
          if (event.lengthComputable) {
            progress.total = event.total;
          }
          observer.next(progress);
        };
        xhr.addEventListener("load", onLoad);
        xhr.addEventListener("error", onError);
        xhr.addEventListener("timeout", onError);
        xhr.addEventListener("abort", onError);
        if (req.reportProgress) {
          xhr.addEventListener("progress", onDownProgress);
          if (reqBody !== null && xhr.upload) {
            xhr.upload.addEventListener("progress", onUpProgress);
          }
        }
        xhr.send(reqBody);
        observer.next({
          type: HttpEventType.Sent
        });
        return () => {
          xhr.removeEventListener("error", onError);
          xhr.removeEventListener("abort", onError);
          xhr.removeEventListener("load", onLoad);
          xhr.removeEventListener("timeout", onError);
          if (req.reportProgress) {
            xhr.removeEventListener("progress", onDownProgress);
            if (reqBody !== null && xhr.upload) {
              xhr.upload.removeEventListener("progress", onUpProgress);
            }
          }
          if (xhr.readyState !== xhr.DONE) {
            xhr.abort();
          }
        };
      });
    }));
  }
  static {
    this.\u0275fac = function HttpXhrBackend_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpXhrBackend)(\u0275\u0275inject(XhrFactory));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _HttpXhrBackend,
      factory: _HttpXhrBackend.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpXhrBackend, [{
    type: Injectable
  }], () => [{
    type: XhrFactory
  }], null);
})();
var XSRF_ENABLED = new InjectionToken(ngDevMode ? "XSRF_ENABLED" : "");
var XSRF_DEFAULT_COOKIE_NAME = "XSRF-TOKEN";
var XSRF_COOKIE_NAME = new InjectionToken(ngDevMode ? "XSRF_COOKIE_NAME" : "", {
  providedIn: "root",
  factory: () => XSRF_DEFAULT_COOKIE_NAME
});
var XSRF_DEFAULT_HEADER_NAME = "X-XSRF-TOKEN";
var XSRF_HEADER_NAME = new InjectionToken(ngDevMode ? "XSRF_HEADER_NAME" : "", {
  providedIn: "root",
  factory: () => XSRF_DEFAULT_HEADER_NAME
});
var HttpXsrfTokenExtractor = class {
};
var HttpXsrfCookieExtractor = class _HttpXsrfCookieExtractor {
  constructor(doc, platform, cookieName) {
    this.doc = doc;
    this.platform = platform;
    this.cookieName = cookieName;
    this.lastCookieString = "";
    this.lastToken = null;
    this.parseCount = 0;
  }
  getToken() {
    if (this.platform === "server") {
      return null;
    }
    const cookieString = this.doc.cookie || "";
    if (cookieString !== this.lastCookieString) {
      this.parseCount++;
      this.lastToken = parseCookieValue(cookieString, this.cookieName);
      this.lastCookieString = cookieString;
    }
    return this.lastToken;
  }
  static {
    this.\u0275fac = function HttpXsrfCookieExtractor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpXsrfCookieExtractor)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(XSRF_COOKIE_NAME));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _HttpXsrfCookieExtractor,
      factory: _HttpXsrfCookieExtractor.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpXsrfCookieExtractor, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [XSRF_COOKIE_NAME]
    }]
  }], null);
})();
function xsrfInterceptorFn(req, next) {
  const lcUrl = req.url.toLowerCase();
  if (!inject(XSRF_ENABLED) || req.method === "GET" || req.method === "HEAD" || lcUrl.startsWith("http://") || lcUrl.startsWith("https://")) {
    return next(req);
  }
  const token = inject(HttpXsrfTokenExtractor).getToken();
  const headerName = inject(XSRF_HEADER_NAME);
  if (token != null && !req.headers.has(headerName)) {
    req = req.clone({
      headers: req.headers.set(headerName, token)
    });
  }
  return next(req);
}
var HttpXsrfInterceptor = class _HttpXsrfInterceptor {
  constructor(injector) {
    this.injector = injector;
  }
  intercept(initialRequest, next) {
    return runInInjectionContext(this.injector, () => xsrfInterceptorFn(initialRequest, (downstreamRequest) => next.handle(downstreamRequest)));
  }
  static {
    this.\u0275fac = function HttpXsrfInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpXsrfInterceptor)(\u0275\u0275inject(EnvironmentInjector));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _HttpXsrfInterceptor,
      factory: _HttpXsrfInterceptor.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpXsrfInterceptor, [{
    type: Injectable
  }], () => [{
    type: EnvironmentInjector
  }], null);
})();
var HttpFeatureKind;
(function(HttpFeatureKind2) {
  HttpFeatureKind2[HttpFeatureKind2["Interceptors"] = 0] = "Interceptors";
  HttpFeatureKind2[HttpFeatureKind2["LegacyInterceptors"] = 1] = "LegacyInterceptors";
  HttpFeatureKind2[HttpFeatureKind2["CustomXsrfConfiguration"] = 2] = "CustomXsrfConfiguration";
  HttpFeatureKind2[HttpFeatureKind2["NoXsrfProtection"] = 3] = "NoXsrfProtection";
  HttpFeatureKind2[HttpFeatureKind2["JsonpSupport"] = 4] = "JsonpSupport";
  HttpFeatureKind2[HttpFeatureKind2["RequestsMadeViaParent"] = 5] = "RequestsMadeViaParent";
  HttpFeatureKind2[HttpFeatureKind2["Fetch"] = 6] = "Fetch";
})(HttpFeatureKind || (HttpFeatureKind = {}));
function makeHttpFeature(kind, providers) {
  return {
    \u0275kind: kind,
    \u0275providers: providers
  };
}
function provideHttpClient(...features) {
  if (ngDevMode) {
    const featureKinds = new Set(features.map((f) => f.\u0275kind));
    if (featureKinds.has(HttpFeatureKind.NoXsrfProtection) && featureKinds.has(HttpFeatureKind.CustomXsrfConfiguration)) {
      throw new Error(ngDevMode ? `Configuration error: found both withXsrfConfiguration() and withNoXsrfProtection() in the same call to provideHttpClient(), which is a contradiction.` : "");
    }
  }
  const providers = [HttpClient, HttpXhrBackend, HttpInterceptorHandler, {
    provide: HttpHandler,
    useExisting: HttpInterceptorHandler
  }, {
    provide: HttpBackend,
    useFactory: () => {
      return inject(FetchBackend, {
        optional: true
      }) ?? inject(HttpXhrBackend);
    }
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useValue: xsrfInterceptorFn,
    multi: true
  }, {
    provide: XSRF_ENABLED,
    useValue: true
  }, {
    provide: HttpXsrfTokenExtractor,
    useClass: HttpXsrfCookieExtractor
  }];
  for (const feature of features) {
    providers.push(...feature.\u0275providers);
  }
  return makeEnvironmentProviders(providers);
}
function withInterceptors(interceptorFns) {
  return makeHttpFeature(HttpFeatureKind.Interceptors, interceptorFns.map((interceptorFn) => {
    return {
      provide: HTTP_INTERCEPTOR_FNS,
      useValue: interceptorFn,
      multi: true
    };
  }));
}
var LEGACY_INTERCEPTOR_FN = new InjectionToken(ngDevMode ? "LEGACY_INTERCEPTOR_FN" : "");
function withInterceptorsFromDi() {
  return makeHttpFeature(HttpFeatureKind.LegacyInterceptors, [{
    provide: LEGACY_INTERCEPTOR_FN,
    useFactory: legacyInterceptorFnFactory
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useExisting: LEGACY_INTERCEPTOR_FN,
    multi: true
  }]);
}
function withXsrfConfiguration({
  cookieName,
  headerName
}) {
  const providers = [];
  if (cookieName !== void 0) {
    providers.push({
      provide: XSRF_COOKIE_NAME,
      useValue: cookieName
    });
  }
  if (headerName !== void 0) {
    providers.push({
      provide: XSRF_HEADER_NAME,
      useValue: headerName
    });
  }
  return makeHttpFeature(HttpFeatureKind.CustomXsrfConfiguration, providers);
}
function withNoXsrfProtection() {
  return makeHttpFeature(HttpFeatureKind.NoXsrfProtection, [{
    provide: XSRF_ENABLED,
    useValue: false
  }]);
}
function withJsonpSupport() {
  return makeHttpFeature(HttpFeatureKind.JsonpSupport, [JsonpClientBackend, {
    provide: JsonpCallbackContext,
    useFactory: jsonpCallbackContext
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useValue: jsonpInterceptorFn,
    multi: true
  }]);
}
var HttpClientXsrfModule = class _HttpClientXsrfModule {
  /**
   * Disable the default XSRF protection.
   */
  static disable() {
    return {
      ngModule: _HttpClientXsrfModule,
      providers: [withNoXsrfProtection().\u0275providers]
    };
  }
  /**
   * Configure XSRF protection.
   * @param options An object that can specify either or both
   * cookie name or header name.
   * - Cookie name default is `XSRF-TOKEN`.
   * - Header name default is `X-XSRF-TOKEN`.
   *
   */
  static withOptions(options = {}) {
    return {
      ngModule: _HttpClientXsrfModule,
      providers: withXsrfConfiguration(options).\u0275providers
    };
  }
  static {
    this.\u0275fac = function HttpClientXsrfModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpClientXsrfModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _HttpClientXsrfModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [HttpXsrfInterceptor, {
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpXsrfInterceptor,
        multi: true
      }, {
        provide: HttpXsrfTokenExtractor,
        useClass: HttpXsrfCookieExtractor
      }, withXsrfConfiguration({
        cookieName: XSRF_DEFAULT_COOKIE_NAME,
        headerName: XSRF_DEFAULT_HEADER_NAME
      }).\u0275providers, {
        provide: XSRF_ENABLED,
        useValue: true
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClientXsrfModule, [{
    type: NgModule,
    args: [{
      providers: [HttpXsrfInterceptor, {
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpXsrfInterceptor,
        multi: true
      }, {
        provide: HttpXsrfTokenExtractor,
        useClass: HttpXsrfCookieExtractor
      }, withXsrfConfiguration({
        cookieName: XSRF_DEFAULT_COOKIE_NAME,
        headerName: XSRF_DEFAULT_HEADER_NAME
      }).\u0275providers, {
        provide: XSRF_ENABLED,
        useValue: true
      }]
    }]
  }], null, null);
})();
var HttpClientModule = class _HttpClientModule {
  static {
    this.\u0275fac = function HttpClientModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpClientModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _HttpClientModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [provideHttpClient(withInterceptorsFromDi())]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClientModule, [{
    type: NgModule,
    args: [{
      /**
       * Configures the dependency injector where it is imported
       * with supporting services for HTTP communications.
       */
      providers: [provideHttpClient(withInterceptorsFromDi())]
    }]
  }], null, null);
})();
var HttpClientJsonpModule = class _HttpClientJsonpModule {
  static {
    this.\u0275fac = function HttpClientJsonpModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpClientJsonpModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _HttpClientJsonpModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [withJsonpSupport().\u0275providers]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClientJsonpModule, [{
    type: NgModule,
    args: [{
      providers: [withJsonpSupport().\u0275providers]
    }]
  }], null, null);
})();
var HTTP_TRANSFER_CACHE_ORIGIN_MAP = new InjectionToken(ngDevMode ? "HTTP_TRANSFER_CACHE_ORIGIN_MAP" : "");
var CACHE_OPTIONS = new InjectionToken(ngDevMode ? "HTTP_TRANSFER_STATE_CACHE_OPTIONS" : "");

// node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
var GenericBrowserDomAdapter = class extends DomAdapter {
  constructor() {
    super(...arguments);
    this.supportsDOMEvents = true;
  }
};
var BrowserDomAdapter = class _BrowserDomAdapter extends GenericBrowserDomAdapter {
  static makeCurrent() {
    setRootDomAdapter(new _BrowserDomAdapter());
  }
  onAndCancel(el, evt, listener) {
    el.addEventListener(evt, listener);
    return () => {
      el.removeEventListener(evt, listener);
    };
  }
  dispatchEvent(el, evt) {
    el.dispatchEvent(evt);
  }
  remove(node) {
    node.remove();
  }
  createElement(tagName, doc) {
    doc = doc || this.getDefaultDocument();
    return doc.createElement(tagName);
  }
  createHtmlDocument() {
    return document.implementation.createHTMLDocument("fakeTitle");
  }
  getDefaultDocument() {
    return document;
  }
  isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
  }
  isShadowRoot(node) {
    return node instanceof DocumentFragment;
  }
  /** @deprecated No longer being used in Ivy code. To be removed in version 14. */
  getGlobalEventTarget(doc, target) {
    if (target === "window") {
      return window;
    }
    if (target === "document") {
      return doc;
    }
    if (target === "body") {
      return doc.body;
    }
    return null;
  }
  getBaseHref(doc) {
    const href = getBaseElementHref();
    return href == null ? null : relativePath(href);
  }
  resetBaseElement() {
    baseElement = null;
  }
  getUserAgent() {
    return window.navigator.userAgent;
  }
  getCookie(name) {
    return parseCookieValue(document.cookie, name);
  }
};
var baseElement = null;
function getBaseElementHref() {
  baseElement = baseElement || document.querySelector("base");
  return baseElement ? baseElement.getAttribute("href") : null;
}
function relativePath(url) {
  return new URL(url, document.baseURI).pathname;
}
var BrowserGetTestability = class {
  addToWindow(registry) {
    _global["getAngularTestability"] = (elem, findInAncestors = true) => {
      const testability = registry.findTestabilityInTree(elem, findInAncestors);
      if (testability == null) {
        throw new RuntimeError(5103, (typeof ngDevMode === "undefined" || ngDevMode) && "Could not find testability for element.");
      }
      return testability;
    };
    _global["getAllAngularTestabilities"] = () => registry.getAllTestabilities();
    _global["getAllAngularRootElements"] = () => registry.getAllRootElements();
    const whenAllStable = (callback) => {
      const testabilities = _global["getAllAngularTestabilities"]();
      let count = testabilities.length;
      const decrement = function() {
        count--;
        if (count == 0) {
          callback();
        }
      };
      testabilities.forEach((testability) => {
        testability.whenStable(decrement);
      });
    };
    if (!_global["frameworkStabilizers"]) {
      _global["frameworkStabilizers"] = [];
    }
    _global["frameworkStabilizers"].push(whenAllStable);
  }
  findTestabilityInTree(registry, elem, findInAncestors) {
    if (elem == null) {
      return null;
    }
    const t = registry.getTestability(elem);
    if (t != null) {
      return t;
    } else if (!findInAncestors) {
      return null;
    }
    if (getDOM().isShadowRoot(elem)) {
      return this.findTestabilityInTree(registry, elem.host, true);
    }
    return this.findTestabilityInTree(registry, elem.parentElement, true);
  }
};
var BrowserXhr = class _BrowserXhr {
  build() {
    return new XMLHttpRequest();
  }
  static {
    this.\u0275fac = function BrowserXhr_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrowserXhr)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _BrowserXhr,
      factory: _BrowserXhr.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserXhr, [{
    type: Injectable
  }], null, null);
})();
var EVENT_MANAGER_PLUGINS = new InjectionToken(ngDevMode ? "EventManagerPlugins" : "");
var EventManager = class _EventManager {
  /**
   * Initializes an instance of the event-manager service.
   */
  constructor(plugins, _zone) {
    this._zone = _zone;
    this._eventNameToPlugin = /* @__PURE__ */ new Map();
    plugins.forEach((plugin) => {
      plugin.manager = this;
    });
    this._plugins = plugins.slice().reverse();
  }
  /**
   * Registers a handler for a specific element and event.
   *
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @returns  A callback function that can be used to remove the handler.
   */
  addEventListener(element, eventName, handler) {
    const plugin = this._findPluginFor(eventName);
    return plugin.addEventListener(element, eventName, handler);
  }
  /**
   * Retrieves the compilation zone in which event listeners are registered.
   */
  getZone() {
    return this._zone;
  }
  /** @internal */
  _findPluginFor(eventName) {
    let plugin = this._eventNameToPlugin.get(eventName);
    if (plugin) {
      return plugin;
    }
    const plugins = this._plugins;
    plugin = plugins.find((plugin2) => plugin2.supports(eventName));
    if (!plugin) {
      throw new RuntimeError(5101, (typeof ngDevMode === "undefined" || ngDevMode) && `No event manager plugin found for event ${eventName}`);
    }
    this._eventNameToPlugin.set(eventName, plugin);
    return plugin;
  }
  static {
    this.\u0275fac = function EventManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventManager)(\u0275\u0275inject(EVENT_MANAGER_PLUGINS), \u0275\u0275inject(NgZone));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _EventManager,
      factory: _EventManager.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventManager, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [EVENT_MANAGER_PLUGINS]
    }]
  }, {
    type: NgZone
  }], null);
})();
var EventManagerPlugin = class {
  // TODO: remove (has some usage in G3)
  constructor(_doc) {
    this._doc = _doc;
  }
};
var APP_ID_ATTRIBUTE_NAME = "ng-app-id";
var SharedStylesHost = class _SharedStylesHost {
  constructor(doc, appId, nonce, platformId = {}) {
    this.doc = doc;
    this.appId = appId;
    this.nonce = nonce;
    this.platformId = platformId;
    this.styleRef = /* @__PURE__ */ new Map();
    this.hostNodes = /* @__PURE__ */ new Set();
    this.styleNodesInDOM = this.collectServerRenderedStyles();
    this.platformIsServer = isPlatformServer(platformId);
    this.resetHostNodes();
  }
  addStyles(styles) {
    for (const style of styles) {
      const usageCount = this.changeUsageCount(style, 1);
      if (usageCount === 1) {
        this.onStyleAdded(style);
      }
    }
  }
  removeStyles(styles) {
    for (const style of styles) {
      const usageCount = this.changeUsageCount(style, -1);
      if (usageCount <= 0) {
        this.onStyleRemoved(style);
      }
    }
  }
  ngOnDestroy() {
    const styleNodesInDOM = this.styleNodesInDOM;
    if (styleNodesInDOM) {
      styleNodesInDOM.forEach((node) => node.remove());
      styleNodesInDOM.clear();
    }
    for (const style of this.getAllStyles()) {
      this.onStyleRemoved(style);
    }
    this.resetHostNodes();
  }
  addHost(hostNode) {
    this.hostNodes.add(hostNode);
    for (const style of this.getAllStyles()) {
      this.addStyleToHost(hostNode, style);
    }
  }
  removeHost(hostNode) {
    this.hostNodes.delete(hostNode);
  }
  getAllStyles() {
    return this.styleRef.keys();
  }
  onStyleAdded(style) {
    for (const host of this.hostNodes) {
      this.addStyleToHost(host, style);
    }
  }
  onStyleRemoved(style) {
    const styleRef = this.styleRef;
    styleRef.get(style)?.elements?.forEach((node) => node.remove());
    styleRef.delete(style);
  }
  collectServerRenderedStyles() {
    const styles = this.doc.head?.querySelectorAll(`style[${APP_ID_ATTRIBUTE_NAME}="${this.appId}"]`);
    if (styles?.length) {
      const styleMap = /* @__PURE__ */ new Map();
      styles.forEach((style) => {
        if (style.textContent != null) {
          styleMap.set(style.textContent, style);
        }
      });
      return styleMap;
    }
    return null;
  }
  changeUsageCount(style, delta) {
    const map2 = this.styleRef;
    if (map2.has(style)) {
      const styleRefValue = map2.get(style);
      styleRefValue.usage += delta;
      return styleRefValue.usage;
    }
    map2.set(style, {
      usage: delta,
      elements: []
    });
    return delta;
  }
  getStyleElement(host, style) {
    const styleNodesInDOM = this.styleNodesInDOM;
    const styleEl = styleNodesInDOM?.get(style);
    if (styleEl?.parentNode === host) {
      styleNodesInDOM.delete(style);
      styleEl.removeAttribute(APP_ID_ATTRIBUTE_NAME);
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        styleEl.setAttribute("ng-style-reused", "");
      }
      return styleEl;
    } else {
      const styleEl2 = this.doc.createElement("style");
      if (this.nonce) {
        styleEl2.setAttribute("nonce", this.nonce);
      }
      styleEl2.textContent = style;
      if (this.platformIsServer) {
        styleEl2.setAttribute(APP_ID_ATTRIBUTE_NAME, this.appId);
      }
      host.appendChild(styleEl2);
      return styleEl2;
    }
  }
  addStyleToHost(host, style) {
    const styleEl = this.getStyleElement(host, style);
    const styleRef = this.styleRef;
    const styleElRef = styleRef.get(style)?.elements;
    if (styleElRef) {
      styleElRef.push(styleEl);
    } else {
      styleRef.set(style, {
        elements: [styleEl],
        usage: 1
      });
    }
  }
  resetHostNodes() {
    const hostNodes = this.hostNodes;
    hostNodes.clear();
    hostNodes.add(this.doc.head);
  }
  static {
    this.\u0275fac = function SharedStylesHost_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SharedStylesHost)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(APP_ID), \u0275\u0275inject(CSP_NONCE, 8), \u0275\u0275inject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _SharedStylesHost,
      factory: _SharedStylesHost.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedStylesHost, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [APP_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CSP_NONCE]
    }, {
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var NAMESPACE_URIS = {
  "svg": "http://www.w3.org/2000/svg",
  "xhtml": "http://www.w3.org/1999/xhtml",
  "xlink": "http://www.w3.org/1999/xlink",
  "xml": "http://www.w3.org/XML/1998/namespace",
  "xmlns": "http://www.w3.org/2000/xmlns/",
  "math": "http://www.w3.org/1998/Math/MathML"
};
var COMPONENT_REGEX = /%COMP%/g;
var COMPONENT_VARIABLE = "%COMP%";
var HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
var CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
var REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT = true;
var REMOVE_STYLES_ON_COMPONENT_DESTROY = new InjectionToken(ngDevMode ? "RemoveStylesOnCompDestroy" : "", {
  providedIn: "root",
  factory: () => REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT
});
function shimContentAttribute(componentShortId) {
  return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimHostAttribute(componentShortId) {
  return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimStylesContent(compId, styles) {
  return styles.map((s) => s.replace(COMPONENT_REGEX, compId));
}
var DomRendererFactory2 = class _DomRendererFactory2 {
  constructor(eventManager, sharedStylesHost, appId, removeStylesOnCompDestroy, doc, platformId, ngZone, nonce = null) {
    this.eventManager = eventManager;
    this.sharedStylesHost = sharedStylesHost;
    this.appId = appId;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    this.doc = doc;
    this.platformId = platformId;
    this.ngZone = ngZone;
    this.nonce = nonce;
    this.rendererByCompId = /* @__PURE__ */ new Map();
    this.platformIsServer = isPlatformServer(platformId);
    this.defaultRenderer = new DefaultDomRenderer2(eventManager, doc, ngZone, this.platformIsServer);
  }
  createRenderer(element, type) {
    if (!element || !type) {
      return this.defaultRenderer;
    }
    if (this.platformIsServer && type.encapsulation === ViewEncapsulation$1.ShadowDom) {
      type = __spreadProps(__spreadValues({}, type), {
        encapsulation: ViewEncapsulation$1.Emulated
      });
    }
    const renderer = this.getOrCreateRenderer(element, type);
    if (renderer instanceof EmulatedEncapsulationDomRenderer2) {
      renderer.applyToHost(element);
    } else if (renderer instanceof NoneEncapsulationDomRenderer) {
      renderer.applyStyles();
    }
    return renderer;
  }
  getOrCreateRenderer(element, type) {
    const rendererByCompId = this.rendererByCompId;
    let renderer = rendererByCompId.get(type.id);
    if (!renderer) {
      const doc = this.doc;
      const ngZone = this.ngZone;
      const eventManager = this.eventManager;
      const sharedStylesHost = this.sharedStylesHost;
      const removeStylesOnCompDestroy = this.removeStylesOnCompDestroy;
      const platformIsServer = this.platformIsServer;
      switch (type.encapsulation) {
        case ViewEncapsulation$1.Emulated:
          renderer = new EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, type, this.appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer);
          break;
        case ViewEncapsulation$1.ShadowDom:
          return new ShadowDomRenderer(eventManager, sharedStylesHost, element, type, doc, ngZone, this.nonce, platformIsServer);
        default:
          renderer = new NoneEncapsulationDomRenderer(eventManager, sharedStylesHost, type, removeStylesOnCompDestroy, doc, ngZone, platformIsServer);
          break;
      }
      rendererByCompId.set(type.id, renderer);
    }
    return renderer;
  }
  ngOnDestroy() {
    this.rendererByCompId.clear();
  }
  static {
    this.\u0275fac = function DomRendererFactory2_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DomRendererFactory2)(\u0275\u0275inject(EventManager), \u0275\u0275inject(SharedStylesHost), \u0275\u0275inject(APP_ID), \u0275\u0275inject(REMOVE_STYLES_ON_COMPONENT_DESTROY), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(NgZone), \u0275\u0275inject(CSP_NONCE));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DomRendererFactory2,
      factory: _DomRendererFactory2.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomRendererFactory2, [{
    type: Injectable
  }], () => [{
    type: EventManager
  }, {
    type: SharedStylesHost
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [APP_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [REMOVE_STYLES_ON_COMPONENT_DESTROY]
    }]
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CSP_NONCE]
    }]
  }], null);
})();
var DefaultDomRenderer2 = class {
  constructor(eventManager, doc, ngZone, platformIsServer) {
    this.eventManager = eventManager;
    this.doc = doc;
    this.ngZone = ngZone;
    this.platformIsServer = platformIsServer;
    this.data = /* @__PURE__ */ Object.create(null);
    this.throwOnSyntheticProps = true;
    this.destroyNode = null;
  }
  destroy() {
  }
  createElement(name, namespace) {
    if (namespace) {
      return this.doc.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
    }
    return this.doc.createElement(name);
  }
  createComment(value) {
    return this.doc.createComment(value);
  }
  createText(value) {
    return this.doc.createTextNode(value);
  }
  appendChild(parent, newChild) {
    const targetParent = isTemplateNode(parent) ? parent.content : parent;
    targetParent.appendChild(newChild);
  }
  insertBefore(parent, newChild, refChild) {
    if (parent) {
      const targetParent = isTemplateNode(parent) ? parent.content : parent;
      targetParent.insertBefore(newChild, refChild);
    }
  }
  removeChild(_parent, oldChild) {
    oldChild.remove();
  }
  selectRootElement(selectorOrNode, preserveContent) {
    let el = typeof selectorOrNode === "string" ? this.doc.querySelector(selectorOrNode) : selectorOrNode;
    if (!el) {
      throw new RuntimeError(-5104, (typeof ngDevMode === "undefined" || ngDevMode) && `The selector "${selectorOrNode}" did not match any elements`);
    }
    if (!preserveContent) {
      el.textContent = "";
    }
    return el;
  }
  parentNode(node) {
    return node.parentNode;
  }
  nextSibling(node) {
    return node.nextSibling;
  }
  setAttribute(el, name, value, namespace) {
    if (namespace) {
      name = namespace + ":" + name;
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.setAttributeNS(namespaceUri, name, value);
      } else {
        el.setAttribute(name, value);
      }
    } else {
      el.setAttribute(name, value);
    }
  }
  removeAttribute(el, name, namespace) {
    if (namespace) {
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.removeAttributeNS(namespaceUri, name);
      } else {
        el.removeAttribute(`${namespace}:${name}`);
      }
    } else {
      el.removeAttribute(name);
    }
  }
  addClass(el, name) {
    el.classList.add(name);
  }
  removeClass(el, name) {
    el.classList.remove(name);
  }
  setStyle(el, style, value, flags) {
    if (flags & (RendererStyleFlags2.DashCase | RendererStyleFlags2.Important)) {
      el.style.setProperty(style, value, flags & RendererStyleFlags2.Important ? "important" : "");
    } else {
      el.style[style] = value;
    }
  }
  removeStyle(el, style, flags) {
    if (flags & RendererStyleFlags2.DashCase) {
      el.style.removeProperty(style);
    } else {
      el.style[style] = "";
    }
  }
  setProperty(el, name, value) {
    if (el == null) {
      return;
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(name, "property");
    el[name] = value;
  }
  setValue(node, value) {
    node.nodeValue = value;
  }
  listen(target, event, callback) {
    (typeof ngDevMode === "undefined" || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(event, "listener");
    if (typeof target === "string") {
      target = getDOM().getGlobalEventTarget(this.doc, target);
      if (!target) {
        throw new Error(`Unsupported event target ${target} for event ${event}`);
      }
    }
    return this.eventManager.addEventListener(target, event, this.decoratePreventDefault(callback));
  }
  decoratePreventDefault(eventHandler) {
    return (event) => {
      if (event === "__ngUnwrap__") {
        return eventHandler;
      }
      const allowDefaultBehavior = this.platformIsServer ? this.ngZone.runGuarded(() => eventHandler(event)) : eventHandler(event);
      if (allowDefaultBehavior === false) {
        event.preventDefault();
      }
      return void 0;
    };
  }
};
var AT_CHARCODE = (() => "@".charCodeAt(0))();
function checkNoSyntheticProp(name, nameKind) {
  if (name.charCodeAt(0) === AT_CHARCODE) {
    throw new RuntimeError(5105, `Unexpected synthetic ${nameKind} ${name} found. Please make sure that:
  - Either \`BrowserAnimationsModule\` or \`NoopAnimationsModule\` are imported in your application.
  - There is corresponding configuration for the animation named \`${name}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.io/api/core/Component#animations).`);
  }
}
function isTemplateNode(node) {
  return node.tagName === "TEMPLATE" && node.content !== void 0;
}
var ShadowDomRenderer = class extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, hostEl, component, doc, ngZone, nonce, platformIsServer) {
    super(eventManager, doc, ngZone, platformIsServer);
    this.sharedStylesHost = sharedStylesHost;
    this.hostEl = hostEl;
    this.shadowRoot = hostEl.attachShadow({
      mode: "open"
    });
    this.sharedStylesHost.addHost(this.shadowRoot);
    const styles = shimStylesContent(component.id, component.styles);
    for (const style of styles) {
      const styleEl = document.createElement("style");
      if (nonce) {
        styleEl.setAttribute("nonce", nonce);
      }
      styleEl.textContent = style;
      this.shadowRoot.appendChild(styleEl);
    }
  }
  nodeOrShadowRoot(node) {
    return node === this.hostEl ? this.shadowRoot : node;
  }
  appendChild(parent, newChild) {
    return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
  }
  insertBefore(parent, newChild, refChild) {
    return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
  }
  removeChild(_parent, oldChild) {
    return super.removeChild(null, oldChild);
  }
  parentNode(node) {
    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
  }
  destroy() {
    this.sharedStylesHost.removeHost(this.shadowRoot);
  }
};
var NoneEncapsulationDomRenderer = class extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, compId) {
    super(eventManager, doc, ngZone, platformIsServer);
    this.sharedStylesHost = sharedStylesHost;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    this.styles = compId ? shimStylesContent(compId, component.styles) : component.styles;
  }
  applyStyles() {
    this.sharedStylesHost.addStyles(this.styles);
  }
  destroy() {
    if (!this.removeStylesOnCompDestroy) {
      return;
    }
    this.sharedStylesHost.removeStyles(this.styles);
  }
};
var EmulatedEncapsulationDomRenderer2 = class extends NoneEncapsulationDomRenderer {
  constructor(eventManager, sharedStylesHost, component, appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer) {
    const compId = appId + "-" + component.id;
    super(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, compId);
    this.contentAttr = shimContentAttribute(compId);
    this.hostAttr = shimHostAttribute(compId);
  }
  applyToHost(element) {
    this.applyStyles();
    this.setAttribute(element, this.hostAttr, "");
  }
  createElement(parent, name) {
    const el = super.createElement(parent, name);
    super.setAttribute(el, this.contentAttr, "");
    return el;
  }
};
var DomEventsPlugin = class _DomEventsPlugin extends EventManagerPlugin {
  constructor(doc) {
    super(doc);
  }
  // This plugin should come last in the list of plugins, because it accepts all
  // events.
  supports(eventName) {
    return true;
  }
  addEventListener(element, eventName, handler) {
    element.addEventListener(eventName, handler, false);
    return () => this.removeEventListener(element, eventName, handler);
  }
  removeEventListener(target, eventName, callback) {
    return target.removeEventListener(eventName, callback);
  }
  static {
    this.\u0275fac = function DomEventsPlugin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DomEventsPlugin)(\u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DomEventsPlugin,
      factory: _DomEventsPlugin.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomEventsPlugin, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var MODIFIER_KEYS = ["alt", "control", "meta", "shift"];
var _keyMap = {
  "\b": "Backspace",
  "	": "Tab",
  "\x7F": "Delete",
  "\x1B": "Escape",
  "Del": "Delete",
  "Esc": "Escape",
  "Left": "ArrowLeft",
  "Right": "ArrowRight",
  "Up": "ArrowUp",
  "Down": "ArrowDown",
  "Menu": "ContextMenu",
  "Scroll": "ScrollLock",
  "Win": "OS"
};
var MODIFIER_KEY_GETTERS = {
  "alt": (event) => event.altKey,
  "control": (event) => event.ctrlKey,
  "meta": (event) => event.metaKey,
  "shift": (event) => event.shiftKey
};
var KeyEventsPlugin = class _KeyEventsPlugin extends EventManagerPlugin {
  /**
   * Initializes an instance of the browser plug-in.
   * @param doc The document in which key events will be detected.
   */
  constructor(doc) {
    super(doc);
  }
  /**
   * Reports whether a named key event is supported.
   * @param eventName The event name to query.
   * @return True if the named key event is supported.
   */
  supports(eventName) {
    return _KeyEventsPlugin.parseEventName(eventName) != null;
  }
  /**
   * Registers a handler for a specific element and key event.
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the key event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @returns The key event that was registered.
   */
  addEventListener(element, eventName, handler) {
    const parsedEvent = _KeyEventsPlugin.parseEventName(eventName);
    const outsideHandler = _KeyEventsPlugin.eventCallback(parsedEvent["fullKey"], handler, this.manager.getZone());
    return this.manager.getZone().runOutsideAngular(() => {
      return getDOM().onAndCancel(element, parsedEvent["domEventName"], outsideHandler);
    });
  }
  /**
   * Parses the user provided full keyboard event definition and normalizes it for
   * later internal use. It ensures the string is all lowercase, converts special
   * characters to a standard spelling, and orders all the values consistently.
   *
   * @param eventName The name of the key event to listen for.
   * @returns an object with the full, normalized string, and the dom event name
   * or null in the case when the event doesn't match a keyboard event.
   */
  static parseEventName(eventName) {
    const parts = eventName.toLowerCase().split(".");
    const domEventName = parts.shift();
    if (parts.length === 0 || !(domEventName === "keydown" || domEventName === "keyup")) {
      return null;
    }
    const key = _KeyEventsPlugin._normalizeKey(parts.pop());
    let fullKey = "";
    let codeIX = parts.indexOf("code");
    if (codeIX > -1) {
      parts.splice(codeIX, 1);
      fullKey = "code.";
    }
    MODIFIER_KEYS.forEach((modifierName) => {
      const index = parts.indexOf(modifierName);
      if (index > -1) {
        parts.splice(index, 1);
        fullKey += modifierName + ".";
      }
    });
    fullKey += key;
    if (parts.length != 0 || key.length === 0) {
      return null;
    }
    const result = {};
    result["domEventName"] = domEventName;
    result["fullKey"] = fullKey;
    return result;
  }
  /**
   * Determines whether the actual keys pressed match the configured key code string.
   * The `fullKeyCode` event is normalized in the `parseEventName` method when the
   * event is attached to the DOM during the `addEventListener` call. This is unseen
   * by the end user and is normalized for internal consistency and parsing.
   *
   * @param event The keyboard event.
   * @param fullKeyCode The normalized user defined expected key event string
   * @returns boolean.
   */
  static matchEventFullKeyCode(event, fullKeyCode) {
    let keycode = _keyMap[event.key] || event.key;
    let key = "";
    if (fullKeyCode.indexOf("code.") > -1) {
      keycode = event.code;
      key = "code.";
    }
    if (keycode == null || !keycode) return false;
    keycode = keycode.toLowerCase();
    if (keycode === " ") {
      keycode = "space";
    } else if (keycode === ".") {
      keycode = "dot";
    }
    MODIFIER_KEYS.forEach((modifierName) => {
      if (modifierName !== keycode) {
        const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
        if (modifierGetter(event)) {
          key += modifierName + ".";
        }
      }
    });
    key += keycode;
    return key === fullKeyCode;
  }
  /**
   * Configures a handler callback for a key event.
   * @param fullKey The event name that combines all simultaneous keystrokes.
   * @param handler The function that responds to the key event.
   * @param zone The zone in which the event occurred.
   * @returns A callback function.
   */
  static eventCallback(fullKey, handler, zone) {
    return (event) => {
      if (_KeyEventsPlugin.matchEventFullKeyCode(event, fullKey)) {
        zone.runGuarded(() => handler(event));
      }
    };
  }
  /** @internal */
  static _normalizeKey(keyName) {
    return keyName === "esc" ? "escape" : keyName;
  }
  static {
    this.\u0275fac = function KeyEventsPlugin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KeyEventsPlugin)(\u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _KeyEventsPlugin,
      factory: _KeyEventsPlugin.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyEventsPlugin, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
function bootstrapApplication(rootComponent, options, context) {
  return internalCreateApplication(__spreadValues({
    rootComponent,
    platformRef: context?.platformRef
  }, createProvidersConfig(options)));
}
function createProvidersConfig(options) {
  return {
    appProviders: [...BROWSER_MODULE_PROVIDERS, ...options?.providers ?? []],
    platformProviders: INTERNAL_BROWSER_PLATFORM_PROVIDERS
  };
}
function initDomAdapter() {
  BrowserDomAdapter.makeCurrent();
}
function errorHandler() {
  return new ErrorHandler();
}
function _document() {
  setDocument(document);
  return document;
}
var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [{
  provide: PLATFORM_ID,
  useValue: PLATFORM_BROWSER_ID
}, {
  provide: PLATFORM_INITIALIZER,
  useValue: initDomAdapter,
  multi: true
}, {
  provide: DOCUMENT,
  useFactory: _document,
  deps: []
}];
var platformBrowser = createPlatformFactory(platformCore, "browser", INTERNAL_BROWSER_PLATFORM_PROVIDERS);
var BROWSER_MODULE_PROVIDERS_MARKER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "BrowserModule Providers Marker" : "");
var TESTABILITY_PROVIDERS = [{
  provide: TESTABILITY_GETTER,
  useClass: BrowserGetTestability,
  deps: []
}, {
  provide: TESTABILITY,
  useClass: Testability,
  deps: [NgZone, TestabilityRegistry, TESTABILITY_GETTER]
}, {
  provide: Testability,
  // Also provide as `Testability` for backwards-compatibility.
  useClass: Testability,
  deps: [NgZone, TestabilityRegistry, TESTABILITY_GETTER]
}];
var BROWSER_MODULE_PROVIDERS = [{
  provide: INJECTOR_SCOPE,
  useValue: "root"
}, {
  provide: ErrorHandler,
  useFactory: errorHandler,
  deps: []
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: DomEventsPlugin,
  multi: true,
  deps: [DOCUMENT, NgZone, PLATFORM_ID]
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: KeyEventsPlugin,
  multi: true,
  deps: [DOCUMENT]
}, DomRendererFactory2, SharedStylesHost, EventManager, {
  provide: RendererFactory2,
  useExisting: DomRendererFactory2
}, {
  provide: XhrFactory,
  useClass: BrowserXhr,
  deps: []
}, typeof ngDevMode === "undefined" || ngDevMode ? {
  provide: BROWSER_MODULE_PROVIDERS_MARKER,
  useValue: true
} : []];
var BrowserModule = class _BrowserModule {
  constructor(providersAlreadyPresent) {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && providersAlreadyPresent) {
      throw new RuntimeError(5100, `Providers from the \`BrowserModule\` have already been loaded. If you need access to common directives such as NgIf and NgFor, import the \`CommonModule\` instead.`);
    }
  }
  /**
   * Configures a browser-based app to transition from a server-rendered app, if
   * one is present on the page.
   *
   * @param params An object containing an identifier for the app to transition.
   * The ID must match between the client and server versions of the app.
   * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
   *
   * @deprecated Use {@link APP_ID} instead to set the application ID.
   */
  static withServerTransition(params) {
    return {
      ngModule: _BrowserModule,
      providers: [{
        provide: APP_ID,
        useValue: params.appId
      }]
    };
  }
  static {
    this.\u0275fac = function BrowserModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrowserModule)(\u0275\u0275inject(BROWSER_MODULE_PROVIDERS_MARKER, 12));
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _BrowserModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
      imports: [CommonModule, ApplicationModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserModule, [{
    type: NgModule,
    args: [{
      providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
      exports: [CommonModule, ApplicationModule]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }, {
      type: Inject,
      args: [BROWSER_MODULE_PROVIDERS_MARKER]
    }]
  }], null);
})();
var Meta = class _Meta {
  constructor(_doc) {
    this._doc = _doc;
    this._dom = getDOM();
  }
  /**
   * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * If an existing element is found, it is returned and is not modified in any way.
   * @param tag The definition of a `<meta>` element to match or create.
   * @param forceCreation True to create a new element without checking whether one already exists.
   * @returns The existing element with the same attributes and values if found,
   * the new element if no match is found, or `null` if the tag parameter is not defined.
   */
  addTag(tag, forceCreation = false) {
    if (!tag) return null;
    return this._getOrCreateElement(tag, forceCreation);
  }
  /**
   * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * @param tags An array of tag definitions to match or create.
   * @param forceCreation True to create new elements without checking whether they already exist.
   * @returns The matching elements if found, or the new elements.
   */
  addTags(tags, forceCreation = false) {
    if (!tags) return [];
    return tags.reduce((result, tag) => {
      if (tag) {
        result.push(this._getOrCreateElement(tag, forceCreation));
      }
      return result;
    }, []);
  }
  /**
   * Retrieves a `<meta>` tag element in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching element, if any.
   */
  getTag(attrSelector) {
    if (!attrSelector) return null;
    return this._doc.querySelector(`meta[${attrSelector}]`) || null;
  }
  /**
   * Retrieves a set of `<meta>` tag elements in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching elements, if any.
   */
  getTags(attrSelector) {
    if (!attrSelector) return [];
    const list = this._doc.querySelectorAll(`meta[${attrSelector}]`);
    return list ? [].slice.call(list) : [];
  }
  /**
   * Modifies an existing `<meta>` tag element in the current HTML document.
   * @param tag The tag description with which to replace the existing tag content.
   * @param selector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   * If not supplied, matches a tag with the same `name` or `property` attribute value as the
   * replacement tag.
   * @return The modified element.
   */
  updateTag(tag, selector) {
    if (!tag) return null;
    selector = selector || this._parseSelector(tag);
    const meta = this.getTag(selector);
    if (meta) {
      return this._setMetaElementAttributes(tag, meta);
    }
    return this._getOrCreateElement(tag, true);
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param attrSelector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   */
  removeTag(attrSelector) {
    this.removeTagElement(this.getTag(attrSelector));
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param meta The tag definition to match against to identify an existing tag.
   */
  removeTagElement(meta) {
    if (meta) {
      this._dom.remove(meta);
    }
  }
  _getOrCreateElement(meta, forceCreation = false) {
    if (!forceCreation) {
      const selector = this._parseSelector(meta);
      const elem = this.getTags(selector).filter((elem2) => this._containsAttributes(meta, elem2))[0];
      if (elem !== void 0) return elem;
    }
    const element = this._dom.createElement("meta");
    this._setMetaElementAttributes(meta, element);
    const head = this._doc.getElementsByTagName("head")[0];
    head.appendChild(element);
    return element;
  }
  _setMetaElementAttributes(tag, el) {
    Object.keys(tag).forEach((prop) => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
    return el;
  }
  _parseSelector(tag) {
    const attr = tag.name ? "name" : "property";
    return `${attr}="${tag[attr]}"`;
  }
  _containsAttributes(tag, elem) {
    return Object.keys(tag).every((key) => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
  }
  _getMetaKeyMap(prop) {
    return META_KEYS_MAP[prop] || prop;
  }
  static {
    this.\u0275fac = function Meta_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Meta)(\u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Meta,
      factory: _Meta.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Meta, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var META_KEYS_MAP = {
  httpEquiv: "http-equiv"
};
var Title = class _Title {
  constructor(_doc) {
    this._doc = _doc;
  }
  /**
   * Get the title of the current HTML document.
   */
  getTitle() {
    return this._doc.title;
  }
  /**
   * Set the title of the current HTML document.
   * @param newTitle
   */
  setTitle(newTitle) {
    this._doc.title = newTitle || "";
  }
  static {
    this.\u0275fac = function Title_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Title)(\u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Title,
      factory: _Title.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Title, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var EVENT_NAMES = {
  // pan
  "pan": true,
  "panstart": true,
  "panmove": true,
  "panend": true,
  "pancancel": true,
  "panleft": true,
  "panright": true,
  "panup": true,
  "pandown": true,
  // pinch
  "pinch": true,
  "pinchstart": true,
  "pinchmove": true,
  "pinchend": true,
  "pinchcancel": true,
  "pinchin": true,
  "pinchout": true,
  // press
  "press": true,
  "pressup": true,
  // rotate
  "rotate": true,
  "rotatestart": true,
  "rotatemove": true,
  "rotateend": true,
  "rotatecancel": true,
  // swipe
  "swipe": true,
  "swipeleft": true,
  "swiperight": true,
  "swipeup": true,
  "swipedown": true,
  // tap
  "tap": true,
  "doubletap": true
};
var HAMMER_GESTURE_CONFIG = new InjectionToken("HammerGestureConfig");
var HAMMER_LOADER = new InjectionToken("HammerLoader");
var HammerGestureConfig = class _HammerGestureConfig {
  constructor() {
    this.events = [];
    this.overrides = {};
  }
  /**
   * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
   * and attaches it to a given HTML element.
   * @param element The element that will recognize gestures.
   * @returns A HammerJS event-manager object.
   */
  buildHammer(element) {
    const mc = new Hammer(element, this.options);
    mc.get("pinch").set({
      enable: true
    });
    mc.get("rotate").set({
      enable: true
    });
    for (const eventName in this.overrides) {
      mc.get(eventName).set(this.overrides[eventName]);
    }
    return mc;
  }
  static {
    this.\u0275fac = function HammerGestureConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HammerGestureConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _HammerGestureConfig,
      factory: _HammerGestureConfig.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerGestureConfig, [{
    type: Injectable
  }], null, null);
})();
var HammerGesturesPlugin = class _HammerGesturesPlugin extends EventManagerPlugin {
  constructor(doc, _config, console2, loader) {
    super(doc);
    this._config = _config;
    this.console = console2;
    this.loader = loader;
    this._loaderPromise = null;
  }
  supports(eventName) {
    if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
      return false;
    }
    if (!window.Hammer && !this.loader) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        this.console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`);
      }
      return false;
    }
    return true;
  }
  addEventListener(element, eventName, handler) {
    const zone = this.manager.getZone();
    eventName = eventName.toLowerCase();
    if (!window.Hammer && this.loader) {
      this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
      let cancelRegistration = false;
      let deregister = () => {
        cancelRegistration = true;
      };
      zone.runOutsideAngular(() => this._loaderPromise.then(() => {
        if (!window.Hammer) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            this.console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
          }
          deregister = () => {
          };
          return;
        }
        if (!cancelRegistration) {
          deregister = this.addEventListener(element, eventName, handler);
        }
      }).catch(() => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          this.console.warn(`The "${eventName}" event cannot be bound because the custom Hammer.JS loader failed.`);
        }
        deregister = () => {
        };
      }));
      return () => {
        deregister();
      };
    }
    return zone.runOutsideAngular(() => {
      const mc = this._config.buildHammer(element);
      const callback = function(eventObj) {
        zone.runGuarded(function() {
          handler(eventObj);
        });
      };
      mc.on(eventName, callback);
      return () => {
        mc.off(eventName, callback);
        if (typeof mc.destroy === "function") {
          mc.destroy();
        }
      };
    });
  }
  isCustomEvent(eventName) {
    return this._config.events.indexOf(eventName) > -1;
  }
  static {
    this.\u0275fac = function HammerGesturesPlugin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HammerGesturesPlugin)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(HAMMER_GESTURE_CONFIG), \u0275\u0275inject(Console), \u0275\u0275inject(HAMMER_LOADER, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _HammerGesturesPlugin,
      factory: _HammerGesturesPlugin.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerGesturesPlugin, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: HammerGestureConfig,
    decorators: [{
      type: Inject,
      args: [HAMMER_GESTURE_CONFIG]
    }]
  }, {
    type: Console
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [HAMMER_LOADER]
    }]
  }], null);
})();
var HammerModule = class _HammerModule {
  static {
    this.\u0275fac = function HammerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HammerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _HammerModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [{
        provide: EVENT_MANAGER_PLUGINS,
        useClass: HammerGesturesPlugin,
        multi: true,
        deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Console, [new Optional(), HAMMER_LOADER]]
      }, {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: HammerGestureConfig,
        deps: []
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: EVENT_MANAGER_PLUGINS,
        useClass: HammerGesturesPlugin,
        multi: true,
        deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Console, [new Optional(), HAMMER_LOADER]]
      }, {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: HammerGestureConfig,
        deps: []
      }]
    }]
  }], null, null);
})();
var DomSanitizer = class _DomSanitizer {
  static {
    this.\u0275fac = function DomSanitizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DomSanitizer)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DomSanitizer,
      factory: function DomSanitizer_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _DomSanitizer)();
        } else {
          __ngConditionalFactory__ = \u0275\u0275inject(DomSanitizerImpl);
        }
        return __ngConditionalFactory__;
      },
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomSanitizer, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: forwardRef(() => DomSanitizerImpl)
    }]
  }], null, null);
})();
var DomSanitizerImpl = class _DomSanitizerImpl extends DomSanitizer {
  constructor(_doc) {
    super();
    this._doc = _doc;
  }
  sanitize(ctx, value) {
    if (value == null) return null;
    switch (ctx) {
      case SecurityContext.NONE:
        return value;
      case SecurityContext.HTML:
        if (allowSanitizationBypassAndThrow(
          value,
          "HTML"
          /* BypassType.Html */
        )) {
          return unwrapSafeValue(value);
        }
        return _sanitizeHtml(this._doc, String(value)).toString();
      case SecurityContext.STYLE:
        if (allowSanitizationBypassAndThrow(
          value,
          "Style"
          /* BypassType.Style */
        )) {
          return unwrapSafeValue(value);
        }
        return value;
      case SecurityContext.SCRIPT:
        if (allowSanitizationBypassAndThrow(
          value,
          "Script"
          /* BypassType.Script */
        )) {
          return unwrapSafeValue(value);
        }
        throw new RuntimeError(5200, (typeof ngDevMode === "undefined" || ngDevMode) && "unsafe value used in a script context");
      case SecurityContext.URL:
        if (allowSanitizationBypassAndThrow(
          value,
          "URL"
          /* BypassType.Url */
        )) {
          return unwrapSafeValue(value);
        }
        return _sanitizeUrl(String(value));
      case SecurityContext.RESOURCE_URL:
        if (allowSanitizationBypassAndThrow(
          value,
          "ResourceURL"
          /* BypassType.ResourceUrl */
        )) {
          return unwrapSafeValue(value);
        }
        throw new RuntimeError(5201, (typeof ngDevMode === "undefined" || ngDevMode) && `unsafe value used in a resource URL context (see ${XSS_SECURITY_URL})`);
      default:
        throw new RuntimeError(5202, (typeof ngDevMode === "undefined" || ngDevMode) && `Unexpected SecurityContext ${ctx} (see ${XSS_SECURITY_URL})`);
    }
  }
  bypassSecurityTrustHtml(value) {
    return bypassSanitizationTrustHtml(value);
  }
  bypassSecurityTrustStyle(value) {
    return bypassSanitizationTrustStyle(value);
  }
  bypassSecurityTrustScript(value) {
    return bypassSanitizationTrustScript(value);
  }
  bypassSecurityTrustUrl(value) {
    return bypassSanitizationTrustUrl(value);
  }
  bypassSecurityTrustResourceUrl(value) {
    return bypassSanitizationTrustResourceUrl(value);
  }
  static {
    this.\u0275fac = function DomSanitizerImpl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DomSanitizerImpl)(\u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DomSanitizerImpl,
      factory: _DomSanitizerImpl.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomSanitizerImpl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var HydrationFeatureKind;
(function(HydrationFeatureKind2) {
  HydrationFeatureKind2[HydrationFeatureKind2["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
  HydrationFeatureKind2[HydrationFeatureKind2["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
  HydrationFeatureKind2[HydrationFeatureKind2["I18nSupport"] = 2] = "I18nSupport";
  HydrationFeatureKind2[HydrationFeatureKind2["EventReplay"] = 3] = "EventReplay";
})(HydrationFeatureKind || (HydrationFeatureKind = {}));
var VERSION = new Version("18.2.14");

// node_modules/@angular/router/fesm2022/router.mjs
var PRIMARY_OUTLET = "primary";
var RouteTitleKey = /* @__PURE__ */ Symbol("RouteTitle");
var ParamsAsMap = class {
  constructor(params) {
    this.params = params || {};
  }
  has(name) {
    return Object.prototype.hasOwnProperty.call(this.params, name);
  }
  get(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v[0] : v;
    }
    return null;
  }
  getAll(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v : [v];
    }
    return [];
  }
  get keys() {
    return Object.keys(this.params);
  }
};
function convertToParamMap(params) {
  return new ParamsAsMap(params);
}
function defaultUrlMatcher(segments, segmentGroup, route) {
  const parts = route.path.split("/");
  if (parts.length > segments.length) {
    return null;
  }
  if (route.pathMatch === "full" && (segmentGroup.hasChildren() || parts.length < segments.length)) {
    return null;
  }
  const posParams = {};
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    const segment = segments[index];
    const isParameter = part[0] === ":";
    if (isParameter) {
      posParams[part.substring(1)] = segment;
    } else if (part !== segment.path) {
      return null;
    }
  }
  return {
    consumed: segments.slice(0, parts.length),
    posParams
  };
}
function shallowEqualArrays(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    if (!shallowEqual(a[i], b[i])) return false;
  }
  return true;
}
function shallowEqual(a, b) {
  const k1 = a ? getDataKeys(a) : void 0;
  const k2 = b ? getDataKeys(b) : void 0;
  if (!k1 || !k2 || k1.length != k2.length) {
    return false;
  }
  let key;
  for (let i = 0; i < k1.length; i++) {
    key = k1[i];
    if (!equalArraysOrString(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
function getDataKeys(obj) {
  return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];
}
function equalArraysOrString(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    const aSorted = [...a].sort();
    const bSorted = [...b].sort();
    return aSorted.every((val, index) => bSorted[index] === val);
  } else {
    return a === b;
  }
}
function last2(a) {
  return a.length > 0 ? a[a.length - 1] : null;
}
function wrapIntoObservable(value) {
  if (isObservable(value)) {
    return value;
  }
  if (isPromise(value)) {
    return from(Promise.resolve(value));
  }
  return of(value);
}
var pathCompareMap = {
  "exact": equalSegmentGroups,
  "subset": containsSegmentGroup
};
var paramCompareMap = {
  "exact": equalParams,
  "subset": containsParams,
  "ignored": () => true
};
function containsTree(container, containee, options) {
  return pathCompareMap[options.paths](container.root, containee.root, options.matrixParams) && paramCompareMap[options.queryParams](container.queryParams, containee.queryParams) && !(options.fragment === "exact" && container.fragment !== containee.fragment);
}
function equalParams(container, containee) {
  return shallowEqual(container, containee);
}
function equalSegmentGroups(container, containee, matrixParams) {
  if (!equalPath(container.segments, containee.segments)) return false;
  if (!matrixParamsMatch(container.segments, containee.segments, matrixParams)) {
    return false;
  }
  if (container.numberOfChildren !== containee.numberOfChildren) return false;
  for (const c in containee.children) {
    if (!container.children[c]) return false;
    if (!equalSegmentGroups(container.children[c], containee.children[c], matrixParams)) return false;
  }
  return true;
}
function containsParams(container, containee) {
  return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every((key) => equalArraysOrString(container[key], containee[key]));
}
function containsSegmentGroup(container, containee, matrixParams) {
  return containsSegmentGroupHelper(container, containee, containee.segments, matrixParams);
}
function containsSegmentGroupHelper(container, containee, containeePaths, matrixParams) {
  if (container.segments.length > containeePaths.length) {
    const current = container.segments.slice(0, containeePaths.length);
    if (!equalPath(current, containeePaths)) return false;
    if (containee.hasChildren()) return false;
    if (!matrixParamsMatch(current, containeePaths, matrixParams)) return false;
    return true;
  } else if (container.segments.length === containeePaths.length) {
    if (!equalPath(container.segments, containeePaths)) return false;
    if (!matrixParamsMatch(container.segments, containeePaths, matrixParams)) return false;
    for (const c in containee.children) {
      if (!container.children[c]) return false;
      if (!containsSegmentGroup(container.children[c], containee.children[c], matrixParams)) {
        return false;
      }
    }
    return true;
  } else {
    const current = containeePaths.slice(0, container.segments.length);
    const next = containeePaths.slice(container.segments.length);
    if (!equalPath(container.segments, current)) return false;
    if (!matrixParamsMatch(container.segments, current, matrixParams)) return false;
    if (!container.children[PRIMARY_OUTLET]) return false;
    return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next, matrixParams);
  }
}
function matrixParamsMatch(containerPaths, containeePaths, options) {
  return containeePaths.every((containeeSegment, i) => {
    return paramCompareMap[options](containerPaths[i].parameters, containeeSegment.parameters);
  });
}
var UrlTree = class {
  constructor(root = new UrlSegmentGroup([], {}), queryParams = {}, fragment = null) {
    this.root = root;
    this.queryParams = queryParams;
    this.fragment = fragment;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (root.segments.length > 0) {
        throw new RuntimeError(4015, "The root `UrlSegmentGroup` should not contain `segments`. Instead, these segments belong in the `children` so they can be associated with a named outlet.");
      }
    }
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  /** @docsNotRequired */
  toString() {
    return DEFAULT_SERIALIZER.serialize(this);
  }
};
var UrlSegmentGroup = class {
  constructor(segments, children) {
    this.segments = segments;
    this.children = children;
    this.parent = null;
    Object.values(children).forEach((v) => v.parent = this);
  }
  /** Whether the segment has child segments */
  hasChildren() {
    return this.numberOfChildren > 0;
  }
  /** Number of child segments */
  get numberOfChildren() {
    return Object.keys(this.children).length;
  }
  /** @docsNotRequired */
  toString() {
    return serializePaths(this);
  }
};
var UrlSegment = class {
  constructor(path, parameters) {
    this.path = path;
    this.parameters = parameters;
  }
  get parameterMap() {
    this._parameterMap ??= convertToParamMap(this.parameters);
    return this._parameterMap;
  }
  /** @docsNotRequired */
  toString() {
    return serializePath(this);
  }
};
function equalSegments(as, bs) {
  return equalPath(as, bs) && as.every((a, i) => shallowEqual(a.parameters, bs[i].parameters));
}
function equalPath(as, bs) {
  if (as.length !== bs.length) return false;
  return as.every((a, i) => a.path === bs[i].path);
}
function mapChildrenIntoArray(segment, fn) {
  let res = [];
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet === PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet !== PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  return res;
}
var UrlSerializer = class _UrlSerializer {
  static {
    this.\u0275fac = function UrlSerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UrlSerializer)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _UrlSerializer,
      factory: () => (() => new DefaultUrlSerializer())(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new DefaultUrlSerializer()
    }]
  }], null, null);
})();
var DefaultUrlSerializer = class {
  /** Parses a url into a `UrlTree` */
  parse(url) {
    const p = new UrlParser(url);
    return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
  }
  /** Converts a `UrlTree` into a url */
  serialize(tree2) {
    const segment = `/${serializeSegment(tree2.root, true)}`;
    const query = serializeQueryParams(tree2.queryParams);
    const fragment = typeof tree2.fragment === `string` ? `#${encodeUriFragment(tree2.fragment)}` : "";
    return `${segment}${query}${fragment}`;
  }
};
var DEFAULT_SERIALIZER = new DefaultUrlSerializer();
function serializePaths(segment) {
  return segment.segments.map((p) => serializePath(p)).join("/");
}
function serializeSegment(segment, root) {
  if (!segment.hasChildren()) {
    return serializePaths(segment);
  }
  if (root) {
    const primary = segment.children[PRIMARY_OUTLET] ? serializeSegment(segment.children[PRIMARY_OUTLET], false) : "";
    const children = [];
    Object.entries(segment.children).forEach(([k, v]) => {
      if (k !== PRIMARY_OUTLET) {
        children.push(`${k}:${serializeSegment(v, false)}`);
      }
    });
    return children.length > 0 ? `${primary}(${children.join("//")})` : primary;
  } else {
    const children = mapChildrenIntoArray(segment, (v, k) => {
      if (k === PRIMARY_OUTLET) {
        return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
      }
      return [`${k}:${serializeSegment(v, false)}`];
    });
    if (Object.keys(segment.children).length === 1 && segment.children[PRIMARY_OUTLET] != null) {
      return `${serializePaths(segment)}/${children[0]}`;
    }
    return `${serializePaths(segment)}/(${children.join("//")})`;
  }
}
function encodeUriString(s) {
  return encodeURIComponent(s).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",");
}
function encodeUriQuery(s) {
  return encodeUriString(s).replace(/%3B/gi, ";");
}
function encodeUriFragment(s) {
  return encodeURI(s);
}
function encodeUriSegment(s) {
  return encodeUriString(s).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&");
}
function decode(s) {
  return decodeURIComponent(s);
}
function decodeQuery(s) {
  return decode(s.replace(/\+/g, "%20"));
}
function serializePath(path) {
  return `${encodeUriSegment(path.path)}${serializeMatrixParams(path.parameters)}`;
}
function serializeMatrixParams(params) {
  return Object.entries(params).map(([key, value]) => `;${encodeUriSegment(key)}=${encodeUriSegment(value)}`).join("");
}
function serializeQueryParams(params) {
  const strParams = Object.entries(params).map(([name, value]) => {
    return Array.isArray(value) ? value.map((v) => `${encodeUriQuery(name)}=${encodeUriQuery(v)}`).join("&") : `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
  }).filter((s) => s);
  return strParams.length ? `?${strParams.join("&")}` : "";
}
var SEGMENT_RE = /^[^\/()?;#]+/;
function matchSegments(str) {
  const match2 = str.match(SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var MATRIX_PARAM_SEGMENT_RE = /^[^\/()?;=#]+/;
function matchMatrixKeySegments(str) {
  const match2 = str.match(MATRIX_PARAM_SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_RE = /^[^=?&#]+/;
function matchQueryParams(str) {
  const match2 = str.match(QUERY_PARAM_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_VALUE_RE = /^[^&#]+/;
function matchUrlQueryParamValue(str) {
  const match2 = str.match(QUERY_PARAM_VALUE_RE);
  return match2 ? match2[0] : "";
}
var UrlParser = class {
  constructor(url) {
    this.url = url;
    this.remaining = url;
  }
  parseRootSegment() {
    this.consumeOptional("/");
    if (this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#")) {
      return new UrlSegmentGroup([], {});
    }
    return new UrlSegmentGroup([], this.parseChildren());
  }
  parseQueryParams() {
    const params = {};
    if (this.consumeOptional("?")) {
      do {
        this.parseQueryParam(params);
      } while (this.consumeOptional("&"));
    }
    return params;
  }
  parseFragment() {
    return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null;
  }
  parseChildren() {
    if (this.remaining === "") {
      return {};
    }
    this.consumeOptional("/");
    const segments = [];
    if (!this.peekStartsWith("(")) {
      segments.push(this.parseSegment());
    }
    while (this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(")) {
      this.capture("/");
      segments.push(this.parseSegment());
    }
    let children = {};
    if (this.peekStartsWith("/(")) {
      this.capture("/");
      children = this.parseParens(true);
    }
    let res = {};
    if (this.peekStartsWith("(")) {
      res = this.parseParens(false);
    }
    if (segments.length > 0 || Object.keys(children).length > 0) {
      res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
    }
    return res;
  }
  // parse a segment with its matrix parameters
  // ie `name;k1=v1;k2`
  parseSegment() {
    const path = matchSegments(this.remaining);
    if (path === "" && this.peekStartsWith(";")) {
      throw new RuntimeError(4009, (typeof ngDevMode === "undefined" || ngDevMode) && `Empty path url segment cannot have parameters: '${this.remaining}'.`);
    }
    this.capture(path);
    return new UrlSegment(decode(path), this.parseMatrixParams());
  }
  parseMatrixParams() {
    const params = {};
    while (this.consumeOptional(";")) {
      this.parseParam(params);
    }
    return params;
  }
  parseParam(params) {
    const key = matchMatrixKeySegments(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchSegments(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    params[decode(key)] = decode(value);
  }
  // Parse a single query parameter `name[=value]`
  parseQueryParam(params) {
    const key = matchQueryParams(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchUrlQueryParamValue(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    const decodedKey = decodeQuery(key);
    const decodedVal = decodeQuery(value);
    if (params.hasOwnProperty(decodedKey)) {
      let currentVal = params[decodedKey];
      if (!Array.isArray(currentVal)) {
        currentVal = [currentVal];
        params[decodedKey] = currentVal;
      }
      currentVal.push(decodedVal);
    } else {
      params[decodedKey] = decodedVal;
    }
  }
  // parse `(a/b//outlet_name:c/d)`
  parseParens(allowPrimary) {
    const segments = {};
    this.capture("(");
    while (!this.consumeOptional(")") && this.remaining.length > 0) {
      const path = matchSegments(this.remaining);
      const next = this.remaining[path.length];
      if (next !== "/" && next !== ")" && next !== ";") {
        throw new RuntimeError(4010, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot parse url '${this.url}'`);
      }
      let outletName = void 0;
      if (path.indexOf(":") > -1) {
        outletName = path.slice(0, path.indexOf(":"));
        this.capture(outletName);
        this.capture(":");
      } else if (allowPrimary) {
        outletName = PRIMARY_OUTLET;
      }
      const children = this.parseChildren();
      segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] : new UrlSegmentGroup([], children);
      this.consumeOptional("//");
    }
    return segments;
  }
  peekStartsWith(str) {
    return this.remaining.startsWith(str);
  }
  // Consumes the prefix when it is present and returns whether it has been consumed
  consumeOptional(str) {
    if (this.peekStartsWith(str)) {
      this.remaining = this.remaining.substring(str.length);
      return true;
    }
    return false;
  }
  capture(str) {
    if (!this.consumeOptional(str)) {
      throw new RuntimeError(4011, (typeof ngDevMode === "undefined" || ngDevMode) && `Expected "${str}".`);
    }
  }
};
function createRoot(rootCandidate) {
  return rootCandidate.segments.length > 0 ? new UrlSegmentGroup([], {
    [PRIMARY_OUTLET]: rootCandidate
  }) : rootCandidate;
}
function squashSegmentGroup(segmentGroup) {
  const newChildren = {};
  for (const [childOutlet, child] of Object.entries(segmentGroup.children)) {
    const childCandidate = squashSegmentGroup(child);
    if (childOutlet === PRIMARY_OUTLET && childCandidate.segments.length === 0 && childCandidate.hasChildren()) {
      for (const [grandChildOutlet, grandChild] of Object.entries(childCandidate.children)) {
        newChildren[grandChildOutlet] = grandChild;
      }
    } else if (childCandidate.segments.length > 0 || childCandidate.hasChildren()) {
      newChildren[childOutlet] = childCandidate;
    }
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, newChildren);
  return mergeTrivialChildren(s);
}
function mergeTrivialChildren(s) {
  if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
    const c = s.children[PRIMARY_OUTLET];
    return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
  }
  return s;
}
function isUrlTree(v) {
  return v instanceof UrlTree;
}
function createUrlTreeFromSnapshot(relativeTo, commands, queryParams = null, fragment = null) {
  const relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeTo);
  return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, queryParams, fragment);
}
function createSegmentGroupFromRoute(route) {
  let targetGroup;
  function createSegmentGroupFromRouteRecursive(currentRoute) {
    const childOutlets = {};
    for (const childSnapshot of currentRoute.children) {
      const root = createSegmentGroupFromRouteRecursive(childSnapshot);
      childOutlets[childSnapshot.outlet] = root;
    }
    const segmentGroup = new UrlSegmentGroup(currentRoute.url, childOutlets);
    if (currentRoute === route) {
      targetGroup = segmentGroup;
    }
    return segmentGroup;
  }
  const rootCandidate = createSegmentGroupFromRouteRecursive(route.root);
  const rootSegmentGroup = createRoot(rootCandidate);
  return targetGroup ?? rootSegmentGroup;
}
function createUrlTreeFromSegmentGroup(relativeTo, commands, queryParams, fragment) {
  let root = relativeTo;
  while (root.parent) {
    root = root.parent;
  }
  if (commands.length === 0) {
    return tree(root, root, root, queryParams, fragment);
  }
  const nav = computeNavigation(commands);
  if (nav.toRoot()) {
    return tree(root, root, new UrlSegmentGroup([], {}), queryParams, fragment);
  }
  const position = findStartingPositionForTargetGroup(nav, root, relativeTo);
  const newSegmentGroup = position.processChildren ? updateSegmentGroupChildren(position.segmentGroup, position.index, nav.commands) : updateSegmentGroup(position.segmentGroup, position.index, nav.commands);
  return tree(root, position.segmentGroup, newSegmentGroup, queryParams, fragment);
}
function isMatrixParams(command) {
  return typeof command === "object" && command != null && !command.outlets && !command.segmentPath;
}
function isCommandWithOutlets(command) {
  return typeof command === "object" && command != null && command.outlets;
}
function tree(oldRoot, oldSegmentGroup, newSegmentGroup, queryParams, fragment) {
  let qp = {};
  if (queryParams) {
    Object.entries(queryParams).forEach(([name, value]) => {
      qp[name] = Array.isArray(value) ? value.map((v) => `${v}`) : `${value}`;
    });
  }
  let rootCandidate;
  if (oldRoot === oldSegmentGroup) {
    rootCandidate = newSegmentGroup;
  } else {
    rootCandidate = replaceSegment(oldRoot, oldSegmentGroup, newSegmentGroup);
  }
  const newRoot = createRoot(squashSegmentGroup(rootCandidate));
  return new UrlTree(newRoot, qp, fragment);
}
function replaceSegment(current, oldSegment, newSegment) {
  const children = {};
  Object.entries(current.children).forEach(([outletName, c]) => {
    if (c === oldSegment) {
      children[outletName] = newSegment;
    } else {
      children[outletName] = replaceSegment(c, oldSegment, newSegment);
    }
  });
  return new UrlSegmentGroup(current.segments, children);
}
var Navigation = class {
  constructor(isAbsolute, numberOfDoubleDots, commands) {
    this.isAbsolute = isAbsolute;
    this.numberOfDoubleDots = numberOfDoubleDots;
    this.commands = commands;
    if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
      throw new RuntimeError(4003, (typeof ngDevMode === "undefined" || ngDevMode) && "Root segment cannot have matrix parameters");
    }
    const cmdWithOutlet = commands.find(isCommandWithOutlets);
    if (cmdWithOutlet && cmdWithOutlet !== last2(commands)) {
      throw new RuntimeError(4004, (typeof ngDevMode === "undefined" || ngDevMode) && "{outlets:{}} has to be the last command");
    }
  }
  toRoot() {
    return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/";
  }
};
function computeNavigation(commands) {
  if (typeof commands[0] === "string" && commands.length === 1 && commands[0] === "/") {
    return new Navigation(true, 0, commands);
  }
  let numberOfDoubleDots = 0;
  let isAbsolute = false;
  const res = commands.reduce((res2, cmd, cmdIdx) => {
    if (typeof cmd === "object" && cmd != null) {
      if (cmd.outlets) {
        const outlets = {};
        Object.entries(cmd.outlets).forEach(([name, commands2]) => {
          outlets[name] = typeof commands2 === "string" ? commands2.split("/") : commands2;
        });
        return [...res2, {
          outlets
        }];
      }
      if (cmd.segmentPath) {
        return [...res2, cmd.segmentPath];
      }
    }
    if (!(typeof cmd === "string")) {
      return [...res2, cmd];
    }
    if (cmdIdx === 0) {
      cmd.split("/").forEach((urlPart, partIndex) => {
        if (partIndex == 0 && urlPart === ".") {
        } else if (partIndex == 0 && urlPart === "") {
          isAbsolute = true;
        } else if (urlPart === "..") {
          numberOfDoubleDots++;
        } else if (urlPart != "") {
          res2.push(urlPart);
        }
      });
      return res2;
    }
    return [...res2, cmd];
  }, []);
  return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
var Position = class {
  constructor(segmentGroup, processChildren, index) {
    this.segmentGroup = segmentGroup;
    this.processChildren = processChildren;
    this.index = index;
  }
};
function findStartingPositionForTargetGroup(nav, root, target) {
  if (nav.isAbsolute) {
    return new Position(root, true, 0);
  }
  if (!target) {
    return new Position(root, false, NaN);
  }
  if (target.parent === null) {
    return new Position(target, true, 0);
  }
  const modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
  const index = target.segments.length - 1 + modifier;
  return createPositionApplyingDoubleDots(target, index, nav.numberOfDoubleDots);
}
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
  let g = group;
  let ci = index;
  let dd = numberOfDoubleDots;
  while (dd > ci) {
    dd -= ci;
    g = g.parent;
    if (!g) {
      throw new RuntimeError(4005, (typeof ngDevMode === "undefined" || ngDevMode) && "Invalid number of '../'");
    }
    ci = g.segments.length;
  }
  return new Position(g, false, ci - dd);
}
function getOutlets(commands) {
  if (isCommandWithOutlets(commands[0])) {
    return commands[0].outlets;
  }
  return {
    [PRIMARY_OUTLET]: commands
  };
}
function updateSegmentGroup(segmentGroup, startIndex, commands) {
  segmentGroup ??= new UrlSegmentGroup([], {});
  if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
    return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
  }
  const m = prefixedWith(segmentGroup, startIndex, commands);
  const slicedCommands = commands.slice(m.commandIndex);
  if (m.match && m.pathIndex < segmentGroup.segments.length) {
    const g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
    g.children[PRIMARY_OUTLET] = new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
    return updateSegmentGroupChildren(g, 0, slicedCommands);
  } else if (m.match && slicedCommands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else if (m.match && !segmentGroup.hasChildren()) {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  } else if (m.match) {
    return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
  } else {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  }
}
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
  if (commands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else {
    const outlets = getOutlets(commands);
    const children = {};
    if (Object.keys(outlets).some((o) => o !== PRIMARY_OUTLET) && segmentGroup.children[PRIMARY_OUTLET] && segmentGroup.numberOfChildren === 1 && segmentGroup.children[PRIMARY_OUTLET].segments.length === 0) {
      const childrenOfEmptyChild = updateSegmentGroupChildren(segmentGroup.children[PRIMARY_OUTLET], startIndex, commands);
      return new UrlSegmentGroup(segmentGroup.segments, childrenOfEmptyChild.children);
    }
    Object.entries(outlets).forEach(([outlet, commands2]) => {
      if (typeof commands2 === "string") {
        commands2 = [commands2];
      }
      if (commands2 !== null) {
        children[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands2);
      }
    });
    Object.entries(segmentGroup.children).forEach(([childOutlet, child]) => {
      if (outlets[childOutlet] === void 0) {
        children[childOutlet] = child;
      }
    });
    return new UrlSegmentGroup(segmentGroup.segments, children);
  }
}
function prefixedWith(segmentGroup, startIndex, commands) {
  let currentCommandIndex = 0;
  let currentPathIndex = startIndex;
  const noMatch2 = {
    match: false,
    pathIndex: 0,
    commandIndex: 0
  };
  while (currentPathIndex < segmentGroup.segments.length) {
    if (currentCommandIndex >= commands.length) return noMatch2;
    const path = segmentGroup.segments[currentPathIndex];
    const command = commands[currentCommandIndex];
    if (isCommandWithOutlets(command)) {
      break;
    }
    const curr = `${command}`;
    const next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
    if (currentPathIndex > 0 && curr === void 0) break;
    if (curr && next && typeof next === "object" && next.outlets === void 0) {
      if (!compare(curr, next, path)) return noMatch2;
      currentCommandIndex += 2;
    } else {
      if (!compare(curr, {}, path)) return noMatch2;
      currentCommandIndex++;
    }
    currentPathIndex++;
  }
  return {
    match: true,
    pathIndex: currentPathIndex,
    commandIndex: currentCommandIndex
  };
}
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
  const paths = segmentGroup.segments.slice(0, startIndex);
  let i = 0;
  while (i < commands.length) {
    const command = commands[i];
    if (isCommandWithOutlets(command)) {
      const children = createNewSegmentChildren(command.outlets);
      return new UrlSegmentGroup(paths, children);
    }
    if (i === 0 && isMatrixParams(commands[0])) {
      const p = segmentGroup.segments[startIndex];
      paths.push(new UrlSegment(p.path, stringify(commands[0])));
      i++;
      continue;
    }
    const curr = isCommandWithOutlets(command) ? command.outlets[PRIMARY_OUTLET] : `${command}`;
    const next = i < commands.length - 1 ? commands[i + 1] : null;
    if (curr && next && isMatrixParams(next)) {
      paths.push(new UrlSegment(curr, stringify(next)));
      i += 2;
    } else {
      paths.push(new UrlSegment(curr, {}));
      i++;
    }
  }
  return new UrlSegmentGroup(paths, {});
}
function createNewSegmentChildren(outlets) {
  const children = {};
  Object.entries(outlets).forEach(([outlet, commands]) => {
    if (typeof commands === "string") {
      commands = [commands];
    }
    if (commands !== null) {
      children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
    }
  });
  return children;
}
function stringify(params) {
  const res = {};
  Object.entries(params).forEach(([k, v]) => res[k] = `${v}`);
  return res;
}
function compare(path, params, segment) {
  return path == segment.path && shallowEqual(params, segment.parameters);
}
var IMPERATIVE_NAVIGATION = "imperative";
var EventType;
(function(EventType2) {
  EventType2[EventType2["NavigationStart"] = 0] = "NavigationStart";
  EventType2[EventType2["NavigationEnd"] = 1] = "NavigationEnd";
  EventType2[EventType2["NavigationCancel"] = 2] = "NavigationCancel";
  EventType2[EventType2["NavigationError"] = 3] = "NavigationError";
  EventType2[EventType2["RoutesRecognized"] = 4] = "RoutesRecognized";
  EventType2[EventType2["ResolveStart"] = 5] = "ResolveStart";
  EventType2[EventType2["ResolveEnd"] = 6] = "ResolveEnd";
  EventType2[EventType2["GuardsCheckStart"] = 7] = "GuardsCheckStart";
  EventType2[EventType2["GuardsCheckEnd"] = 8] = "GuardsCheckEnd";
  EventType2[EventType2["RouteConfigLoadStart"] = 9] = "RouteConfigLoadStart";
  EventType2[EventType2["RouteConfigLoadEnd"] = 10] = "RouteConfigLoadEnd";
  EventType2[EventType2["ChildActivationStart"] = 11] = "ChildActivationStart";
  EventType2[EventType2["ChildActivationEnd"] = 12] = "ChildActivationEnd";
  EventType2[EventType2["ActivationStart"] = 13] = "ActivationStart";
  EventType2[EventType2["ActivationEnd"] = 14] = "ActivationEnd";
  EventType2[EventType2["Scroll"] = 15] = "Scroll";
  EventType2[EventType2["NavigationSkipped"] = 16] = "NavigationSkipped";
})(EventType || (EventType = {}));
var RouterEvent = class {
  constructor(id, url) {
    this.id = id;
    this.url = url;
  }
};
var NavigationStart = class extends RouterEvent {
  constructor(id, url, navigationTrigger = "imperative", restoredState = null) {
    super(id, url);
    this.type = EventType.NavigationStart;
    this.navigationTrigger = navigationTrigger;
    this.restoredState = restoredState;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
  }
};
var NavigationEnd = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.type = EventType.NavigationEnd;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
  }
};
var NavigationCancellationCode;
(function(NavigationCancellationCode2) {
  NavigationCancellationCode2[NavigationCancellationCode2["Redirect"] = 0] = "Redirect";
  NavigationCancellationCode2[NavigationCancellationCode2["SupersededByNewNavigation"] = 1] = "SupersededByNewNavigation";
  NavigationCancellationCode2[NavigationCancellationCode2["NoDataFromResolver"] = 2] = "NoDataFromResolver";
  NavigationCancellationCode2[NavigationCancellationCode2["GuardRejected"] = 3] = "GuardRejected";
})(NavigationCancellationCode || (NavigationCancellationCode = {}));
var NavigationSkippedCode;
(function(NavigationSkippedCode2) {
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredSameUrlNavigation"] = 0] = "IgnoredSameUrlNavigation";
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredByUrlHandlingStrategy"] = 1] = "IgnoredByUrlHandlingStrategy";
})(NavigationSkippedCode || (NavigationSkippedCode = {}));
var NavigationCancel = class extends RouterEvent {
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
    this.type = EventType.NavigationCancel;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
  }
};
var NavigationSkipped = class extends RouterEvent {
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
    this.type = EventType.NavigationSkipped;
  }
};
var NavigationError = class extends RouterEvent {
  constructor(id, url, error, target) {
    super(id, url);
    this.error = error;
    this.target = target;
    this.type = EventType.NavigationError;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
  }
};
var RoutesRecognized = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = EventType.RoutesRecognized;
  }
  /** @docsNotRequired */
  toString() {
    return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckStart = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = EventType.GuardsCheckStart;
  }
  toString() {
    return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckEnd = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state, shouldActivate) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.shouldActivate = shouldActivate;
    this.type = EventType.GuardsCheckEnd;
  }
  toString() {
    return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
  }
};
var ResolveStart = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = EventType.ResolveStart;
  }
  toString() {
    return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var ResolveEnd = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = EventType.ResolveEnd;
  }
  toString() {
    return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var RouteConfigLoadStart = class {
  constructor(route) {
    this.route = route;
    this.type = EventType.RouteConfigLoadStart;
  }
  toString() {
    return `RouteConfigLoadStart(path: ${this.route.path})`;
  }
};
var RouteConfigLoadEnd = class {
  constructor(route) {
    this.route = route;
    this.type = EventType.RouteConfigLoadEnd;
  }
  toString() {
    return `RouteConfigLoadEnd(path: ${this.route.path})`;
  }
};
var ChildActivationStart = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = EventType.ChildActivationStart;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationStart(path: '${path}')`;
  }
};
var ChildActivationEnd = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = EventType.ChildActivationEnd;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationEnd(path: '${path}')`;
  }
};
var ActivationStart = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = EventType.ActivationStart;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationStart(path: '${path}')`;
  }
};
var ActivationEnd = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = EventType.ActivationEnd;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationEnd(path: '${path}')`;
  }
};
var Scroll = class {
  constructor(routerEvent, position, anchor) {
    this.routerEvent = routerEvent;
    this.position = position;
    this.anchor = anchor;
    this.type = EventType.Scroll;
  }
  toString() {
    const pos = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
    return `Scroll(anchor: '${this.anchor}', position: '${pos}')`;
  }
};
var BeforeActivateRoutes = class {
};
var RedirectRequest = class {
  constructor(url, navigationBehaviorOptions) {
    this.url = url;
    this.navigationBehaviorOptions = navigationBehaviorOptions;
  }
};
function stringifyEvent(routerEvent) {
  switch (routerEvent.type) {
    case EventType.ActivationEnd:
      return `ActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ActivationStart:
      return `ActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationEnd:
      return `ChildActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationStart:
      return `ChildActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.GuardsCheckEnd:
      return `GuardsCheckEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state}, shouldActivate: ${routerEvent.shouldActivate})`;
    case EventType.GuardsCheckStart:
      return `GuardsCheckStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.NavigationCancel:
      return `NavigationCancel(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationSkipped:
      return `NavigationSkipped(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationEnd:
      return `NavigationEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}')`;
    case EventType.NavigationError:
      return `NavigationError(id: ${routerEvent.id}, url: '${routerEvent.url}', error: ${routerEvent.error})`;
    case EventType.NavigationStart:
      return `NavigationStart(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.ResolveEnd:
      return `ResolveEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.ResolveStart:
      return `ResolveStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.RouteConfigLoadEnd:
      return `RouteConfigLoadEnd(path: ${routerEvent.route.path})`;
    case EventType.RouteConfigLoadStart:
      return `RouteConfigLoadStart(path: ${routerEvent.route.path})`;
    case EventType.RoutesRecognized:
      return `RoutesRecognized(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.Scroll:
      const pos = routerEvent.position ? `${routerEvent.position[0]}, ${routerEvent.position[1]}` : null;
      return `Scroll(anchor: '${routerEvent.anchor}', position: '${pos}')`;
  }
}
function getOrCreateRouteInjectorIfNeeded(route, currentInjector) {
  if (route.providers && !route._injector) {
    route._injector = createEnvironmentInjector(route.providers, currentInjector, `Route: ${route.path}`);
  }
  return route._injector ?? currentInjector;
}
function validateConfig(config, parentPath = "", requireStandaloneComponents = false) {
  for (let i = 0; i < config.length; i++) {
    const route = config[i];
    const fullPath = getFullPath(parentPath, route);
    validateNode(route, fullPath, requireStandaloneComponents);
  }
}
function assertStandalone(fullPath, component) {
  if (component && isNgModule(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. You are using 'loadComponent' with a module, but it must be used with standalone components. Use 'loadChildren' instead.`);
  } else if (component && !isStandalone(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. The component must be standalone.`);
  }
}
function validateNode(route, fullPath, requireStandaloneComponents) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!route) {
      throw new RuntimeError(4014, `
      Invalid configuration of route '${fullPath}': Encountered undefined route.
      The reason might be an extra comma.

      Example:
      const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',  component: DashboardComponent },, << two commas
        { path: 'detail/:id', component: HeroDetailComponent }
      ];
    `);
    }
    if (Array.isArray(route)) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': Array cannot be specified`);
    }
    if (!route.redirectTo && !route.component && !route.loadComponent && !route.children && !route.loadChildren && route.outlet && route.outlet !== PRIMARY_OUTLET) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': a componentless route without children or loadChildren cannot have a named outlet set`);
    }
    if (route.redirectTo && route.children) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and children cannot be used together`);
    }
    if (route.redirectTo && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and loadChildren cannot be used together`);
    }
    if (route.children && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': children and loadChildren cannot be used together`);
    }
    if (route.redirectTo && (route.component || route.loadComponent)) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and component/loadComponent cannot be used together`);
    }
    if (route.component && route.loadComponent) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': component and loadComponent cannot be used together`);
    }
    if (route.redirectTo && route.canActivate) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and canActivate cannot be used together. Redirects happen before activation so canActivate will never be executed.`);
    }
    if (route.path && route.matcher) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path and matcher cannot be used together`);
    }
    if (route.redirectTo === void 0 && !route.component && !route.loadComponent && !route.children && !route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. One of the following must be provided: component, loadComponent, redirectTo, children or loadChildren`);
    }
    if (route.path === void 0 && route.matcher === void 0) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': routes must have either a path or a matcher specified`);
    }
    if (typeof route.path === "string" && route.path.charAt(0) === "/") {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path cannot start with a slash`);
    }
    if (route.path === "" && route.redirectTo !== void 0 && route.pathMatch === void 0) {
      const exp = `The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`;
      throw new RuntimeError(4014, `Invalid configuration of route '{path: "${fullPath}", redirectTo: "${route.redirectTo}"}': please provide 'pathMatch'. ${exp}`);
    }
    if (requireStandaloneComponents) {
      assertStandalone(fullPath, route.component);
    }
  }
  if (route.children) {
    validateConfig(route.children, fullPath, requireStandaloneComponents);
  }
}
function getFullPath(parentPath, currentRoute) {
  if (!currentRoute) {
    return parentPath;
  }
  if (!parentPath && !currentRoute.path) {
    return "";
  } else if (parentPath && !currentRoute.path) {
    return `${parentPath}/`;
  } else if (!parentPath && currentRoute.path) {
    return currentRoute.path;
  } else {
    return `${parentPath}/${currentRoute.path}`;
  }
}
function getOutlet(route) {
  return route.outlet || PRIMARY_OUTLET;
}
function sortByMatchingOutlets(routes, outletName) {
  const sortedConfig = routes.filter((r) => getOutlet(r) === outletName);
  sortedConfig.push(...routes.filter((r) => getOutlet(r) !== outletName));
  return sortedConfig;
}
function getClosestRouteInjector(snapshot) {
  if (!snapshot) return null;
  if (snapshot.routeConfig?._injector) {
    return snapshot.routeConfig._injector;
  }
  for (let s = snapshot.parent; s; s = s.parent) {
    const route = s.routeConfig;
    if (route?._loadedInjector) return route._loadedInjector;
    if (route?._injector) return route._injector;
  }
  return null;
}
var OutletContext = class {
  get injector() {
    return getClosestRouteInjector(this.route?.snapshot) ?? this.rootInjector;
  }
  // TODO(atscott): Only here to avoid a "breaking" change in a patch/minor. Remove in v19.
  set injector(_) {
  }
  constructor(rootInjector) {
    this.rootInjector = rootInjector;
    this.outlet = null;
    this.route = null;
    this.children = new ChildrenOutletContexts(this.rootInjector);
    this.attachRef = null;
  }
};
var ChildrenOutletContexts = class _ChildrenOutletContexts {
  /** @nodoc */
  constructor(rootInjector) {
    this.rootInjector = rootInjector;
    this.contexts = /* @__PURE__ */ new Map();
  }
  /** Called when a `RouterOutlet` directive is instantiated */
  onChildOutletCreated(childName, outlet) {
    const context = this.getOrCreateContext(childName);
    context.outlet = outlet;
    this.contexts.set(childName, context);
  }
  /**
   * Called when a `RouterOutlet` directive is destroyed.
   * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
   * re-created later.
   */
  onChildOutletDestroyed(childName) {
    const context = this.getContext(childName);
    if (context) {
      context.outlet = null;
      context.attachRef = null;
    }
  }
  /**
   * Called when the corresponding route is deactivated during navigation.
   * Because the component get destroyed, all children outlet are destroyed.
   */
  onOutletDeactivated() {
    const contexts = this.contexts;
    this.contexts = /* @__PURE__ */ new Map();
    return contexts;
  }
  onOutletReAttached(contexts) {
    this.contexts = contexts;
  }
  getOrCreateContext(childName) {
    let context = this.getContext(childName);
    if (!context) {
      context = new OutletContext(this.rootInjector);
      this.contexts.set(childName, context);
    }
    return context;
  }
  getContext(childName) {
    return this.contexts.get(childName) || null;
  }
  static {
    this.\u0275fac = function ChildrenOutletContexts_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChildrenOutletContexts)(\u0275\u0275inject(EnvironmentInjector));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ChildrenOutletContexts,
      factory: _ChildrenOutletContexts.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChildrenOutletContexts, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EnvironmentInjector
  }], null);
})();
var Tree = class {
  constructor(root) {
    this._root = root;
  }
  get root() {
    return this._root.value;
  }
  /**
   * @internal
   */
  parent(t) {
    const p = this.pathFromRoot(t);
    return p.length > 1 ? p[p.length - 2] : null;
  }
  /**
   * @internal
   */
  children(t) {
    const n = findNode(t, this._root);
    return n ? n.children.map((t2) => t2.value) : [];
  }
  /**
   * @internal
   */
  firstChild(t) {
    const n = findNode(t, this._root);
    return n && n.children.length > 0 ? n.children[0].value : null;
  }
  /**
   * @internal
   */
  siblings(t) {
    const p = findPath(t, this._root);
    if (p.length < 2) return [];
    const c = p[p.length - 2].children.map((c2) => c2.value);
    return c.filter((cc) => cc !== t);
  }
  /**
   * @internal
   */
  pathFromRoot(t) {
    return findPath(t, this._root).map((s) => s.value);
  }
};
function findNode(value, node) {
  if (value === node.value) return node;
  for (const child of node.children) {
    const node2 = findNode(value, child);
    if (node2) return node2;
  }
  return null;
}
function findPath(value, node) {
  if (value === node.value) return [node];
  for (const child of node.children) {
    const path = findPath(value, child);
    if (path.length) {
      path.unshift(node);
      return path;
    }
  }
  return [];
}
var TreeNode = class {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function nodeChildrenAsMap(node) {
  const map2 = {};
  if (node) {
    node.children.forEach((child) => map2[child.value.outlet] = child);
  }
  return map2;
}
var RouterState = class extends Tree {
  /** @internal */
  constructor(root, snapshot) {
    super(root);
    this.snapshot = snapshot;
    setRouterState(this, root);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function createEmptyState(rootComponent) {
  const snapshot = createEmptyStateSnapshot(rootComponent);
  const emptyUrl = new BehaviorSubject([new UrlSegment("", {})]);
  const emptyParams = new BehaviorSubject({});
  const emptyData = new BehaviorSubject({});
  const emptyQueryParams = new BehaviorSubject({});
  const fragment = new BehaviorSubject("");
  const activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
  activated.snapshot = snapshot.root;
  return new RouterState(new TreeNode(activated, []), snapshot);
}
function createEmptyStateSnapshot(rootComponent) {
  const emptyParams = {};
  const emptyData = {};
  const emptyQueryParams = {};
  const fragment = "";
  const activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, {});
  return new RouterStateSnapshot("", new TreeNode(activated, []));
}
var ActivatedRoute = class {
  /** @internal */
  constructor(urlSubject, paramsSubject, queryParamsSubject, fragmentSubject, dataSubject, outlet, component, futureSnapshot) {
    this.urlSubject = urlSubject;
    this.paramsSubject = paramsSubject;
    this.queryParamsSubject = queryParamsSubject;
    this.fragmentSubject = fragmentSubject;
    this.dataSubject = dataSubject;
    this.outlet = outlet;
    this.component = component;
    this._futureSnapshot = futureSnapshot;
    this.title = this.dataSubject?.pipe(map((d) => d[RouteTitleKey])) ?? of(void 0);
    this.url = urlSubject;
    this.params = paramsSubject;
    this.queryParams = queryParamsSubject;
    this.fragment = fragmentSubject;
    this.data = dataSubject;
  }
  /** The configuration used to match this route. */
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  /** The root of the router state. */
  get root() {
    return this._routerState.root;
  }
  /** The parent of this route in the router state tree. */
  get parent() {
    return this._routerState.parent(this);
  }
  /** The first child of this route in the router state tree. */
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  /** The children of this route in the router state tree. */
  get children() {
    return this._routerState.children(this);
  }
  /** The path from the root of the router state tree to this route. */
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  /**
   * An Observable that contains a map of the required and optional parameters
   * specific to the route.
   * The map supports retrieving single and multiple values from the same parameter.
   */
  get paramMap() {
    this._paramMap ??= this.params.pipe(map((p) => convertToParamMap(p)));
    return this._paramMap;
  }
  /**
   * An Observable that contains a map of the query parameters available to all routes.
   * The map supports retrieving single and multiple values from the query parameter.
   */
  get queryParamMap() {
    this._queryParamMap ??= this.queryParams.pipe(map((p) => convertToParamMap(p)));
    return this._queryParamMap;
  }
  toString() {
    return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
  }
};
function getInherited(route, parent, paramsInheritanceStrategy = "emptyOnly") {
  let inherited;
  const {
    routeConfig
  } = route;
  if (parent !== null && (paramsInheritanceStrategy === "always" || // inherit parent data if route is empty path
  routeConfig?.path === "" || // inherit parent data if parent was componentless
  !parent.component && !parent.routeConfig?.loadComponent)) {
    inherited = {
      params: __spreadValues(__spreadValues({}, parent.params), route.params),
      data: __spreadValues(__spreadValues({}, parent.data), route.data),
      resolve: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, route.data), parent.data), routeConfig?.data), route._resolvedData)
    };
  } else {
    inherited = {
      params: __spreadValues({}, route.params),
      data: __spreadValues({}, route.data),
      resolve: __spreadValues(__spreadValues({}, route.data), route._resolvedData ?? {})
    };
  }
  if (routeConfig && hasStaticTitle(routeConfig)) {
    inherited.resolve[RouteTitleKey] = routeConfig.title;
  }
  return inherited;
}
var ActivatedRouteSnapshot = class {
  /** The resolved route title */
  get title() {
    return this.data?.[RouteTitleKey];
  }
  /** @internal */
  constructor(url, params, queryParams, fragment, data, outlet, component, routeConfig, resolve) {
    this.url = url;
    this.params = params;
    this.queryParams = queryParams;
    this.fragment = fragment;
    this.data = data;
    this.outlet = outlet;
    this.component = component;
    this.routeConfig = routeConfig;
    this._resolve = resolve;
  }
  /** The root of the router state */
  get root() {
    return this._routerState.root;
  }
  /** The parent of this route in the router state tree */
  get parent() {
    return this._routerState.parent(this);
  }
  /** The first child of this route in the router state tree */
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  /** The children of this route in the router state tree */
  get children() {
    return this._routerState.children(this);
  }
  /** The path from the root of the router state tree to this route */
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    this._paramMap ??= convertToParamMap(this.params);
    return this._paramMap;
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  toString() {
    const url = this.url.map((segment) => segment.toString()).join("/");
    const matched = this.routeConfig ? this.routeConfig.path : "";
    return `Route(url:'${url}', path:'${matched}')`;
  }
};
var RouterStateSnapshot = class extends Tree {
  /** @internal */
  constructor(url, root) {
    super(root);
    this.url = url;
    setRouterState(this, root);
  }
  toString() {
    return serializeNode(this._root);
  }
};
function setRouterState(state, node) {
  node.value._routerState = state;
  node.children.forEach((c) => setRouterState(state, c));
}
function serializeNode(node) {
  const c = node.children.length > 0 ? ` { ${node.children.map(serializeNode).join(", ")} } ` : "";
  return `${node.value}${c}`;
}
function advanceActivatedRoute(route) {
  if (route.snapshot) {
    const currentSnapshot = route.snapshot;
    const nextSnapshot = route._futureSnapshot;
    route.snapshot = nextSnapshot;
    if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
      route.queryParamsSubject.next(nextSnapshot.queryParams);
    }
    if (currentSnapshot.fragment !== nextSnapshot.fragment) {
      route.fragmentSubject.next(nextSnapshot.fragment);
    }
    if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
      route.paramsSubject.next(nextSnapshot.params);
    }
    if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
      route.urlSubject.next(nextSnapshot.url);
    }
    if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
      route.dataSubject.next(nextSnapshot.data);
    }
  } else {
    route.snapshot = route._futureSnapshot;
    route.dataSubject.next(route._futureSnapshot.data);
  }
}
function equalParamsAndUrlSegments(a, b) {
  const equalUrlParams = shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
  const parentsMismatch = !a.parent !== !b.parent;
  return equalUrlParams && !parentsMismatch && (!a.parent || equalParamsAndUrlSegments(a.parent, b.parent));
}
function hasStaticTitle(config) {
  return typeof config.title === "string" || config.title === null;
}
var RouterOutlet = class _RouterOutlet {
  constructor() {
    this.activated = null;
    this._activatedRoute = null;
    this.name = PRIMARY_OUTLET;
    this.activateEvents = new EventEmitter();
    this.deactivateEvents = new EventEmitter();
    this.attachEvents = new EventEmitter();
    this.detachEvents = new EventEmitter();
    this.parentContexts = inject(ChildrenOutletContexts);
    this.location = inject(ViewContainerRef);
    this.changeDetector = inject(ChangeDetectorRef);
    this.inputBinder = inject(INPUT_BINDER, {
      optional: true
    });
    this.supportsBindingToComponentInputs = true;
  }
  /** @internal */
  get activatedComponentRef() {
    return this.activated;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (changes["name"]) {
      const {
        firstChange,
        previousValue
      } = changes["name"];
      if (firstChange) {
        return;
      }
      if (this.isTrackedInParentContexts(previousValue)) {
        this.deactivate();
        this.parentContexts.onChildOutletDestroyed(previousValue);
      }
      this.initializeOutletWithName();
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.isTrackedInParentContexts(this.name)) {
      this.parentContexts.onChildOutletDestroyed(this.name);
    }
    this.inputBinder?.unsubscribeFromRouteData(this);
  }
  isTrackedInParentContexts(outletName) {
    return this.parentContexts.getContext(outletName)?.outlet === this;
  }
  /** @nodoc */
  ngOnInit() {
    this.initializeOutletWithName();
  }
  initializeOutletWithName() {
    this.parentContexts.onChildOutletCreated(this.name, this);
    if (this.activated) {
      return;
    }
    const context = this.parentContexts.getContext(this.name);
    if (context?.route) {
      if (context.attachRef) {
        this.attach(context.attachRef, context.route);
      } else {
        this.activateWith(context.route, context.injector);
      }
    }
  }
  get isActivated() {
    return !!this.activated;
  }
  /**
   * @returns The currently activated component instance.
   * @throws An error if the outlet is not activated.
   */
  get component() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this.activated.instance;
  }
  get activatedRoute() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this._activatedRoute;
  }
  get activatedRouteData() {
    if (this._activatedRoute) {
      return this._activatedRoute.snapshot.data;
    }
    return {};
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to detach the subtree
   */
  detach() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    this.location.detach();
    const cmp = this.activated;
    this.activated = null;
    this._activatedRoute = null;
    this.detachEvents.emit(cmp.instance);
    return cmp;
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
   */
  attach(ref, activatedRoute) {
    this.activated = ref;
    this._activatedRoute = activatedRoute;
    this.location.insert(ref.hostView);
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.attachEvents.emit(ref.instance);
  }
  deactivate() {
    if (this.activated) {
      const c = this.component;
      this.activated.destroy();
      this.activated = null;
      this._activatedRoute = null;
      this.deactivateEvents.emit(c);
    }
  }
  activateWith(activatedRoute, environmentInjector) {
    if (this.isActivated) {
      throw new RuntimeError(4013, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot activate an already activated outlet");
    }
    this._activatedRoute = activatedRoute;
    const location = this.location;
    const snapshot = activatedRoute.snapshot;
    const component = snapshot.component;
    const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
    const injector = new OutletInjector(activatedRoute, childContexts, location.injector);
    this.activated = location.createComponent(component, {
      index: location.length,
      injector,
      environmentInjector
    });
    this.changeDetector.markForCheck();
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.activateEvents.emit(this.activated.instance);
  }
  static {
    this.\u0275fac = function RouterOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RouterOutlet)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RouterOutlet,
      selectors: [["router-outlet"]],
      inputs: {
        name: "name"
      },
      outputs: {
        activateEvents: "activate",
        deactivateEvents: "deactivate",
        attachEvents: "attach",
        detachEvents: "detach"
      },
      exportAs: ["outlet"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterOutlet, [{
    type: Directive,
    args: [{
      selector: "router-outlet",
      exportAs: "outlet",
      standalone: true
    }]
  }], null, {
    name: [{
      type: Input
    }],
    activateEvents: [{
      type: Output,
      args: ["activate"]
    }],
    deactivateEvents: [{
      type: Output,
      args: ["deactivate"]
    }],
    attachEvents: [{
      type: Output,
      args: ["attach"]
    }],
    detachEvents: [{
      type: Output,
      args: ["detach"]
    }]
  });
})();
var OutletInjector = class _OutletInjector {
  /**
   * This injector has a special handing for the `ActivatedRoute` and
   * `ChildrenOutletContexts` tokens: it returns corresponding values for those
   * tokens dynamically. This behavior is different from the regular injector logic,
   * when we initialize and store a value, which is later returned for all inject
   * requests.
   *
   * In some cases (e.g. when using `@defer`), this dynamic behavior requires special
   * handling. This function allows to identify an instance of the `OutletInjector` and
   * create an instance of it without referring to the class itself (so this logic can
   * be invoked from the `core` package). This helps to retain dynamic behavior for the
   * mentioned tokens.
   *
   * Note: it's a temporary solution and we should explore how to support this case better.
   */
  __ngOutletInjector(parentInjector) {
    return new _OutletInjector(this.route, this.childContexts, parentInjector);
  }
  constructor(route, childContexts, parent) {
    this.route = route;
    this.childContexts = childContexts;
    this.parent = parent;
  }
  get(token, notFoundValue) {
    if (token === ActivatedRoute) {
      return this.route;
    }
    if (token === ChildrenOutletContexts) {
      return this.childContexts;
    }
    return this.parent.get(token, notFoundValue);
  }
};
var INPUT_BINDER = new InjectionToken("");
var RoutedComponentInputBinder = class _RoutedComponentInputBinder {
  constructor() {
    this.outletDataSubscriptions = /* @__PURE__ */ new Map();
  }
  bindActivatedRouteToOutletComponent(outlet) {
    this.unsubscribeFromRouteData(outlet);
    this.subscribeToRouteData(outlet);
  }
  unsubscribeFromRouteData(outlet) {
    this.outletDataSubscriptions.get(outlet)?.unsubscribe();
    this.outletDataSubscriptions.delete(outlet);
  }
  subscribeToRouteData(outlet) {
    const {
      activatedRoute
    } = outlet;
    const dataSubscription = combineLatest([activatedRoute.queryParams, activatedRoute.params, activatedRoute.data]).pipe(switchMap(([queryParams, params, data], index) => {
      data = __spreadValues(__spreadValues(__spreadValues({}, queryParams), params), data);
      if (index === 0) {
        return of(data);
      }
      return Promise.resolve(data);
    })).subscribe((data) => {
      if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      const mirror = reflectComponentType(activatedRoute.component);
      if (!mirror) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      for (const {
        templateName
      } of mirror.inputs) {
        outlet.activatedComponentRef.setInput(templateName, data[templateName]);
      }
    });
    this.outletDataSubscriptions.set(outlet, dataSubscription);
  }
  static {
    this.\u0275fac = function RoutedComponentInputBinder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoutedComponentInputBinder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _RoutedComponentInputBinder,
      factory: _RoutedComponentInputBinder.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutedComponentInputBinder, [{
    type: Injectable
  }], null, null);
})();
function createRouterState(routeReuseStrategy, curr, prevState) {
  const root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : void 0);
  return new RouterState(root, curr);
}
function createNode(routeReuseStrategy, curr, prevState) {
  if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
    const value = prevState.value;
    value._futureSnapshot = curr.value;
    const children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
    return new TreeNode(value, children);
  } else {
    if (routeReuseStrategy.shouldAttach(curr.value)) {
      const detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
      if (detachedRouteHandle !== null) {
        const tree2 = detachedRouteHandle.route;
        tree2.value._futureSnapshot = curr.value;
        tree2.children = curr.children.map((c) => createNode(routeReuseStrategy, c));
        return tree2;
      }
    }
    const value = createActivatedRoute(curr.value);
    const children = curr.children.map((c) => createNode(routeReuseStrategy, c));
    return new TreeNode(value, children);
  }
}
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
  return curr.children.map((child) => {
    for (const p of prevState.children) {
      if (routeReuseStrategy.shouldReuseRoute(child.value, p.value.snapshot)) {
        return createNode(routeReuseStrategy, child, p);
      }
    }
    return createNode(routeReuseStrategy, child);
  });
}
function createActivatedRoute(c) {
  return new ActivatedRoute(new BehaviorSubject(c.url), new BehaviorSubject(c.params), new BehaviorSubject(c.queryParams), new BehaviorSubject(c.fragment), new BehaviorSubject(c.data), c.outlet, c.component, c);
}
var RedirectCommand = class {
  constructor(redirectTo, navigationBehaviorOptions) {
    this.redirectTo = redirectTo;
    this.navigationBehaviorOptions = navigationBehaviorOptions;
  }
};
var NAVIGATION_CANCELING_ERROR = "ngNavigationCancelingError";
function redirectingNavigationError(urlSerializer, redirect) {
  const {
    redirectTo,
    navigationBehaviorOptions
  } = isUrlTree(redirect) ? {
    redirectTo: redirect,
    navigationBehaviorOptions: void 0
  } : redirect;
  const error = navigationCancelingError(ngDevMode && `Redirecting to "${urlSerializer.serialize(redirectTo)}"`, NavigationCancellationCode.Redirect);
  error.url = redirectTo;
  error.navigationBehaviorOptions = navigationBehaviorOptions;
  return error;
}
function navigationCancelingError(message, code) {
  const error = new Error(`NavigationCancelingError: ${message || ""}`);
  error[NAVIGATION_CANCELING_ERROR] = true;
  error.cancellationCode = code;
  return error;
}
function isRedirectingNavigationCancelingError(error) {
  return isNavigationCancelingError(error) && isUrlTree(error.url);
}
function isNavigationCancelingError(error) {
  return !!error && error[NAVIGATION_CANCELING_ERROR];
}
var warnedAboutUnsupportedInputBinding = false;
var activateRoutes = (rootContexts, routeReuseStrategy, forwardEvent, inputBindingEnabled) => map((t) => {
  new ActivateRoutes(routeReuseStrategy, t.targetRouterState, t.currentRouterState, forwardEvent, inputBindingEnabled).activate(rootContexts);
  return t;
});
var ActivateRoutes = class {
  constructor(routeReuseStrategy, futureState, currState, forwardEvent, inputBindingEnabled) {
    this.routeReuseStrategy = routeReuseStrategy;
    this.futureState = futureState;
    this.currState = currState;
    this.forwardEvent = forwardEvent;
    this.inputBindingEnabled = inputBindingEnabled;
  }
  activate(parentContexts) {
    const futureRoot = this.futureState._root;
    const currRoot = this.currState ? this.currState._root : null;
    this.deactivateChildRoutes(futureRoot, currRoot, parentContexts);
    advanceActivatedRoute(this.futureState.root);
    this.activateChildRoutes(futureRoot, currRoot, parentContexts);
  }
  // De-activate the child route that are not re-used for the future state
  deactivateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((futureChild) => {
      const childOutletName = futureChild.value.outlet;
      this.deactivateRoutes(futureChild, children[childOutletName], contexts);
      delete children[childOutletName];
    });
    Object.values(children).forEach((v) => {
      this.deactivateRouteAndItsChildren(v, contexts);
    });
  }
  deactivateRoutes(futureNode, currNode, parentContext) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    if (future === curr) {
      if (future.component) {
        const context = parentContext.getContext(future.outlet);
        if (context) {
          this.deactivateChildRoutes(futureNode, currNode, context.children);
        }
      } else {
        this.deactivateChildRoutes(futureNode, currNode, parentContext);
      }
    } else {
      if (curr) {
        this.deactivateRouteAndItsChildren(currNode, parentContext);
      }
    }
  }
  deactivateRouteAndItsChildren(route, parentContexts) {
    if (route.value.component && this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
      this.detachAndStoreRouteSubtree(route, parentContexts);
    } else {
      this.deactivateRouteAndOutlet(route, parentContexts);
    }
  }
  detachAndStoreRouteSubtree(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context && context.outlet) {
      const componentRef = context.outlet.detach();
      const contexts2 = context.children.onOutletDeactivated();
      this.routeReuseStrategy.store(route.value.snapshot, {
        componentRef,
        route,
        contexts: contexts2
      });
    }
  }
  deactivateRouteAndOutlet(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context) {
      if (context.outlet) {
        context.outlet.deactivate();
        context.children.onOutletDeactivated();
      }
      context.attachRef = null;
      context.route = null;
    }
  }
  activateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((c) => {
      this.activateRoutes(c, children[c.value.outlet], contexts);
      this.forwardEvent(new ActivationEnd(c.value.snapshot));
    });
    if (futureNode.children.length) {
      this.forwardEvent(new ChildActivationEnd(futureNode.value.snapshot));
    }
  }
  activateRoutes(futureNode, currNode, parentContexts) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    advanceActivatedRoute(future);
    if (future === curr) {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        this.activateChildRoutes(futureNode, currNode, context.children);
      } else {
        this.activateChildRoutes(futureNode, currNode, parentContexts);
      }
    } else {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
          const stored = this.routeReuseStrategy.retrieve(future.snapshot);
          this.routeReuseStrategy.store(future.snapshot, null);
          context.children.onOutletReAttached(stored.contexts);
          context.attachRef = stored.componentRef;
          context.route = stored.route.value;
          if (context.outlet) {
            context.outlet.attach(stored.componentRef, stored.route.value);
          }
          advanceActivatedRoute(stored.route.value);
          this.activateChildRoutes(futureNode, null, context.children);
        } else {
          context.attachRef = null;
          context.route = future;
          if (context.outlet) {
            context.outlet.activateWith(future, context.injector);
          }
          this.activateChildRoutes(futureNode, null, context.children);
        }
      } else {
        this.activateChildRoutes(futureNode, null, parentContexts);
      }
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const context = parentContexts.getOrCreateContext(future.outlet);
      const outlet = context.outlet;
      if (outlet && this.inputBindingEnabled && !outlet.supportsBindingToComponentInputs && !warnedAboutUnsupportedInputBinding) {
        console.warn(`'withComponentInputBinding' feature is enabled but this application is using an outlet that may not support binding to component inputs.`);
        warnedAboutUnsupportedInputBinding = true;
      }
    }
  }
};
var CanActivate = class {
  constructor(path) {
    this.path = path;
    this.route = this.path[this.path.length - 1];
  }
};
var CanDeactivate = class {
  constructor(component, route) {
    this.component = component;
    this.route = route;
  }
};
function getAllRouteGuards(future, curr, parentContexts) {
  const futureRoot = future._root;
  const currRoot = curr ? curr._root : null;
  return getChildRouteGuards(futureRoot, currRoot, parentContexts, [futureRoot.value]);
}
function getCanActivateChild(p) {
  const canActivateChild = p.routeConfig ? p.routeConfig.canActivateChild : null;
  if (!canActivateChild || canActivateChild.length === 0) return null;
  return {
    node: p,
    guards: canActivateChild
  };
}
function getTokenOrFunctionIdentity(tokenOrFunction, injector) {
  const NOT_FOUND = Symbol();
  const result = injector.get(tokenOrFunction, NOT_FOUND);
  if (result === NOT_FOUND) {
    if (typeof tokenOrFunction === "function" && !isInjectable(tokenOrFunction)) {
      return tokenOrFunction;
    } else {
      return injector.get(tokenOrFunction);
    }
  }
  return result;
}
function getChildRouteGuards(futureNode, currNode, contexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const prevChildren = nodeChildrenAsMap(currNode);
  futureNode.children.forEach((c) => {
    getRouteGuards(c, prevChildren[c.value.outlet], contexts, futurePath.concat([c.value]), checks);
    delete prevChildren[c.value.outlet];
  });
  Object.entries(prevChildren).forEach(([k, v]) => deactivateRouteAndItsChildren(v, contexts.getContext(k), checks));
  return checks;
}
function getRouteGuards(futureNode, currNode, parentContexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const future = futureNode.value;
  const curr = currNode ? currNode.value : null;
  const context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
  if (curr && future.routeConfig === curr.routeConfig) {
    const shouldRun = shouldRunGuardsAndResolvers(curr, future, future.routeConfig.runGuardsAndResolvers);
    if (shouldRun) {
      checks.canActivateChecks.push(new CanActivate(futurePath));
    } else {
      future.data = curr.data;
      future._resolvedData = curr._resolvedData;
    }
    if (future.component) {
      getChildRouteGuards(futureNode, currNode, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, currNode, parentContexts, futurePath, checks);
    }
    if (shouldRun && context && context.outlet && context.outlet.isActivated) {
      checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, curr));
    }
  } else {
    if (curr) {
      deactivateRouteAndItsChildren(currNode, context, checks);
    }
    checks.canActivateChecks.push(new CanActivate(futurePath));
    if (future.component) {
      getChildRouteGuards(futureNode, null, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, null, parentContexts, futurePath, checks);
    }
  }
  return checks;
}
function shouldRunGuardsAndResolvers(curr, future, mode) {
  if (typeof mode === "function") {
    return mode(curr, future);
  }
  switch (mode) {
    case "pathParamsChange":
      return !equalPath(curr.url, future.url);
    case "pathParamsOrQueryParamsChange":
      return !equalPath(curr.url, future.url) || !shallowEqual(curr.queryParams, future.queryParams);
    case "always":
      return true;
    case "paramsOrQueryParamsChange":
      return !equalParamsAndUrlSegments(curr, future) || !shallowEqual(curr.queryParams, future.queryParams);
    case "paramsChange":
    default:
      return !equalParamsAndUrlSegments(curr, future);
  }
}
function deactivateRouteAndItsChildren(route, context, checks) {
  const children = nodeChildrenAsMap(route);
  const r = route.value;
  Object.entries(children).forEach(([childName, node]) => {
    if (!r.component) {
      deactivateRouteAndItsChildren(node, context, checks);
    } else if (context) {
      deactivateRouteAndItsChildren(node, context.children.getContext(childName), checks);
    } else {
      deactivateRouteAndItsChildren(node, null, checks);
    }
  });
  if (!r.component) {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  } else if (context && context.outlet && context.outlet.isActivated) {
    checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r));
  } else {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  }
}
function isFunction(v) {
  return typeof v === "function";
}
function isBoolean(v) {
  return typeof v === "boolean";
}
function isCanLoad(guard) {
  return guard && isFunction(guard.canLoad);
}
function isCanActivate(guard) {
  return guard && isFunction(guard.canActivate);
}
function isCanActivateChild(guard) {
  return guard && isFunction(guard.canActivateChild);
}
function isCanDeactivate(guard) {
  return guard && isFunction(guard.canDeactivate);
}
function isCanMatch(guard) {
  return guard && isFunction(guard.canMatch);
}
function isEmptyError(e) {
  return e instanceof EmptyError || e?.name === "EmptyError";
}
var INITIAL_VALUE = /* @__PURE__ */ Symbol("INITIAL_VALUE");
function prioritizedGuardValue() {
  return switchMap((obs) => {
    return combineLatest(obs.map((o) => o.pipe(take(1), startWith(INITIAL_VALUE)))).pipe(map((results) => {
      for (const result of results) {
        if (result === true) {
          continue;
        } else if (result === INITIAL_VALUE) {
          return INITIAL_VALUE;
        } else if (result === false || isRedirect(result)) {
          return result;
        }
      }
      return true;
    }), filter((item) => item !== INITIAL_VALUE), take(1));
  });
}
function isRedirect(val) {
  return isUrlTree(val) || val instanceof RedirectCommand;
}
function checkGuards(injector, forwardEvent) {
  return mergeMap((t) => {
    const {
      targetSnapshot,
      currentSnapshot,
      guards: {
        canActivateChecks,
        canDeactivateChecks
      }
    } = t;
    if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
      return of(__spreadProps(__spreadValues({}, t), {
        guardsResult: true
      }));
    }
    return runCanDeactivateChecks(canDeactivateChecks, targetSnapshot, currentSnapshot, injector).pipe(mergeMap((canDeactivate) => {
      return canDeactivate && isBoolean(canDeactivate) ? runCanActivateChecks(targetSnapshot, canActivateChecks, injector, forwardEvent) : of(canDeactivate);
    }), map((guardsResult) => __spreadProps(__spreadValues({}, t), {
      guardsResult
    })));
  });
}
function runCanDeactivateChecks(checks, futureRSS, currRSS, injector) {
  return from(checks).pipe(mergeMap((check) => runCanDeactivate(check.component, check.route, currRSS, futureRSS, injector)), first((result) => {
    return result !== true;
  }, true));
}
function runCanActivateChecks(futureSnapshot, checks, injector, forwardEvent) {
  return from(checks).pipe(concatMap((check) => {
    return concat(fireChildActivationStart(check.route.parent, forwardEvent), fireActivationStart(check.route, forwardEvent), runCanActivateChild(futureSnapshot, check.path, injector), runCanActivate(futureSnapshot, check.route, injector));
  }), first((result) => {
    return result !== true;
  }, true));
}
function fireActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ActivationStart(snapshot));
  }
  return of(true);
}
function fireChildActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ChildActivationStart(snapshot));
  }
  return of(true);
}
function runCanActivate(futureRSS, futureARS, injector) {
  const canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
  if (!canActivate || canActivate.length === 0) return of(true);
  const canActivateObservables = canActivate.map((canActivate2) => {
    return defer(() => {
      const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
      const guard = getTokenOrFunctionIdentity(canActivate2, closestInjector);
      const guardVal = isCanActivate(guard) ? guard.canActivate(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
      return wrapIntoObservable(guardVal).pipe(first());
    });
  });
  return of(canActivateObservables).pipe(prioritizedGuardValue());
}
function runCanActivateChild(futureRSS, path, injector) {
  const futureARS = path[path.length - 1];
  const canActivateChildGuards = path.slice(0, path.length - 1).reverse().map((p) => getCanActivateChild(p)).filter((_) => _ !== null);
  const canActivateChildGuardsMapped = canActivateChildGuards.map((d) => {
    return defer(() => {
      const guardsMapped = d.guards.map((canActivateChild) => {
        const closestInjector = getClosestRouteInjector(d.node) ?? injector;
        const guard = getTokenOrFunctionIdentity(canActivateChild, closestInjector);
        const guardVal = isCanActivateChild(guard) ? guard.canActivateChild(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
        return wrapIntoObservable(guardVal).pipe(first());
      });
      return of(guardsMapped).pipe(prioritizedGuardValue());
    });
  });
  return of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
}
function runCanDeactivate(component, currARS, currRSS, futureRSS, injector) {
  const canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
  if (!canDeactivate || canDeactivate.length === 0) return of(true);
  const canDeactivateObservables = canDeactivate.map((c) => {
    const closestInjector = getClosestRouteInjector(currARS) ?? injector;
    const guard = getTokenOrFunctionIdentity(c, closestInjector);
    const guardVal = isCanDeactivate(guard) ? guard.canDeactivate(component, currARS, currRSS, futureRSS) : runInInjectionContext(closestInjector, () => guard(component, currARS, currRSS, futureRSS));
    return wrapIntoObservable(guardVal).pipe(first());
  });
  return of(canDeactivateObservables).pipe(prioritizedGuardValue());
}
function runCanLoadGuards(injector, route, segments, urlSerializer) {
  const canLoad = route.canLoad;
  if (canLoad === void 0 || canLoad.length === 0) {
    return of(true);
  }
  const canLoadObservables = canLoad.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanLoad(guard) ? guard.canLoad(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canLoadObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
function redirectIfUrlTree(urlSerializer) {
  return pipe(tap((result) => {
    if (typeof result === "boolean") return;
    throw redirectingNavigationError(urlSerializer, result);
  }), map((result) => result === true));
}
function runCanMatchGuards(injector, route, segments, urlSerializer) {
  const canMatch = route.canMatch;
  if (!canMatch || canMatch.length === 0) return of(true);
  const canMatchObservables = canMatch.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanMatch(guard) ? guard.canMatch(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canMatchObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
var NoMatch = class {
  constructor(segmentGroup) {
    this.segmentGroup = segmentGroup || null;
  }
};
var AbsoluteRedirect = class extends Error {
  constructor(urlTree) {
    super();
    this.urlTree = urlTree;
  }
};
function noMatch$1(segmentGroup) {
  return throwError(new NoMatch(segmentGroup));
}
function namedOutletsRedirect(redirectTo) {
  return throwError(new RuntimeError(4e3, (typeof ngDevMode === "undefined" || ngDevMode) && `Only absolute redirects can have named outlets. redirectTo: '${redirectTo}'`));
}
function canLoadFails(route) {
  return throwError(navigationCancelingError((typeof ngDevMode === "undefined" || ngDevMode) && `Cannot load children because the guard of the route "path: '${route.path}'" returned false`, NavigationCancellationCode.GuardRejected));
}
var ApplyRedirects = class {
  constructor(urlSerializer, urlTree) {
    this.urlSerializer = urlSerializer;
    this.urlTree = urlTree;
  }
  lineralizeSegments(route, urlTree) {
    let res = [];
    let c = urlTree.root;
    while (true) {
      res = res.concat(c.segments);
      if (c.numberOfChildren === 0) {
        return of(res);
      }
      if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
        return namedOutletsRedirect(`${route.redirectTo}`);
      }
      c = c.children[PRIMARY_OUTLET];
    }
  }
  applyRedirectCommands(segments, redirectTo, posParams, currentSnapshot, injector) {
    if (typeof redirectTo !== "string") {
      const redirectToFn = redirectTo;
      const {
        queryParams,
        fragment,
        routeConfig,
        url,
        outlet,
        params,
        data,
        title
      } = currentSnapshot;
      const newRedirect = runInInjectionContext(injector, () => redirectToFn({
        params,
        data,
        queryParams,
        fragment,
        routeConfig,
        url,
        outlet,
        title
      }));
      if (newRedirect instanceof UrlTree) {
        throw new AbsoluteRedirect(newRedirect);
      }
      redirectTo = newRedirect;
    }
    const newTree = this.applyRedirectCreateUrlTree(redirectTo, this.urlSerializer.parse(redirectTo), segments, posParams);
    if (redirectTo[0] === "/") {
      throw new AbsoluteRedirect(newTree);
    }
    return newTree;
  }
  applyRedirectCreateUrlTree(redirectTo, urlTree, segments, posParams) {
    const newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
    return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
  }
  createQueryParams(redirectToParams, actualParams) {
    const res = {};
    Object.entries(redirectToParams).forEach(([k, v]) => {
      const copySourceValue = typeof v === "string" && v[0] === ":";
      if (copySourceValue) {
        const sourceName = v.substring(1);
        res[k] = actualParams[sourceName];
      } else {
        res[k] = v;
      }
    });
    return res;
  }
  createSegmentGroup(redirectTo, group, segments, posParams) {
    const updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
    let children = {};
    Object.entries(group.children).forEach(([name, child]) => {
      children[name] = this.createSegmentGroup(redirectTo, child, segments, posParams);
    });
    return new UrlSegmentGroup(updatedSegments, children);
  }
  createSegments(redirectTo, redirectToSegments, actualSegments, posParams) {
    return redirectToSegments.map((s) => s.path[0] === ":" ? this.findPosParam(redirectTo, s, posParams) : this.findOrReturn(s, actualSegments));
  }
  findPosParam(redirectTo, redirectToUrlSegment, posParams) {
    const pos = posParams[redirectToUrlSegment.path.substring(1)];
    if (!pos) throw new RuntimeError(4001, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot redirect to '${redirectTo}'. Cannot find '${redirectToUrlSegment.path}'.`);
    return pos;
  }
  findOrReturn(redirectToUrlSegment, actualSegments) {
    let idx = 0;
    for (const s of actualSegments) {
      if (s.path === redirectToUrlSegment.path) {
        actualSegments.splice(idx);
        return s;
      }
      idx++;
    }
    return redirectToUrlSegment;
  }
};
var noMatch = {
  matched: false,
  consumedSegments: [],
  remainingSegments: [],
  parameters: {},
  positionalParamSegments: {}
};
function matchWithChecks(segmentGroup, route, segments, injector, urlSerializer) {
  const result = match(segmentGroup, route, segments);
  if (!result.matched) {
    return of(result);
  }
  injector = getOrCreateRouteInjectorIfNeeded(route, injector);
  return runCanMatchGuards(injector, route, segments, urlSerializer).pipe(map((v) => v === true ? result : __spreadValues({}, noMatch)));
}
function match(segmentGroup, route, segments) {
  if (route.path === "**") {
    return createWildcardMatchResult(segments);
  }
  if (route.path === "") {
    if (route.pathMatch === "full" && (segmentGroup.hasChildren() || segments.length > 0)) {
      return __spreadValues({}, noMatch);
    }
    return {
      matched: true,
      consumedSegments: [],
      remainingSegments: segments,
      parameters: {},
      positionalParamSegments: {}
    };
  }
  const matcher = route.matcher || defaultUrlMatcher;
  const res = matcher(segments, segmentGroup, route);
  if (!res) return __spreadValues({}, noMatch);
  const posParams = {};
  Object.entries(res.posParams ?? {}).forEach(([k, v]) => {
    posParams[k] = v.path;
  });
  const parameters = res.consumed.length > 0 ? __spreadValues(__spreadValues({}, posParams), res.consumed[res.consumed.length - 1].parameters) : posParams;
  return {
    matched: true,
    consumedSegments: res.consumed,
    remainingSegments: segments.slice(res.consumed.length),
    // TODO(atscott): investigate combining parameters and positionalParamSegments
    parameters,
    positionalParamSegments: res.posParams ?? {}
  };
}
function createWildcardMatchResult(segments) {
  return {
    matched: true,
    parameters: segments.length > 0 ? last2(segments).parameters : {},
    consumedSegments: segments,
    remainingSegments: [],
    positionalParamSegments: {}
  };
}
function split(segmentGroup, consumedSegments, slicedSegments, config) {
  if (slicedSegments.length > 0 && containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
    return {
      segmentGroup: s2,
      slicedSegments: []
    };
  }
  if (slicedSegments.length === 0 && containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
    return {
      segmentGroup: s2,
      slicedSegments
    };
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
  return {
    segmentGroup: s,
    slicedSegments
  };
}
function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
  const res = {};
  for (const r of routes) {
    if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return __spreadValues(__spreadValues({}, children), res);
}
function createChildrenForEmptyPaths(routes, primarySegment) {
  const res = {};
  res[PRIMARY_OUTLET] = primarySegment;
  for (const r of routes) {
    if (r.path === "" && getOutlet(r) !== PRIMARY_OUTLET) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return res;
}
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes) {
  return routes.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r) && getOutlet(r) !== PRIMARY_OUTLET);
}
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes) {
  return routes.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r));
}
function emptyPathMatch(segmentGroup, slicedSegments, r) {
  if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === "full") {
    return false;
  }
  return r.path === "";
}
function noLeftoversInUrl(segmentGroup, segments, outlet) {
  return segments.length === 0 && !segmentGroup.children[outlet];
}
var NoLeftoversInUrl = class {
};
function recognize$1(injector, configLoader, rootComponentType, config, urlTree, urlSerializer, paramsInheritanceStrategy = "emptyOnly") {
  return new Recognizer(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer).recognize();
}
var MAX_ALLOWED_REDIRECTS = 31;
var Recognizer = class {
  constructor(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer) {
    this.injector = injector;
    this.configLoader = configLoader;
    this.rootComponentType = rootComponentType;
    this.config = config;
    this.urlTree = urlTree;
    this.paramsInheritanceStrategy = paramsInheritanceStrategy;
    this.urlSerializer = urlSerializer;
    this.applyRedirects = new ApplyRedirects(this.urlSerializer, this.urlTree);
    this.absoluteRedirectCount = 0;
    this.allowRedirects = true;
  }
  noMatchError(e) {
    return new RuntimeError(4002, typeof ngDevMode === "undefined" || ngDevMode ? `Cannot match any routes. URL Segment: '${e.segmentGroup}'` : `'${e.segmentGroup}'`);
  }
  recognize() {
    const rootSegmentGroup = split(this.urlTree.root, [], [], this.config).segmentGroup;
    return this.match(rootSegmentGroup).pipe(map(({
      children,
      rootSnapshot
    }) => {
      const rootNode = new TreeNode(rootSnapshot, children);
      const routeState = new RouterStateSnapshot("", rootNode);
      const tree2 = createUrlTreeFromSnapshot(rootSnapshot, [], this.urlTree.queryParams, this.urlTree.fragment);
      tree2.queryParams = this.urlTree.queryParams;
      routeState.url = this.urlSerializer.serialize(tree2);
      return {
        state: routeState,
        tree: tree2
      };
    }));
  }
  match(rootSegmentGroup) {
    const rootSnapshot = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), PRIMARY_OUTLET, this.rootComponentType, null, {});
    return this.processSegmentGroup(this.injector, this.config, rootSegmentGroup, PRIMARY_OUTLET, rootSnapshot).pipe(map((children) => {
      return {
        children,
        rootSnapshot
      };
    }), catchError((e) => {
      if (e instanceof AbsoluteRedirect) {
        this.urlTree = e.urlTree;
        return this.match(e.urlTree.root);
      }
      if (e instanceof NoMatch) {
        throw this.noMatchError(e);
      }
      throw e;
    }));
  }
  processSegmentGroup(injector, config, segmentGroup, outlet, parentRoute) {
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
      return this.processChildren(injector, config, segmentGroup, parentRoute);
    }
    return this.processSegment(injector, config, segmentGroup, segmentGroup.segments, outlet, true, parentRoute).pipe(map((child) => child instanceof TreeNode ? [child] : []));
  }
  /**
   * Matches every child outlet in the `segmentGroup` to a `Route` in the config. Returns `null` if
   * we cannot find a match for _any_ of the children.
   *
   * @param config - The `Routes` to match against
   * @param segmentGroup - The `UrlSegmentGroup` whose children need to be matched against the
   *     config.
   */
  processChildren(injector, config, segmentGroup, parentRoute) {
    const childOutlets = [];
    for (const child of Object.keys(segmentGroup.children)) {
      if (child === "primary") {
        childOutlets.unshift(child);
      } else {
        childOutlets.push(child);
      }
    }
    return from(childOutlets).pipe(concatMap((childOutlet) => {
      const child = segmentGroup.children[childOutlet];
      const sortedConfig = sortByMatchingOutlets(config, childOutlet);
      return this.processSegmentGroup(injector, sortedConfig, child, childOutlet, parentRoute);
    }), scan((children, outletChildren) => {
      children.push(...outletChildren);
      return children;
    }), defaultIfEmpty(null), last(), mergeMap((children) => {
      if (children === null) return noMatch$1(segmentGroup);
      const mergedChildren = mergeEmptyPathMatches(children);
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        checkOutletNameUniqueness(mergedChildren);
      }
      sortActivatedRouteSnapshots(mergedChildren);
      return of(mergedChildren);
    }));
  }
  processSegment(injector, routes, segmentGroup, segments, outlet, allowRedirects, parentRoute) {
    return from(routes).pipe(concatMap((r) => {
      return this.processSegmentAgainstRoute(r._injector ?? injector, routes, r, segmentGroup, segments, outlet, allowRedirects, parentRoute).pipe(catchError((e) => {
        if (e instanceof NoMatch) {
          return of(null);
        }
        throw e;
      }));
    }), first((x) => !!x), catchError((e) => {
      if (isEmptyError(e)) {
        if (noLeftoversInUrl(segmentGroup, segments, outlet)) {
          return of(new NoLeftoversInUrl());
        }
        return noMatch$1(segmentGroup);
      }
      throw e;
    }));
  }
  processSegmentAgainstRoute(injector, routes, route, rawSegment, segments, outlet, allowRedirects, parentRoute) {
    if (getOutlet(route) !== outlet && (outlet === PRIMARY_OUTLET || !emptyPathMatch(rawSegment, segments, route))) {
      return noMatch$1(rawSegment);
    }
    if (route.redirectTo === void 0) {
      return this.matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet, parentRoute);
    }
    if (this.allowRedirects && allowRedirects) {
      return this.expandSegmentAgainstRouteUsingRedirect(injector, rawSegment, routes, route, segments, outlet, parentRoute);
    }
    return noMatch$1(rawSegment);
  }
  expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, segments, outlet, parentRoute) {
    const {
      matched,
      parameters,
      consumedSegments,
      positionalParamSegments,
      remainingSegments
    } = match(segmentGroup, route, segments);
    if (!matched) return noMatch$1(segmentGroup);
    if (typeof route.redirectTo === "string" && route.redirectTo[0] === "/") {
      this.absoluteRedirectCount++;
      if (this.absoluteRedirectCount > MAX_ALLOWED_REDIRECTS) {
        if (ngDevMode) {
          throw new RuntimeError(4016, `Detected possible infinite redirect when redirecting from '${this.urlTree}' to '${route.redirectTo}'.
This is currently a dev mode only error but will become a call stack size exceeded error in production in a future major version.`);
        }
        this.allowRedirects = false;
      }
    }
    const currentSnapshot = new ActivatedRouteSnapshot(segments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route));
    const inherited = getInherited(currentSnapshot, parentRoute, this.paramsInheritanceStrategy);
    currentSnapshot.params = Object.freeze(inherited.params);
    currentSnapshot.data = Object.freeze(inherited.data);
    const newTree = this.applyRedirects.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments, currentSnapshot, injector);
    return this.applyRedirects.lineralizeSegments(route, newTree).pipe(mergeMap((newSegments) => {
      return this.processSegment(injector, routes, segmentGroup, newSegments.concat(remainingSegments), outlet, false, parentRoute);
    }));
  }
  matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet, parentRoute) {
    const matchResult = matchWithChecks(rawSegment, route, segments, injector, this.urlSerializer);
    if (route.path === "**") {
      rawSegment.children = {};
    }
    return matchResult.pipe(switchMap((result) => {
      if (!result.matched) {
        return noMatch$1(rawSegment);
      }
      injector = route._injector ?? injector;
      return this.getChildConfig(injector, route, segments).pipe(switchMap(({
        routes: childConfig
      }) => {
        const childInjector = route._loadedInjector ?? injector;
        const {
          parameters,
          consumedSegments,
          remainingSegments
        } = result;
        const snapshot = new ActivatedRouteSnapshot(consumedSegments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route));
        const inherited = getInherited(snapshot, parentRoute, this.paramsInheritanceStrategy);
        snapshot.params = Object.freeze(inherited.params);
        snapshot.data = Object.freeze(inherited.data);
        const {
          segmentGroup,
          slicedSegments
        } = split(rawSegment, consumedSegments, remainingSegments, childConfig);
        if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
          return this.processChildren(childInjector, childConfig, segmentGroup, snapshot).pipe(map((children) => {
            return new TreeNode(snapshot, children);
          }));
        }
        if (childConfig.length === 0 && slicedSegments.length === 0) {
          return of(new TreeNode(snapshot, []));
        }
        const matchedOnOutlet = getOutlet(route) === outlet;
        return this.processSegment(childInjector, childConfig, segmentGroup, slicedSegments, matchedOnOutlet ? PRIMARY_OUTLET : outlet, true, snapshot).pipe(map((child) => {
          return new TreeNode(snapshot, child instanceof TreeNode ? [child] : []);
        }));
      }));
    }));
  }
  getChildConfig(injector, route, segments) {
    if (route.children) {
      return of({
        routes: route.children,
        injector
      });
    }
    if (route.loadChildren) {
      if (route._loadedRoutes !== void 0) {
        return of({
          routes: route._loadedRoutes,
          injector: route._loadedInjector
        });
      }
      return runCanLoadGuards(injector, route, segments, this.urlSerializer).pipe(mergeMap((shouldLoadResult) => {
        if (shouldLoadResult) {
          return this.configLoader.loadChildren(injector, route).pipe(tap((cfg) => {
            route._loadedRoutes = cfg.routes;
            route._loadedInjector = cfg.injector;
          }));
        }
        return canLoadFails(route);
      }));
    }
    return of({
      routes: [],
      injector
    });
  }
};
function sortActivatedRouteSnapshots(nodes) {
  nodes.sort((a, b) => {
    if (a.value.outlet === PRIMARY_OUTLET) return -1;
    if (b.value.outlet === PRIMARY_OUTLET) return 1;
    return a.value.outlet.localeCompare(b.value.outlet);
  });
}
function hasEmptyPathConfig(node) {
  const config = node.value.routeConfig;
  return config && config.path === "";
}
function mergeEmptyPathMatches(nodes) {
  const result = [];
  const mergedNodes = /* @__PURE__ */ new Set();
  for (const node of nodes) {
    if (!hasEmptyPathConfig(node)) {
      result.push(node);
      continue;
    }
    const duplicateEmptyPathNode = result.find((resultNode) => node.value.routeConfig === resultNode.value.routeConfig);
    if (duplicateEmptyPathNode !== void 0) {
      duplicateEmptyPathNode.children.push(...node.children);
      mergedNodes.add(duplicateEmptyPathNode);
    } else {
      result.push(node);
    }
  }
  for (const mergedNode of mergedNodes) {
    const mergedChildren = mergeEmptyPathMatches(mergedNode.children);
    result.push(new TreeNode(mergedNode.value, mergedChildren));
  }
  return result.filter((n) => !mergedNodes.has(n));
}
function checkOutletNameUniqueness(nodes) {
  const names = {};
  nodes.forEach((n) => {
    const routeWithSameOutletName = names[n.value.outlet];
    if (routeWithSameOutletName) {
      const p = routeWithSameOutletName.url.map((s) => s.toString()).join("/");
      const c = n.value.url.map((s) => s.toString()).join("/");
      throw new RuntimeError(4006, (typeof ngDevMode === "undefined" || ngDevMode) && `Two segments cannot have the same outlet name: '${p}' and '${c}'.`);
    }
    names[n.value.outlet] = n.value;
  });
}
function getData(route) {
  return route.data || {};
}
function getResolve(route) {
  return route.resolve || {};
}
function recognize(injector, configLoader, rootComponentType, config, serializer, paramsInheritanceStrategy) {
  return mergeMap((t) => recognize$1(injector, configLoader, rootComponentType, config, t.extractedUrl, serializer, paramsInheritanceStrategy).pipe(map(({
    state: targetSnapshot,
    tree: urlAfterRedirects
  }) => {
    return __spreadProps(__spreadValues({}, t), {
      targetSnapshot,
      urlAfterRedirects
    });
  })));
}
function resolveData(paramsInheritanceStrategy, injector) {
  return mergeMap((t) => {
    const {
      targetSnapshot,
      guards: {
        canActivateChecks
      }
    } = t;
    if (!canActivateChecks.length) {
      return of(t);
    }
    const routesWithResolversToRun = new Set(canActivateChecks.map((check) => check.route));
    const routesNeedingDataUpdates = /* @__PURE__ */ new Set();
    for (const route of routesWithResolversToRun) {
      if (routesNeedingDataUpdates.has(route)) {
        continue;
      }
      for (const newRoute of flattenRouteTree(route)) {
        routesNeedingDataUpdates.add(newRoute);
      }
    }
    let routesProcessed = 0;
    return from(routesNeedingDataUpdates).pipe(concatMap((route) => {
      if (routesWithResolversToRun.has(route)) {
        return runResolve(route, targetSnapshot, paramsInheritanceStrategy, injector);
      } else {
        route.data = getInherited(route, route.parent, paramsInheritanceStrategy).resolve;
        return of(void 0);
      }
    }), tap(() => routesProcessed++), takeLast(1), mergeMap((_) => routesProcessed === routesNeedingDataUpdates.size ? of(t) : EMPTY));
  });
}
function flattenRouteTree(route) {
  const descendants = route.children.map((child) => flattenRouteTree(child)).flat();
  return [route, ...descendants];
}
function runResolve(futureARS, futureRSS, paramsInheritanceStrategy, injector) {
  const config = futureARS.routeConfig;
  const resolve = futureARS._resolve;
  if (config?.title !== void 0 && !hasStaticTitle(config)) {
    resolve[RouteTitleKey] = config.title;
  }
  return resolveNode(resolve, futureARS, futureRSS, injector).pipe(map((resolvedData) => {
    futureARS._resolvedData = resolvedData;
    futureARS.data = getInherited(futureARS, futureARS.parent, paramsInheritanceStrategy).resolve;
    return null;
  }));
}
function resolveNode(resolve, futureARS, futureRSS, injector) {
  const keys = getDataKeys(resolve);
  if (keys.length === 0) {
    return of({});
  }
  const data = {};
  return from(keys).pipe(mergeMap((key) => getResolver(resolve[key], futureARS, futureRSS, injector).pipe(first(), tap((value) => {
    if (value instanceof RedirectCommand) {
      throw redirectingNavigationError(new DefaultUrlSerializer(), value);
    }
    data[key] = value;
  }))), takeLast(1), mapTo(data), catchError((e) => isEmptyError(e) ? EMPTY : throwError(e)));
}
function getResolver(injectionToken, futureARS, futureRSS, injector) {
  const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
  const resolver = getTokenOrFunctionIdentity(injectionToken, closestInjector);
  const resolverValue = resolver.resolve ? resolver.resolve(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => resolver(futureARS, futureRSS));
  return wrapIntoObservable(resolverValue);
}
function switchTap(next) {
  return switchMap((v) => {
    const nextResult = next(v);
    if (nextResult) {
      return from(nextResult).pipe(map(() => v));
    }
    return of(v);
  });
}
var TitleStrategy = class _TitleStrategy {
  /**
   * @returns The `title` of the deepest primary route.
   */
  buildTitle(snapshot) {
    let pageTitle;
    let route = snapshot.root;
    while (route !== void 0) {
      pageTitle = this.getResolvedTitleForRoute(route) ?? pageTitle;
      route = route.children.find((child) => child.outlet === PRIMARY_OUTLET);
    }
    return pageTitle;
  }
  /**
   * Given an `ActivatedRouteSnapshot`, returns the final value of the
   * `Route.title` property, which can either be a static string or a resolved value.
   */
  getResolvedTitleForRoute(snapshot) {
    return snapshot.data[RouteTitleKey];
  }
  static {
    this.\u0275fac = function TitleStrategy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TitleStrategy)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _TitleStrategy,
      factory: () => (() => inject(DefaultTitleStrategy))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultTitleStrategy)
    }]
  }], null, null);
})();
var DefaultTitleStrategy = class _DefaultTitleStrategy extends TitleStrategy {
  constructor(title) {
    super();
    this.title = title;
  }
  /**
   * Sets the title of the browser to the given value.
   *
   * @param title The `pageTitle` from the deepest primary route.
   */
  updateTitle(snapshot) {
    const title = this.buildTitle(snapshot);
    if (title !== void 0) {
      this.title.setTitle(title);
    }
  }
  static {
    this.\u0275fac = function DefaultTitleStrategy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultTitleStrategy)(\u0275\u0275inject(Title));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DefaultTitleStrategy,
      factory: _DefaultTitleStrategy.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultTitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Title
  }], null);
})();
var ROUTER_CONFIGURATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router config" : "", {
  providedIn: "root",
  factory: () => ({})
});
var \u0275EmptyOutletComponent = class _\u0275EmptyOutletComponent {
  static {
    this.\u0275fac = function \u0275EmptyOutletComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _\u0275EmptyOutletComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _\u0275EmptyOutletComponent,
      selectors: [["ng-component"]],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 1,
      vars: 0,
      template: function _EmptyOutletComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275element(0, "router-outlet");
        }
      },
      dependencies: [RouterOutlet],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275EmptyOutletComponent, [{
    type: Component,
    args: [{
      template: `<router-outlet></router-outlet>`,
      imports: [RouterOutlet],
      standalone: true
    }]
  }], null, null);
})();
function standardizeConfig(r) {
  const children = r.children && r.children.map(standardizeConfig);
  const c = children ? __spreadProps(__spreadValues({}, r), {
    children
  }) : __spreadValues({}, r);
  if (!c.component && !c.loadComponent && (children || c.loadChildren) && c.outlet && c.outlet !== PRIMARY_OUTLET) {
    c.component = \u0275EmptyOutletComponent;
  }
  return c;
}
var ROUTES = new InjectionToken(ngDevMode ? "ROUTES" : "");
var RouterConfigLoader = class _RouterConfigLoader {
  constructor() {
    this.componentLoaders = /* @__PURE__ */ new WeakMap();
    this.childrenLoaders = /* @__PURE__ */ new WeakMap();
    this.compiler = inject(Compiler);
  }
  loadComponent(route) {
    if (this.componentLoaders.get(route)) {
      return this.componentLoaders.get(route);
    } else if (route._loadedComponent) {
      return of(route._loadedComponent);
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const loadRunner = wrapIntoObservable(route.loadComponent()).pipe(map(maybeUnwrapDefaultExport), tap((component) => {
      if (this.onLoadEndListener) {
        this.onLoadEndListener(route);
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && assertStandalone(route.path ?? "", component);
      route._loadedComponent = component;
    }), finalize(() => {
      this.componentLoaders.delete(route);
    }));
    const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
    this.componentLoaders.set(route, loader);
    return loader;
  }
  loadChildren(parentInjector, route) {
    if (this.childrenLoaders.get(route)) {
      return this.childrenLoaders.get(route);
    } else if (route._loadedRoutes) {
      return of({
        routes: route._loadedRoutes,
        injector: route._loadedInjector
      });
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const moduleFactoryOrRoutes$ = loadChildren(route, this.compiler, parentInjector, this.onLoadEndListener);
    const loadRunner = moduleFactoryOrRoutes$.pipe(finalize(() => {
      this.childrenLoaders.delete(route);
    }));
    const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
    this.childrenLoaders.set(route, loader);
    return loader;
  }
  static {
    this.\u0275fac = function RouterConfigLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RouterConfigLoader)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _RouterConfigLoader,
      factory: _RouterConfigLoader.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterConfigLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function loadChildren(route, compiler, parentInjector, onLoadEndListener) {
  return wrapIntoObservable(route.loadChildren()).pipe(map(maybeUnwrapDefaultExport), mergeMap((t) => {
    if (t instanceof NgModuleFactory$1 || Array.isArray(t)) {
      return of(t);
    } else {
      return from(compiler.compileModuleAsync(t));
    }
  }), map((factoryOrRoutes) => {
    if (onLoadEndListener) {
      onLoadEndListener(route);
    }
    let injector;
    let rawRoutes;
    let requireStandaloneComponents = false;
    if (Array.isArray(factoryOrRoutes)) {
      rawRoutes = factoryOrRoutes;
      requireStandaloneComponents = true;
    } else {
      injector = factoryOrRoutes.create(parentInjector).injector;
      rawRoutes = injector.get(ROUTES, [], {
        optional: true,
        self: true
      }).flat();
    }
    const routes = rawRoutes.map(standardizeConfig);
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(routes, route.path, requireStandaloneComponents);
    return {
      routes,
      injector
    };
  }));
}
function isWrappedDefaultExport(value) {
  return value && typeof value === "object" && "default" in value;
}
function maybeUnwrapDefaultExport(input) {
  return isWrappedDefaultExport(input) ? input["default"] : input;
}
var UrlHandlingStrategy = class _UrlHandlingStrategy {
  static {
    this.\u0275fac = function UrlHandlingStrategy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UrlHandlingStrategy)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _UrlHandlingStrategy,
      factory: () => (() => inject(DefaultUrlHandlingStrategy))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultUrlHandlingStrategy)
    }]
  }], null, null);
})();
var DefaultUrlHandlingStrategy = class _DefaultUrlHandlingStrategy {
  shouldProcessUrl(url) {
    return true;
  }
  extract(url) {
    return url;
  }
  merge(newUrlPart, wholeUrl) {
    return newUrlPart;
  }
  static {
    this.\u0275fac = function DefaultUrlHandlingStrategy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultUrlHandlingStrategy)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DefaultUrlHandlingStrategy,
      factory: _DefaultUrlHandlingStrategy.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultUrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CREATE_VIEW_TRANSITION = new InjectionToken(ngDevMode ? "view transition helper" : "");
var VIEW_TRANSITION_OPTIONS = new InjectionToken(ngDevMode ? "view transition options" : "");
function createViewTransition(injector, from2, to) {
  const transitionOptions = injector.get(VIEW_TRANSITION_OPTIONS);
  const document2 = injector.get(DOCUMENT);
  return injector.get(NgZone).runOutsideAngular(() => {
    if (!document2.startViewTransition || transitionOptions.skipNextTransition) {
      transitionOptions.skipNextTransition = false;
      return new Promise((resolve) => setTimeout(resolve));
    }
    let resolveViewTransitionStarted;
    const viewTransitionStarted = new Promise((resolve) => {
      resolveViewTransitionStarted = resolve;
    });
    const transition = document2.startViewTransition(() => {
      resolveViewTransitionStarted();
      return createRenderPromise(injector);
    });
    const {
      onViewTransitionCreated
    } = transitionOptions;
    if (onViewTransitionCreated) {
      runInInjectionContext(injector, () => onViewTransitionCreated({
        transition,
        from: from2,
        to
      }));
    }
    return viewTransitionStarted;
  });
}
function createRenderPromise(injector) {
  return new Promise((resolve) => {
    afterNextRender({
      read: () => setTimeout(resolve)
    }, {
      injector
    });
  });
}
var NAVIGATION_ERROR_HANDLER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "navigation error handler" : "");
var NavigationTransitions = class _NavigationTransitions {
  get hasRequestedNavigation() {
    return this.navigationId !== 0;
  }
  constructor() {
    this.currentNavigation = null;
    this.currentTransition = null;
    this.lastSuccessfulNavigation = null;
    this.events = new Subject();
    this.transitionAbortSubject = new Subject();
    this.configLoader = inject(RouterConfigLoader);
    this.environmentInjector = inject(EnvironmentInjector);
    this.urlSerializer = inject(UrlSerializer);
    this.rootContexts = inject(ChildrenOutletContexts);
    this.location = inject(Location);
    this.inputBindingEnabled = inject(INPUT_BINDER, {
      optional: true
    }) !== null;
    this.titleStrategy = inject(TitleStrategy);
    this.options = inject(ROUTER_CONFIGURATION, {
      optional: true
    }) || {};
    this.paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
    this.urlHandlingStrategy = inject(UrlHandlingStrategy);
    this.createViewTransition = inject(CREATE_VIEW_TRANSITION, {
      optional: true
    });
    this.navigationErrorHandler = inject(NAVIGATION_ERROR_HANDLER, {
      optional: true
    });
    this.navigationId = 0;
    this.afterPreactivation = () => of(void 0);
    this.rootComponentType = null;
    const onLoadStart = (r) => this.events.next(new RouteConfigLoadStart(r));
    const onLoadEnd = (r) => this.events.next(new RouteConfigLoadEnd(r));
    this.configLoader.onLoadEndListener = onLoadEnd;
    this.configLoader.onLoadStartListener = onLoadStart;
  }
  complete() {
    this.transitions?.complete();
  }
  handleNavigationRequest(request) {
    const id = ++this.navigationId;
    this.transitions?.next(__spreadProps(__spreadValues(__spreadValues({}, this.transitions.value), request), {
      id
    }));
  }
  setupNavigations(router, initialUrlTree, initialRouterState) {
    this.transitions = new BehaviorSubject({
      id: 0,
      currentUrlTree: initialUrlTree,
      currentRawUrl: initialUrlTree,
      extractedUrl: this.urlHandlingStrategy.extract(initialUrlTree),
      urlAfterRedirects: this.urlHandlingStrategy.extract(initialUrlTree),
      rawUrl: initialUrlTree,
      extras: {},
      resolve: () => {
      },
      reject: () => {
      },
      promise: Promise.resolve(true),
      source: IMPERATIVE_NAVIGATION,
      restoredState: null,
      currentSnapshot: initialRouterState.snapshot,
      targetSnapshot: null,
      currentRouterState: initialRouterState,
      targetRouterState: null,
      guards: {
        canActivateChecks: [],
        canDeactivateChecks: []
      },
      guardsResult: null
    });
    return this.transitions.pipe(
      filter((t) => t.id !== 0),
      // Extract URL
      map((t) => __spreadProps(__spreadValues({}, t), {
        extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl)
      })),
      // Using switchMap so we cancel executing navigations when a new one comes in
      switchMap((overallTransitionState) => {
        let completed = false;
        let errored = false;
        return of(overallTransitionState).pipe(
          switchMap((t) => {
            if (this.navigationId > overallTransitionState.id) {
              const cancellationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
              this.cancelNavigationTransition(overallTransitionState, cancellationReason, NavigationCancellationCode.SupersededByNewNavigation);
              return EMPTY;
            }
            this.currentTransition = overallTransitionState;
            this.currentNavigation = {
              id: t.id,
              initialUrl: t.rawUrl,
              extractedUrl: t.extractedUrl,
              targetBrowserUrl: typeof t.extras.browserUrl === "string" ? this.urlSerializer.parse(t.extras.browserUrl) : t.extras.browserUrl,
              trigger: t.source,
              extras: t.extras,
              previousNavigation: !this.lastSuccessfulNavigation ? null : __spreadProps(__spreadValues({}, this.lastSuccessfulNavigation), {
                previousNavigation: null
              })
            };
            const urlTransition = !router.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl();
            const onSameUrlNavigation = t.extras.onSameUrlNavigation ?? router.onSameUrlNavigation;
            if (!urlTransition && onSameUrlNavigation !== "reload") {
              const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation to ${t.rawUrl} was ignored because it is the same as the current Router URL.` : "";
              this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.rawUrl), reason, NavigationSkippedCode.IgnoredSameUrlNavigation));
              t.resolve(false);
              return EMPTY;
            }
            if (this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) {
              return of(t).pipe(
                // Fire NavigationStart event
                switchMap((t2) => {
                  const transition = this.transitions?.getValue();
                  this.events.next(new NavigationStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), t2.source, t2.restoredState));
                  if (transition !== this.transitions?.getValue()) {
                    return EMPTY;
                  }
                  return Promise.resolve(t2);
                }),
                // Recognize
                recognize(this.environmentInjector, this.configLoader, this.rootComponentType, router.config, this.urlSerializer, this.paramsInheritanceStrategy),
                // Update URL if in `eager` update mode
                tap((t2) => {
                  overallTransitionState.targetSnapshot = t2.targetSnapshot;
                  overallTransitionState.urlAfterRedirects = t2.urlAfterRedirects;
                  this.currentNavigation = __spreadProps(__spreadValues({}, this.currentNavigation), {
                    finalUrl: t2.urlAfterRedirects
                  });
                  const routesRecognized = new RoutesRecognized(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                  this.events.next(routesRecognized);
                })
              );
            } else if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(t.currentRawUrl)) {
              const {
                id,
                extractedUrl,
                source,
                restoredState,
                extras
              } = t;
              const navStart = new NavigationStart(id, this.urlSerializer.serialize(extractedUrl), source, restoredState);
              this.events.next(navStart);
              const targetSnapshot = createEmptyState(this.rootComponentType).snapshot;
              this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
                targetSnapshot,
                urlAfterRedirects: extractedUrl,
                extras: __spreadProps(__spreadValues({}, extras), {
                  skipLocationChange: false,
                  replaceUrl: false
                })
              });
              this.currentNavigation.finalUrl = extractedUrl;
              return of(overallTransitionState);
            } else {
              const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation was ignored because the UrlHandlingStrategy indicated neither the current URL ${t.currentRawUrl} nor target URL ${t.rawUrl} should be processed.` : "";
              this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, NavigationSkippedCode.IgnoredByUrlHandlingStrategy));
              t.resolve(false);
              return EMPTY;
            }
          }),
          // --- GUARDS ---
          tap((t) => {
            const guardsStart = new GuardsCheckStart(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
            this.events.next(guardsStart);
          }),
          map((t) => {
            this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
              guards: getAllRouteGuards(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
            });
            return overallTransitionState;
          }),
          checkGuards(this.environmentInjector, (evt) => this.events.next(evt)),
          tap((t) => {
            overallTransitionState.guardsResult = t.guardsResult;
            if (t.guardsResult && typeof t.guardsResult !== "boolean") {
              throw redirectingNavigationError(this.urlSerializer, t.guardsResult);
            }
            const guardsEnd = new GuardsCheckEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
            this.events.next(guardsEnd);
          }),
          filter((t) => {
            if (!t.guardsResult) {
              this.cancelNavigationTransition(t, "", NavigationCancellationCode.GuardRejected);
              return false;
            }
            return true;
          }),
          // --- RESOLVE ---
          switchTap((t) => {
            if (t.guards.canActivateChecks.length) {
              return of(t).pipe(tap((t2) => {
                const resolveStart = new ResolveStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                this.events.next(resolveStart);
              }), switchMap((t2) => {
                let dataResolved = false;
                return of(t2).pipe(resolveData(this.paramsInheritanceStrategy, this.environmentInjector), tap({
                  next: () => dataResolved = true,
                  complete: () => {
                    if (!dataResolved) {
                      this.cancelNavigationTransition(t2, typeof ngDevMode === "undefined" || ngDevMode ? `At least one route resolver didn't emit any value.` : "", NavigationCancellationCode.NoDataFromResolver);
                    }
                  }
                }));
              }), tap((t2) => {
                const resolveEnd = new ResolveEnd(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                this.events.next(resolveEnd);
              }));
            }
            return void 0;
          }),
          // --- LOAD COMPONENTS ---
          switchTap((t) => {
            const loadComponents = (route) => {
              const loaders = [];
              if (route.routeConfig?.loadComponent && !route.routeConfig._loadedComponent) {
                loaders.push(this.configLoader.loadComponent(route.routeConfig).pipe(tap((loadedComponent) => {
                  route.component = loadedComponent;
                }), map(() => void 0)));
              }
              for (const child of route.children) {
                loaders.push(...loadComponents(child));
              }
              return loaders;
            };
            return combineLatest(loadComponents(t.targetSnapshot.root)).pipe(defaultIfEmpty(null), take(1));
          }),
          switchTap(() => this.afterPreactivation()),
          switchMap(() => {
            const {
              currentSnapshot,
              targetSnapshot
            } = overallTransitionState;
            const viewTransitionStarted = this.createViewTransition?.(this.environmentInjector, currentSnapshot.root, targetSnapshot.root);
            return viewTransitionStarted ? from(viewTransitionStarted).pipe(map(() => overallTransitionState)) : of(overallTransitionState);
          }),
          map((t) => {
            const targetRouterState = createRouterState(router.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
            this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
              targetRouterState
            });
            this.currentNavigation.targetRouterState = targetRouterState;
            return overallTransitionState;
          }),
          tap(() => {
            this.events.next(new BeforeActivateRoutes());
          }),
          activateRoutes(this.rootContexts, router.routeReuseStrategy, (evt) => this.events.next(evt), this.inputBindingEnabled),
          // Ensure that if some observable used to drive the transition doesn't
          // complete, the navigation still finalizes This should never happen, but
          // this is done as a safety measure to avoid surfacing this error (#49567).
          take(1),
          tap({
            next: (t) => {
              completed = true;
              this.lastSuccessfulNavigation = this.currentNavigation;
              this.events.next(new NavigationEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects)));
              this.titleStrategy?.updateTitle(t.targetRouterState.snapshot);
              t.resolve(true);
            },
            complete: () => {
              completed = true;
            }
          }),
          // There used to be a lot more logic happening directly within the
          // transition Observable. Some of this logic has been refactored out to
          // other places but there may still be errors that happen there. This gives
          // us a way to cancel the transition from the outside. This may also be
          // required in the future to support something like the abort signal of the
          // Navigation API where the navigation gets aborted from outside the
          // transition.
          takeUntil(this.transitionAbortSubject.pipe(tap((err) => {
            throw err;
          }))),
          finalize(() => {
            if (!completed && !errored) {
              const cancelationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
              this.cancelNavigationTransition(overallTransitionState, cancelationReason, NavigationCancellationCode.SupersededByNewNavigation);
            }
            if (this.currentTransition?.id === overallTransitionState.id) {
              this.currentNavigation = null;
              this.currentTransition = null;
            }
          }),
          catchError((e) => {
            errored = true;
            if (isNavigationCancelingError(e)) {
              this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e.message, e.cancellationCode));
              if (!isRedirectingNavigationCancelingError(e)) {
                overallTransitionState.resolve(false);
              } else {
                this.events.next(new RedirectRequest(e.url, e.navigationBehaviorOptions));
              }
            } else {
              const navigationError = new NavigationError(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e, overallTransitionState.targetSnapshot ?? void 0);
              try {
                const navigationErrorHandlerResult = runInInjectionContext(this.environmentInjector, () => this.navigationErrorHandler?.(navigationError));
                if (navigationErrorHandlerResult instanceof RedirectCommand) {
                  const {
                    message,
                    cancellationCode
                  } = redirectingNavigationError(this.urlSerializer, navigationErrorHandlerResult);
                  this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), message, cancellationCode));
                  this.events.next(new RedirectRequest(navigationErrorHandlerResult.redirectTo, navigationErrorHandlerResult.navigationBehaviorOptions));
                } else {
                  this.events.next(navigationError);
                  const errorHandlerResult = router.errorHandler(e);
                  overallTransitionState.resolve(!!errorHandlerResult);
                }
              } catch (ee) {
                if (this.options.resolveNavigationPromiseOnError) {
                  overallTransitionState.resolve(false);
                } else {
                  overallTransitionState.reject(ee);
                }
              }
            }
            return EMPTY;
          })
        );
      })
    );
  }
  cancelNavigationTransition(t, reason, code) {
    const navCancel = new NavigationCancel(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, code);
    this.events.next(navCancel);
    t.resolve(false);
  }
  /**
   * @returns Whether we're navigating to somewhere that is not what the Router is
   * currently set to.
   */
  isUpdatingInternalState() {
    return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString();
  }
  /**
   * @returns Whether we're updating the browser URL to something new (navigation is going
   * to somewhere not displayed in the URL bar and we will update the URL
   * bar if navigation succeeds).
   */
  isUpdatedBrowserUrl() {
    const currentBrowserUrl = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(true)));
    const targetBrowserUrl = this.currentNavigation?.targetBrowserUrl ?? this.currentNavigation?.extractedUrl;
    return currentBrowserUrl.toString() !== targetBrowserUrl?.toString() && !this.currentNavigation?.extras.skipLocationChange;
  }
  static {
    this.\u0275fac = function NavigationTransitions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavigationTransitions)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NavigationTransitions,
      factory: _NavigationTransitions.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationTransitions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function isBrowserTriggeredNavigation(source) {
  return source !== IMPERATIVE_NAVIGATION;
}
var RouteReuseStrategy = class _RouteReuseStrategy {
  static {
    this.\u0275fac = function RouteReuseStrategy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RouteReuseStrategy)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _RouteReuseStrategy,
      factory: () => (() => inject(DefaultRouteReuseStrategy))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultRouteReuseStrategy)
    }]
  }], null, null);
})();
var BaseRouteReuseStrategy = class {
  /**
   * Whether the given route should detach for later reuse.
   * Always returns false for `BaseRouteReuseStrategy`.
   * */
  shouldDetach(route) {
    return false;
  }
  /**
   * A no-op; the route is never stored since this strategy never detaches routes for later re-use.
   */
  store(route, detachedTree) {
  }
  /** Returns `false`, meaning the route (and its subtree) is never reattached */
  shouldAttach(route) {
    return false;
  }
  /** Returns `null` because this strategy does not store routes for later re-use. */
  retrieve(route) {
    return null;
  }
  /**
   * Determines if a route should be reused.
   * This strategy returns `true` when the future route config and current route config are
   * identical.
   */
  shouldReuseRoute(future, curr) {
    return future.routeConfig === curr.routeConfig;
  }
};
var DefaultRouteReuseStrategy = class _DefaultRouteReuseStrategy extends BaseRouteReuseStrategy {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275DefaultRouteReuseStrategy_BaseFactory;
      return function DefaultRouteReuseStrategy_Factory(__ngFactoryType__) {
        return (\u0275DefaultRouteReuseStrategy_BaseFactory || (\u0275DefaultRouteReuseStrategy_BaseFactory = \u0275\u0275getInheritedFactory(_DefaultRouteReuseStrategy)))(__ngFactoryType__ || _DefaultRouteReuseStrategy);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DefaultRouteReuseStrategy,
      factory: _DefaultRouteReuseStrategy.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultRouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var StateManager = class _StateManager {
  static {
    this.\u0275fac = function StateManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StateManager)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _StateManager,
      factory: () => (() => inject(HistoryStateManager))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(HistoryStateManager)
    }]
  }], null, null);
})();
var HistoryStateManager = class _HistoryStateManager extends StateManager {
  constructor() {
    super(...arguments);
    this.location = inject(Location);
    this.urlSerializer = inject(UrlSerializer);
    this.options = inject(ROUTER_CONFIGURATION, {
      optional: true
    }) || {};
    this.canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
    this.urlHandlingStrategy = inject(UrlHandlingStrategy);
    this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    this.currentUrlTree = new UrlTree();
    this.rawUrlTree = this.currentUrlTree;
    this.currentPageId = 0;
    this.lastSuccessfulId = -1;
    this.routerState = createEmptyState(null);
    this.stateMemento = this.createStateMemento();
  }
  getCurrentUrlTree() {
    return this.currentUrlTree;
  }
  getRawUrlTree() {
    return this.rawUrlTree;
  }
  restoredState() {
    return this.location.getState();
  }
  /**
   * The ɵrouterPageId of whatever page is currently active in the browser history. This is
   * important for computing the target page id for new navigations because we need to ensure each
   * page id in the browser history is 1 more than the previous entry.
   */
  get browserPageId() {
    if (this.canceledNavigationResolution !== "computed") {
      return this.currentPageId;
    }
    return this.restoredState()?.\u0275routerPageId ?? this.currentPageId;
  }
  getRouterState() {
    return this.routerState;
  }
  createStateMemento() {
    return {
      rawUrlTree: this.rawUrlTree,
      currentUrlTree: this.currentUrlTree,
      routerState: this.routerState
    };
  }
  registerNonRouterCurrentEntryChangeListener(listener) {
    return this.location.subscribe((event) => {
      if (event["type"] === "popstate") {
        listener(event["url"], event.state);
      }
    });
  }
  handleRouterEvent(e, currentTransition) {
    if (e instanceof NavigationStart) {
      this.stateMemento = this.createStateMemento();
    } else if (e instanceof NavigationSkipped) {
      this.rawUrlTree = currentTransition.initialUrl;
    } else if (e instanceof RoutesRecognized) {
      if (this.urlUpdateStrategy === "eager") {
        if (!currentTransition.extras.skipLocationChange) {
          const rawUrl = this.urlHandlingStrategy.merge(currentTransition.finalUrl, currentTransition.initialUrl);
          this.setBrowserUrl(currentTransition.targetBrowserUrl ?? rawUrl, currentTransition);
        }
      }
    } else if (e instanceof BeforeActivateRoutes) {
      this.currentUrlTree = currentTransition.finalUrl;
      this.rawUrlTree = this.urlHandlingStrategy.merge(currentTransition.finalUrl, currentTransition.initialUrl);
      this.routerState = currentTransition.targetRouterState;
      if (this.urlUpdateStrategy === "deferred" && !currentTransition.extras.skipLocationChange) {
        this.setBrowserUrl(currentTransition.targetBrowserUrl ?? this.rawUrlTree, currentTransition);
      }
    } else if (e instanceof NavigationCancel && (e.code === NavigationCancellationCode.GuardRejected || e.code === NavigationCancellationCode.NoDataFromResolver)) {
      this.restoreHistory(currentTransition);
    } else if (e instanceof NavigationError) {
      this.restoreHistory(currentTransition, true);
    } else if (e instanceof NavigationEnd) {
      this.lastSuccessfulId = e.id;
      this.currentPageId = this.browserPageId;
    }
  }
  setBrowserUrl(url, transition) {
    const path = url instanceof UrlTree ? this.urlSerializer.serialize(url) : url;
    if (this.location.isCurrentPathEqualTo(path) || !!transition.extras.replaceUrl) {
      const currentBrowserPageId = this.browserPageId;
      const state = __spreadValues(__spreadValues({}, transition.extras.state), this.generateNgRouterState(transition.id, currentBrowserPageId));
      this.location.replaceState(path, "", state);
    } else {
      const state = __spreadValues(__spreadValues({}, transition.extras.state), this.generateNgRouterState(transition.id, this.browserPageId + 1));
      this.location.go(path, "", state);
    }
  }
  /**
   * Performs the necessary rollback action to restore the browser URL to the
   * state before the transition.
   */
  restoreHistory(navigation, restoringFromCaughtError = false) {
    if (this.canceledNavigationResolution === "computed") {
      const currentBrowserPageId = this.browserPageId;
      const targetPagePosition = this.currentPageId - currentBrowserPageId;
      if (targetPagePosition !== 0) {
        this.location.historyGo(targetPagePosition);
      } else if (this.currentUrlTree === navigation.finalUrl && targetPagePosition === 0) {
        this.resetState(navigation);
        this.resetUrlToCurrentUrlTree();
      } else {
      }
    } else if (this.canceledNavigationResolution === "replace") {
      if (restoringFromCaughtError) {
        this.resetState(navigation);
      }
      this.resetUrlToCurrentUrlTree();
    }
  }
  resetState(navigation) {
    this.routerState = this.stateMemento.routerState;
    this.currentUrlTree = this.stateMemento.currentUrlTree;
    this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, navigation.finalUrl ?? this.rawUrlTree);
  }
  resetUrlToCurrentUrlTree() {
    this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId));
  }
  generateNgRouterState(navigationId, routerPageId) {
    if (this.canceledNavigationResolution === "computed") {
      return {
        navigationId,
        \u0275routerPageId: routerPageId
      };
    }
    return {
      navigationId
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HistoryStateManager_BaseFactory;
      return function HistoryStateManager_Factory(__ngFactoryType__) {
        return (\u0275HistoryStateManager_BaseFactory || (\u0275HistoryStateManager_BaseFactory = \u0275\u0275getInheritedFactory(_HistoryStateManager)))(__ngFactoryType__ || _HistoryStateManager);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _HistoryStateManager,
      factory: _HistoryStateManager.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryStateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NavigationResult;
(function(NavigationResult2) {
  NavigationResult2[NavigationResult2["COMPLETE"] = 0] = "COMPLETE";
  NavigationResult2[NavigationResult2["FAILED"] = 1] = "FAILED";
  NavigationResult2[NavigationResult2["REDIRECTING"] = 2] = "REDIRECTING";
})(NavigationResult || (NavigationResult = {}));
function afterNextNavigation(router, action) {
  router.events.pipe(filter((e) => e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError || e instanceof NavigationSkipped), map((e) => {
    if (e instanceof NavigationEnd || e instanceof NavigationSkipped) {
      return NavigationResult.COMPLETE;
    }
    const redirecting = e instanceof NavigationCancel ? e.code === NavigationCancellationCode.Redirect || e.code === NavigationCancellationCode.SupersededByNewNavigation : false;
    return redirecting ? NavigationResult.REDIRECTING : NavigationResult.FAILED;
  }), filter((result) => result !== NavigationResult.REDIRECTING), take(1)).subscribe(() => {
    action();
  });
}
function defaultErrorHandler(error) {
  throw error;
}
var exactMatchOptions = {
  paths: "exact",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "exact"
};
var subsetMatchOptions = {
  paths: "subset",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "subset"
};
var Router = class _Router {
  get currentUrlTree() {
    return this.stateManager.getCurrentUrlTree();
  }
  get rawUrlTree() {
    return this.stateManager.getRawUrlTree();
  }
  /**
   * An event stream for routing events.
   */
  get events() {
    return this._events;
  }
  /**
   * The current state of routing in this NgModule.
   */
  get routerState() {
    return this.stateManager.getRouterState();
  }
  constructor() {
    this.disposed = false;
    this.console = inject(Console);
    this.stateManager = inject(StateManager);
    this.options = inject(ROUTER_CONFIGURATION, {
      optional: true
    }) || {};
    this.pendingTasks = inject(PendingTasks);
    this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    this.navigationTransitions = inject(NavigationTransitions);
    this.urlSerializer = inject(UrlSerializer);
    this.location = inject(Location);
    this.urlHandlingStrategy = inject(UrlHandlingStrategy);
    this._events = new Subject();
    this.errorHandler = this.options.errorHandler || defaultErrorHandler;
    this.navigated = false;
    this.routeReuseStrategy = inject(RouteReuseStrategy);
    this.onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
    this.config = inject(ROUTES, {
      optional: true
    })?.flat() ?? [];
    this.componentInputBindingEnabled = !!inject(INPUT_BINDER, {
      optional: true
    });
    this.eventsSubscription = new Subscription();
    this.resetConfig(this.config);
    this.navigationTransitions.setupNavigations(this, this.currentUrlTree, this.routerState).subscribe({
      error: (e) => {
        this.console.warn(ngDevMode ? `Unhandled Navigation Error: ${e}` : e);
      }
    });
    this.subscribeToNavigationEvents();
  }
  subscribeToNavigationEvents() {
    const subscription = this.navigationTransitions.events.subscribe((e) => {
      try {
        const currentTransition = this.navigationTransitions.currentTransition;
        const currentNavigation = this.navigationTransitions.currentNavigation;
        if (currentTransition !== null && currentNavigation !== null) {
          this.stateManager.handleRouterEvent(e, currentNavigation);
          if (e instanceof NavigationCancel && e.code !== NavigationCancellationCode.Redirect && e.code !== NavigationCancellationCode.SupersededByNewNavigation) {
            this.navigated = true;
          } else if (e instanceof NavigationEnd) {
            this.navigated = true;
          } else if (e instanceof RedirectRequest) {
            const opts = e.navigationBehaviorOptions;
            const mergedTree = this.urlHandlingStrategy.merge(e.url, currentTransition.currentRawUrl);
            const extras = __spreadValues({
              browserUrl: currentTransition.extras.browserUrl,
              info: currentTransition.extras.info,
              skipLocationChange: currentTransition.extras.skipLocationChange,
              // The URL is already updated at this point if we have 'eager' URL
              // updates or if the navigation was triggered by the browser (back
              // button, URL bar, etc). We want to replace that item in history
              // if the navigation is rejected.
              replaceUrl: currentTransition.extras.replaceUrl || this.urlUpdateStrategy === "eager" || isBrowserTriggeredNavigation(currentTransition.source)
            }, opts);
            this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras, {
              resolve: currentTransition.resolve,
              reject: currentTransition.reject,
              promise: currentTransition.promise
            });
          }
        }
        if (isPublicRouterEvent(e)) {
          this._events.next(e);
        }
      } catch (e2) {
        this.navigationTransitions.transitionAbortSubject.next(e2);
      }
    });
    this.eventsSubscription.add(subscription);
  }
  /** @internal */
  resetRootComponentType(rootComponentType) {
    this.routerState.root.component = rootComponentType;
    this.navigationTransitions.rootComponentType = rootComponentType;
  }
  /**
   * Sets up the location change listener and performs the initial navigation.
   */
  initialNavigation() {
    this.setUpLocationChangeListener();
    if (!this.navigationTransitions.hasRequestedNavigation) {
      this.navigateToSyncWithBrowser(this.location.path(true), IMPERATIVE_NAVIGATION, this.stateManager.restoredState());
    }
  }
  /**
   * Sets up the location change listener. This listener detects navigations triggered from outside
   * the Router (the browser back/forward buttons, for example) and schedules a corresponding Router
   * navigation so that the correct events, guards, etc. are triggered.
   */
  setUpLocationChangeListener() {
    this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((url, state) => {
      setTimeout(() => {
        this.navigateToSyncWithBrowser(url, "popstate", state);
      }, 0);
    });
  }
  /**
   * Schedules a router navigation to synchronize Router state with the browser state.
   *
   * This is done as a response to a popstate event and the initial navigation. These
   * two scenarios represent times when the browser URL/state has been updated and
   * the Router needs to respond to ensure its internal state matches.
   */
  navigateToSyncWithBrowser(url, source, state) {
    const extras = {
      replaceUrl: true
    };
    const restoredState = state?.navigationId ? state : null;
    if (state) {
      const stateCopy = __spreadValues({}, state);
      delete stateCopy.navigationId;
      delete stateCopy.\u0275routerPageId;
      if (Object.keys(stateCopy).length !== 0) {
        extras.state = stateCopy;
      }
    }
    const urlTree = this.parseUrl(url);
    this.scheduleNavigation(urlTree, source, restoredState, extras);
  }
  /** The current URL. */
  get url() {
    return this.serializeUrl(this.currentUrlTree);
  }
  /**
   * Returns the current `Navigation` object when the router is navigating,
   * and `null` when idle.
   */
  getCurrentNavigation() {
    return this.navigationTransitions.currentNavigation;
  }
  /**
   * The `Navigation` object of the most recent navigation to succeed and `null` if there
   *     has not been a successful navigation yet.
   */
  get lastSuccessfulNavigation() {
    return this.navigationTransitions.lastSuccessfulNavigation;
  }
  /**
   * Resets the route configuration used for navigation and generating links.
   *
   * @param config The route array for the new configuration.
   *
   * @usageNotes
   *
   * ```
   * router.resetConfig([
   *  { path: 'team/:id', component: TeamCmp, children: [
   *    { path: 'simple', component: SimpleCmp },
   *    { path: 'user/:name', component: UserCmp }
   *  ]}
   * ]);
   * ```
   */
  resetConfig(config) {
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(config);
    this.config = config.map(standardizeConfig);
    this.navigated = false;
  }
  /** @nodoc */
  ngOnDestroy() {
    this.dispose();
  }
  /** Disposes of the router. */
  dispose() {
    this.navigationTransitions.complete();
    if (this.nonRouterCurrentEntryChangeSubscription) {
      this.nonRouterCurrentEntryChangeSubscription.unsubscribe();
      this.nonRouterCurrentEntryChangeSubscription = void 0;
    }
    this.disposed = true;
    this.eventsSubscription.unsubscribe();
  }
  /**
   * Appends URL segments to the current URL tree to create a new URL tree.
   *
   * @param commands An array of URL fragments with which to construct the new URL tree.
   * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
   * segments, followed by the parameters for each segment.
   * The fragments are applied to the current URL tree or the one provided  in the `relativeTo`
   * property of the options object, if supplied.
   * @param navigationExtras Options that control the navigation strategy.
   * @returns The new URL tree.
   *
   * @usageNotes
   *
   * ```
   * // create /team/33/user/11
   * router.createUrlTree(['/team', 33, 'user', 11]);
   *
   * // create /team/33;expand=true/user/11
   * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
   *
   * // you can collapse static segments like this (this works only with the first passed-in value):
   * router.createUrlTree(['/team/33/user', userId]);
   *
   * // If the first segment can contain slashes, and you do not want the router to split it,
   * // you can do the following:
   * router.createUrlTree([{segmentPath: '/one/two'}]);
   *
   * // create /team/33/(user/11//right:chat)
   * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
   *
   * // remove the right secondary node
   * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
   *
   * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
   *
   * // navigate to /team/33/user/11/details
   * router.createUrlTree(['details'], {relativeTo: route});
   *
   * // navigate to /team/33/user/22
   * router.createUrlTree(['../22'], {relativeTo: route});
   *
   * // navigate to /team/44/user/22
   * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
   *
   * Note that a value of `null` or `undefined` for `relativeTo` indicates that the
   * tree should be created relative to the root.
   * ```
   */
  createUrlTree(commands, navigationExtras = {}) {
    const {
      relativeTo,
      queryParams,
      fragment,
      queryParamsHandling,
      preserveFragment
    } = navigationExtras;
    const f = preserveFragment ? this.currentUrlTree.fragment : fragment;
    let q = null;
    switch (queryParamsHandling ?? this.options.defaultQueryParamsHandling) {
      case "merge":
        q = __spreadValues(__spreadValues({}, this.currentUrlTree.queryParams), queryParams);
        break;
      case "preserve":
        q = this.currentUrlTree.queryParams;
        break;
      default:
        q = queryParams || null;
    }
    if (q !== null) {
      q = this.removeEmptyProps(q);
    }
    let relativeToUrlSegmentGroup;
    try {
      const relativeToSnapshot = relativeTo ? relativeTo.snapshot : this.routerState.snapshot.root;
      relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeToSnapshot);
    } catch (e) {
      if (typeof commands[0] !== "string" || commands[0][0] !== "/") {
        commands = [];
      }
      relativeToUrlSegmentGroup = this.currentUrlTree.root;
    }
    return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, q, f ?? null);
  }
  /**
   * Navigates to a view using an absolute route path.
   *
   * @param url An absolute path for a defined route. The function does not apply any delta to the
   *     current URL.
   * @param extras An object containing properties that modify the navigation strategy.
   *
   * @returns A Promise that resolves to 'true' when navigation succeeds,
   * to 'false' when navigation fails, or is rejected on error.
   *
   * @usageNotes
   *
   * The following calls request navigation to an absolute path.
   *
   * ```
   * router.navigateByUrl("/team/33/user/11");
   *
   * // Navigate without updating the URL
   * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
   * ```
   *
   * @see [Routing and Navigation guide](guide/routing/common-router-tasks)
   *
   */
  navigateByUrl(url, extras = {
    skipLocationChange: false
  }) {
    const urlTree = isUrlTree(url) ? url : this.parseUrl(url);
    const mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
    return this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras);
  }
  /**
   * Navigate based on the provided array of commands and a starting point.
   * If no starting route is provided, the navigation is absolute.
   *
   * @param commands An array of URL fragments with which to construct the target URL.
   * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
   * segments, followed by the parameters for each segment.
   * The fragments are applied to the current URL or the one provided  in the `relativeTo` property
   * of the options object, if supplied.
   * @param extras An options object that determines how the URL should be constructed or
   *     interpreted.
   *
   * @returns A Promise that resolves to `true` when navigation succeeds, or `false` when navigation
   *     fails. The Promise is rejected when an error occurs if `resolveNavigationPromiseOnError` is
   * not `true`.
   *
   * @usageNotes
   *
   * The following calls request navigation to a dynamic route path relative to the current URL.
   *
   * ```
   * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
   *
   * // Navigate without updating the URL, overriding the default behavior
   * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
   * ```
   *
   * @see [Routing and Navigation guide](guide/routing/common-router-tasks)
   *
   */
  navigate(commands, extras = {
    skipLocationChange: false
  }) {
    validateCommands(commands);
    return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
  }
  /** Serializes a `UrlTree` into a string */
  serializeUrl(url) {
    return this.urlSerializer.serialize(url);
  }
  /** Parses a string into a `UrlTree` */
  parseUrl(url) {
    try {
      return this.urlSerializer.parse(url);
    } catch {
      return this.urlSerializer.parse("/");
    }
  }
  isActive(url, matchOptions) {
    let options;
    if (matchOptions === true) {
      options = __spreadValues({}, exactMatchOptions);
    } else if (matchOptions === false) {
      options = __spreadValues({}, subsetMatchOptions);
    } else {
      options = matchOptions;
    }
    if (isUrlTree(url)) {
      return containsTree(this.currentUrlTree, url, options);
    }
    const urlTree = this.parseUrl(url);
    return containsTree(this.currentUrlTree, urlTree, options);
  }
  removeEmptyProps(params) {
    return Object.entries(params).reduce((result, [key, value]) => {
      if (value !== null && value !== void 0) {
        result[key] = value;
      }
      return result;
    }, {});
  }
  scheduleNavigation(rawUrl, source, restoredState, extras, priorPromise) {
    if (this.disposed) {
      return Promise.resolve(false);
    }
    let resolve;
    let reject;
    let promise;
    if (priorPromise) {
      resolve = priorPromise.resolve;
      reject = priorPromise.reject;
      promise = priorPromise.promise;
    } else {
      promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
    }
    const taskId = this.pendingTasks.add();
    afterNextNavigation(this, () => {
      queueMicrotask(() => this.pendingTasks.remove(taskId));
    });
    this.navigationTransitions.handleNavigationRequest({
      source,
      restoredState,
      currentUrlTree: this.currentUrlTree,
      currentRawUrl: this.currentUrlTree,
      rawUrl,
      extras,
      resolve,
      reject,
      promise,
      currentSnapshot: this.routerState.snapshot,
      currentRouterState: this.routerState
    });
    return promise.catch((e) => {
      return Promise.reject(e);
    });
  }
  static {
    this.\u0275fac = function Router_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Router)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Router,
      factory: _Router.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Router, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function validateCommands(commands) {
  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    if (cmd == null) {
      throw new RuntimeError(4008, (typeof ngDevMode === "undefined" || ngDevMode) && `The requested path contains ${cmd} segment at index ${i}`);
    }
  }
}
function isPublicRouterEvent(e) {
  return !(e instanceof BeforeActivateRoutes) && !(e instanceof RedirectRequest);
}
var RouterLink = class _RouterLink {
  constructor(router, route, tabIndexAttribute, renderer, el, locationStrategy) {
    this.router = router;
    this.route = route;
    this.tabIndexAttribute = tabIndexAttribute;
    this.renderer = renderer;
    this.el = el;
    this.locationStrategy = locationStrategy;
    this.href = null;
    this.onChanges = new Subject();
    this.preserveFragment = false;
    this.skipLocationChange = false;
    this.replaceUrl = false;
    this.routerLinkInput = null;
    const tagName = el.nativeElement.tagName?.toLowerCase();
    this.isAnchorElement = tagName === "a" || tagName === "area";
    if (this.isAnchorElement) {
      this.subscription = router.events.subscribe((s) => {
        if (s instanceof NavigationEnd) {
          this.updateHref();
        }
      });
    } else {
      this.setTabIndexIfNotOnNativeEl("0");
    }
  }
  /**
   * Modifies the tab index if there was not a tabindex attribute on the element during
   * instantiation.
   */
  setTabIndexIfNotOnNativeEl(newTabIndex) {
    if (this.tabIndexAttribute != null || this.isAnchorElement) {
      return;
    }
    this.applyAttributeValue("tabindex", newTabIndex);
  }
  /** @nodoc */
  // TODO(atscott): Remove changes parameter in major version as a breaking change.
  ngOnChanges(changes) {
    if (ngDevMode && isUrlTree(this.routerLinkInput) && (this.fragment !== void 0 || this.queryParams || this.queryParamsHandling || this.preserveFragment || this.relativeTo)) {
      throw new RuntimeError(4016, "Cannot configure queryParams or fragment when using a UrlTree as the routerLink input value.");
    }
    if (this.isAnchorElement) {
      this.updateHref();
    }
    this.onChanges.next(this);
  }
  /**
   * Commands to pass to {@link Router#createUrlTree} or a `UrlTree`.
   *   - **array**: commands to pass to {@link Router#createUrlTree}.
   *   - **string**: shorthand for array of commands with just the string, i.e. `['/route']`
   *   - **UrlTree**: a `UrlTree` for this link rather than creating one from the commands
   *     and other inputs that correspond to properties of `UrlCreationOptions`.
   *   - **null|undefined**: effectively disables the `routerLink`
   * @see {@link Router#createUrlTree}
   */
  set routerLink(commandsOrUrlTree) {
    if (commandsOrUrlTree == null) {
      this.routerLinkInput = null;
      this.setTabIndexIfNotOnNativeEl(null);
    } else {
      if (isUrlTree(commandsOrUrlTree)) {
        this.routerLinkInput = commandsOrUrlTree;
      } else {
        this.routerLinkInput = Array.isArray(commandsOrUrlTree) ? commandsOrUrlTree : [commandsOrUrlTree];
      }
      this.setTabIndexIfNotOnNativeEl("0");
    }
  }
  /** @nodoc */
  onClick(button, ctrlKey, shiftKey, altKey, metaKey) {
    const urlTree = this.urlTree;
    if (urlTree === null) {
      return true;
    }
    if (this.isAnchorElement) {
      if (button !== 0 || ctrlKey || shiftKey || altKey || metaKey) {
        return true;
      }
      if (typeof this.target === "string" && this.target != "_self") {
        return true;
      }
    }
    const extras = {
      skipLocationChange: this.skipLocationChange,
      replaceUrl: this.replaceUrl,
      state: this.state,
      info: this.info
    };
    this.router.navigateByUrl(urlTree, extras);
    return !this.isAnchorElement;
  }
  /** @nodoc */
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  updateHref() {
    const urlTree = this.urlTree;
    this.href = urlTree !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(urlTree)) : null;
    const sanitizedValue = this.href === null ? null : (
      // This class represents a directive that can be added to both `<a>` elements,
      // as well as other elements. As a result, we can't define security context at
      // compile time. So the security context is deferred to runtime.
      // The `ɵɵsanitizeUrlOrResourceUrl` selects the necessary sanitizer function
      // based on the tag and property names. The logic mimics the one from
      // `packages/compiler/src/schema/dom_security_schema.ts`, which is used at compile time.
      //
      // Note: we should investigate whether we can switch to using `@HostBinding('attr.href')`
      // instead of applying a value via a renderer, after a final merge of the
      // `RouterLinkWithHref` directive.
      \u0275\u0275sanitizeUrlOrResourceUrl(this.href, this.el.nativeElement.tagName.toLowerCase(), "href")
    );
    this.applyAttributeValue("href", sanitizedValue);
  }
  applyAttributeValue(attrName, attrValue) {
    const renderer = this.renderer;
    const nativeElement = this.el.nativeElement;
    if (attrValue !== null) {
      renderer.setAttribute(nativeElement, attrName, attrValue);
    } else {
      renderer.removeAttribute(nativeElement, attrName);
    }
  }
  get urlTree() {
    if (this.routerLinkInput === null) {
      return null;
    } else if (isUrlTree(this.routerLinkInput)) {
      return this.routerLinkInput;
    }
    return this.router.createUrlTree(this.routerLinkInput, {
      // If the `relativeTo` input is not defined, we want to use `this.route` by default.
      // Otherwise, we should use the value provided by the user in the input.
      relativeTo: this.relativeTo !== void 0 ? this.relativeTo : this.route,
      queryParams: this.queryParams,
      fragment: this.fragment,
      queryParamsHandling: this.queryParamsHandling,
      preserveFragment: this.preserveFragment
    });
  }
  static {
    this.\u0275fac = function RouterLink_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RouterLink)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LocationStrategy));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RouterLink,
      selectors: [["", "routerLink", ""]],
      hostVars: 1,
      hostBindings: function RouterLink_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function RouterLink_click_HostBindingHandler($event) {
            return ctx.onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("target", ctx.target);
        }
      },
      inputs: {
        target: "target",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        state: "state",
        info: "info",
        relativeTo: "relativeTo",
        preserveFragment: [2, "preserveFragment", "preserveFragment", booleanAttribute],
        skipLocationChange: [2, "skipLocationChange", "skipLocationChange", booleanAttribute],
        replaceUrl: [2, "replaceUrl", "replaceUrl", booleanAttribute],
        routerLink: "routerLink"
      },
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLink, [{
    type: Directive,
    args: [{
      selector: "[routerLink]",
      standalone: true
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: LocationStrategy
  }], {
    target: [{
      type: HostBinding,
      args: ["attr.target"]
    }, {
      type: Input
    }],
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    info: [{
      type: Input
    }],
    relativeTo: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    skipLocationChange: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    replaceUrl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    routerLink: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event.button", "$event.ctrlKey", "$event.shiftKey", "$event.altKey", "$event.metaKey"]]
    }]
  });
})();
var RouterLinkActive = class _RouterLinkActive {
  get isActive() {
    return this._isActive;
  }
  constructor(router, element, renderer, cdr, link) {
    this.router = router;
    this.element = element;
    this.renderer = renderer;
    this.cdr = cdr;
    this.link = link;
    this.classes = [];
    this._isActive = false;
    this.routerLinkActiveOptions = {
      exact: false
    };
    this.isActiveChange = new EventEmitter();
    this.routerEventsSubscription = router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        this.update();
      }
    });
  }
  /** @nodoc */
  ngAfterContentInit() {
    of(this.links.changes, of(null)).pipe(mergeAll()).subscribe((_) => {
      this.update();
      this.subscribeToEachLinkOnChanges();
    });
  }
  subscribeToEachLinkOnChanges() {
    this.linkInputChangesSubscription?.unsubscribe();
    const allLinkChanges = [...this.links.toArray(), this.link].filter((link) => !!link).map((link) => link.onChanges);
    this.linkInputChangesSubscription = from(allLinkChanges).pipe(mergeAll()).subscribe((link) => {
      if (this._isActive !== this.isLinkActive(this.router)(link)) {
        this.update();
      }
    });
  }
  set routerLinkActive(data) {
    const classes = Array.isArray(data) ? data : data.split(" ");
    this.classes = classes.filter((c) => !!c);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this.update();
  }
  /** @nodoc */
  ngOnDestroy() {
    this.routerEventsSubscription.unsubscribe();
    this.linkInputChangesSubscription?.unsubscribe();
  }
  update() {
    if (!this.links || !this.router.navigated) return;
    queueMicrotask(() => {
      const hasActiveLinks = this.hasActiveLinks();
      this.classes.forEach((c) => {
        if (hasActiveLinks) {
          this.renderer.addClass(this.element.nativeElement, c);
        } else {
          this.renderer.removeClass(this.element.nativeElement, c);
        }
      });
      if (hasActiveLinks && this.ariaCurrentWhenActive !== void 0) {
        this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString());
      } else {
        this.renderer.removeAttribute(this.element.nativeElement, "aria-current");
      }
      if (this._isActive !== hasActiveLinks) {
        this._isActive = hasActiveLinks;
        this.cdr.markForCheck();
        this.isActiveChange.emit(hasActiveLinks);
      }
    });
  }
  isLinkActive(router) {
    const options = isActiveMatchOptions(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : (
      // While the types should disallow `undefined` here, it's possible without strict inputs
      this.routerLinkActiveOptions.exact || false
    );
    return (link) => {
      const urlTree = link.urlTree;
      return urlTree ? router.isActive(urlTree, options) : false;
    };
  }
  hasActiveLinks() {
    const isActiveCheckFn = this.isLinkActive(this.router);
    return this.link && isActiveCheckFn(this.link) || this.links.some(isActiveCheckFn);
  }
  static {
    this.\u0275fac = function RouterLinkActive_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RouterLinkActive)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(RouterLink, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RouterLinkActive,
      selectors: [["", "routerLinkActive", ""]],
      contentQueries: function RouterLinkActive_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, RouterLink, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.links = _t);
        }
      },
      inputs: {
        routerLinkActiveOptions: "routerLinkActiveOptions",
        ariaCurrentWhenActive: "ariaCurrentWhenActive",
        routerLinkActive: "routerLinkActive"
      },
      outputs: {
        isActiveChange: "isActiveChange"
      },
      exportAs: ["routerLinkActive"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkActive, [{
    type: Directive,
    args: [{
      selector: "[routerLinkActive]",
      exportAs: "routerLinkActive",
      standalone: true
    }]
  }], () => [{
    type: Router
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: RouterLink,
    decorators: [{
      type: Optional
    }]
  }], {
    links: [{
      type: ContentChildren,
      args: [RouterLink, {
        descendants: true
      }]
    }],
    routerLinkActiveOptions: [{
      type: Input
    }],
    ariaCurrentWhenActive: [{
      type: Input
    }],
    isActiveChange: [{
      type: Output
    }],
    routerLinkActive: [{
      type: Input
    }]
  });
})();
function isActiveMatchOptions(options) {
  return !!options.paths;
}
var PreloadingStrategy = class {
};
var PreloadAllModules = class _PreloadAllModules {
  preload(route, fn) {
    return fn().pipe(catchError(() => of(null)));
  }
  static {
    this.\u0275fac = function PreloadAllModules_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreloadAllModules)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _PreloadAllModules,
      factory: _PreloadAllModules.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreloadAllModules, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NoPreloading = class _NoPreloading {
  preload(route, fn) {
    return of(null);
  }
  static {
    this.\u0275fac = function NoPreloading_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NoPreloading)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NoPreloading,
      factory: _NoPreloading.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoPreloading, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RouterPreloader = class _RouterPreloader {
  constructor(router, compiler, injector, preloadingStrategy, loader) {
    this.router = router;
    this.injector = injector;
    this.preloadingStrategy = preloadingStrategy;
    this.loader = loader;
  }
  setUpPreloading() {
    this.subscription = this.router.events.pipe(filter((e) => e instanceof NavigationEnd), concatMap(() => this.preload())).subscribe(() => {
    });
  }
  preload() {
    return this.processRoutes(this.injector, this.router.config);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  processRoutes(injector, routes) {
    const res = [];
    for (const route of routes) {
      if (route.providers && !route._injector) {
        route._injector = createEnvironmentInjector(route.providers, injector, `Route: ${route.path}`);
      }
      const injectorForCurrentRoute = route._injector ?? injector;
      const injectorForChildren = route._loadedInjector ?? injectorForCurrentRoute;
      if (route.loadChildren && !route._loadedRoutes && route.canLoad === void 0 || route.loadComponent && !route._loadedComponent) {
        res.push(this.preloadConfig(injectorForCurrentRoute, route));
      }
      if (route.children || route._loadedRoutes) {
        res.push(this.processRoutes(injectorForChildren, route.children ?? route._loadedRoutes));
      }
    }
    return from(res).pipe(mergeAll());
  }
  preloadConfig(injector, route) {
    return this.preloadingStrategy.preload(route, () => {
      let loadedChildren$;
      if (route.loadChildren && route.canLoad === void 0) {
        loadedChildren$ = this.loader.loadChildren(injector, route);
      } else {
        loadedChildren$ = of(null);
      }
      const recursiveLoadChildren$ = loadedChildren$.pipe(mergeMap((config) => {
        if (config === null) {
          return of(void 0);
        }
        route._loadedRoutes = config.routes;
        route._loadedInjector = config.injector;
        return this.processRoutes(config.injector ?? injector, config.routes);
      }));
      if (route.loadComponent && !route._loadedComponent) {
        const loadComponent$ = this.loader.loadComponent(route);
        return from([recursiveLoadChildren$, loadComponent$]).pipe(mergeAll());
      } else {
        return recursiveLoadChildren$;
      }
    });
  }
  static {
    this.\u0275fac = function RouterPreloader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RouterPreloader)(\u0275\u0275inject(Router), \u0275\u0275inject(Compiler), \u0275\u0275inject(EnvironmentInjector), \u0275\u0275inject(PreloadingStrategy), \u0275\u0275inject(RouterConfigLoader));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _RouterPreloader,
      factory: _RouterPreloader.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterPreloader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }, {
    type: Compiler
  }, {
    type: EnvironmentInjector
  }, {
    type: PreloadingStrategy
  }, {
    type: RouterConfigLoader
  }], null);
})();
var ROUTER_SCROLLER = new InjectionToken("");
var RouterScroller = class _RouterScroller {
  /** @nodoc */
  constructor(urlSerializer, transitions, viewportScroller, zone, options = {}) {
    this.urlSerializer = urlSerializer;
    this.transitions = transitions;
    this.viewportScroller = viewportScroller;
    this.zone = zone;
    this.options = options;
    this.lastId = 0;
    this.lastSource = "imperative";
    this.restoredId = 0;
    this.store = {};
    options.scrollPositionRestoration ||= "disabled";
    options.anchorScrolling ||= "disabled";
  }
  init() {
    if (this.options.scrollPositionRestoration !== "disabled") {
      this.viewportScroller.setHistoryScrollRestoration("manual");
    }
    this.routerEventsSubscription = this.createScrollEvents();
    this.scrollEventsSubscription = this.consumeScrollEvents();
  }
  createScrollEvents() {
    return this.transitions.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.store[this.lastId] = this.viewportScroller.getScrollPosition();
        this.lastSource = e.navigationTrigger;
        this.restoredId = e.restoredState ? e.restoredState.navigationId : 0;
      } else if (e instanceof NavigationEnd) {
        this.lastId = e.id;
        this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment);
      } else if (e instanceof NavigationSkipped && e.code === NavigationSkippedCode.IgnoredSameUrlNavigation) {
        this.lastSource = void 0;
        this.restoredId = 0;
        this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment);
      }
    });
  }
  consumeScrollEvents() {
    return this.transitions.events.subscribe((e) => {
      if (!(e instanceof Scroll)) return;
      if (e.position) {
        if (this.options.scrollPositionRestoration === "top") {
          this.viewportScroller.scrollToPosition([0, 0]);
        } else if (this.options.scrollPositionRestoration === "enabled") {
          this.viewportScroller.scrollToPosition(e.position);
        }
      } else {
        if (e.anchor && this.options.anchorScrolling === "enabled") {
          this.viewportScroller.scrollToAnchor(e.anchor);
        } else if (this.options.scrollPositionRestoration !== "disabled") {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      }
    });
  }
  scheduleScrollEvent(routerEvent, anchor) {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.zone.run(() => {
          this.transitions.events.next(new Scroll(routerEvent, this.lastSource === "popstate" ? this.store[this.restoredId] : null, anchor));
        });
      }, 0);
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    this.routerEventsSubscription?.unsubscribe();
    this.scrollEventsSubscription?.unsubscribe();
  }
  static {
    this.\u0275fac = function RouterScroller_Factory(__ngFactoryType__) {
      \u0275\u0275invalidFactory();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _RouterScroller,
      factory: _RouterScroller.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterScroller, [{
    type: Injectable
  }], () => [{
    type: UrlSerializer
  }, {
    type: NavigationTransitions
  }, {
    type: ViewportScroller
  }, {
    type: NgZone
  }, {
    type: void 0
  }], null);
})();
function provideRouter(routes, ...features) {
  return makeEnvironmentProviders([{
    provide: ROUTES,
    multi: true,
    useValue: routes
  }, typeof ngDevMode === "undefined" || ngDevMode ? {
    provide: ROUTER_IS_PROVIDED,
    useValue: true
  } : [], {
    provide: ActivatedRoute,
    useFactory: rootRoute,
    deps: [Router]
  }, {
    provide: APP_BOOTSTRAP_LISTENER,
    multi: true,
    useFactory: getBootstrapListener
  }, features.map((feature) => feature.\u0275providers)]);
}
function rootRoute(router) {
  return router.routerState.root;
}
function routerFeature(kind, providers) {
  return {
    \u0275kind: kind,
    \u0275providers: providers
  };
}
var ROUTER_IS_PROVIDED = new InjectionToken("", {
  providedIn: "root",
  factory: () => false
});
function getBootstrapListener() {
  const injector = inject(Injector);
  return (bootstrappedComponentRef) => {
    const ref = injector.get(ApplicationRef);
    if (bootstrappedComponentRef !== ref.components[0]) {
      return;
    }
    const router = injector.get(Router);
    const bootstrapDone = injector.get(BOOTSTRAP_DONE);
    if (injector.get(INITIAL_NAVIGATION) === 1) {
      router.initialNavigation();
    }
    injector.get(ROUTER_PRELOADER, null, InjectFlags.Optional)?.setUpPreloading();
    injector.get(ROUTER_SCROLLER, null, InjectFlags.Optional)?.init();
    router.resetRootComponentType(ref.componentTypes[0]);
    if (!bootstrapDone.closed) {
      bootstrapDone.next();
      bootstrapDone.complete();
      bootstrapDone.unsubscribe();
    }
  };
}
var BOOTSTRAP_DONE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "bootstrap done indicator" : "", {
  factory: () => {
    return new Subject();
  }
});
var INITIAL_NAVIGATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "initial navigation" : "", {
  providedIn: "root",
  factory: () => 1
  /* InitialNavigation.EnabledNonBlocking */
});
function withEnabledBlockingInitialNavigation() {
  const providers = [{
    provide: INITIAL_NAVIGATION,
    useValue: 0
    /* InitialNavigation.EnabledBlocking */
  }, {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [Injector],
    useFactory: (injector) => {
      const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve());
      return () => {
        return locationInitialized.then(() => {
          return new Promise((resolve) => {
            const router = injector.get(Router);
            const bootstrapDone = injector.get(BOOTSTRAP_DONE);
            afterNextNavigation(router, () => {
              resolve(true);
            });
            injector.get(NavigationTransitions).afterPreactivation = () => {
              resolve(true);
              return bootstrapDone.closed ? of(void 0) : bootstrapDone;
            };
            router.initialNavigation();
          });
        });
      };
    }
  }];
  return routerFeature(2, providers);
}
function withDisabledInitialNavigation() {
  const providers = [{
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: () => {
      const router = inject(Router);
      return () => {
        router.setUpLocationChangeListener();
      };
    }
  }, {
    provide: INITIAL_NAVIGATION,
    useValue: 2
    /* InitialNavigation.Disabled */
  }];
  return routerFeature(3, providers);
}
function withDebugTracing() {
  let providers = [];
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    providers = [{
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useFactory: () => {
        const router = inject(Router);
        return () => router.events.subscribe((e) => {
          console.group?.(`Router Event: ${e.constructor.name}`);
          console.log(stringifyEvent(e));
          console.log(e);
          console.groupEnd?.();
        });
      }
    }];
  } else {
    providers = [];
  }
  return routerFeature(1, providers);
}
var ROUTER_PRELOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router preloader" : "");
function withPreloading(preloadingStrategy) {
  const providers = [{
    provide: ROUTER_PRELOADER,
    useExisting: RouterPreloader
  }, {
    provide: PreloadingStrategy,
    useExisting: preloadingStrategy
  }];
  return routerFeature(0, providers);
}
function withComponentInputBinding() {
  const providers = [RoutedComponentInputBinder, {
    provide: INPUT_BINDER,
    useExisting: RoutedComponentInputBinder
  }];
  return routerFeature(8, providers);
}
function withViewTransitions(options) {
  const providers = [{
    provide: CREATE_VIEW_TRANSITION,
    useValue: createViewTransition
  }, {
    provide: VIEW_TRANSITION_OPTIONS,
    useValue: __spreadValues({
      skipNextTransition: !!options?.skipInitialTransition
    }, options)
  }];
  return routerFeature(9, providers);
}
var ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkActive, \u0275EmptyOutletComponent];
var ROUTER_FORROOT_GUARD = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router duplicate forRoot guard" : "ROUTER_FORROOT_GUARD");
var ROUTER_PROVIDERS = [
  Location,
  {
    provide: UrlSerializer,
    useClass: DefaultUrlSerializer
  },
  Router,
  ChildrenOutletContexts,
  {
    provide: ActivatedRoute,
    useFactory: rootRoute,
    deps: [Router]
  },
  RouterConfigLoader,
  // Only used to warn when `provideRoutes` is used without `RouterModule` or `provideRouter`. Can
  // be removed when `provideRoutes` is removed.
  typeof ngDevMode === "undefined" || ngDevMode ? {
    provide: ROUTER_IS_PROVIDED,
    useValue: true
  } : []
];
var RouterModule = class _RouterModule {
  constructor(guard) {
  }
  /**
   * Creates and configures a module with all the router providers and directives.
   * Optionally sets up an application listener to perform an initial navigation.
   *
   * When registering the NgModule at the root, import as follows:
   *
   * ```
   * @NgModule({
   *   imports: [RouterModule.forRoot(ROUTES)]
   * })
   * class MyNgModule {}
   * ```
   *
   * @param routes An array of `Route` objects that define the navigation paths for the application.
   * @param config An `ExtraOptions` configuration object that controls how navigation is performed.
   * @return The new `NgModule`.
   *
   */
  static forRoot(routes, config) {
    return {
      ngModule: _RouterModule,
      providers: [ROUTER_PROVIDERS, typeof ngDevMode === "undefined" || ngDevMode ? config?.enableTracing ? withDebugTracing().\u0275providers : [] : [], {
        provide: ROUTES,
        multi: true,
        useValue: routes
      }, {
        provide: ROUTER_FORROOT_GUARD,
        useFactory: provideForRootGuard,
        deps: [[Router, new Optional(), new SkipSelf()]]
      }, {
        provide: ROUTER_CONFIGURATION,
        useValue: config ? config : {}
      }, config?.useHash ? provideHashLocationStrategy() : providePathLocationStrategy(), provideRouterScroller(), config?.preloadingStrategy ? withPreloading(config.preloadingStrategy).\u0275providers : [], config?.initialNavigation ? provideInitialNavigation(config) : [], config?.bindToComponentInputs ? withComponentInputBinding().\u0275providers : [], config?.enableViewTransitions ? withViewTransitions().\u0275providers : [], provideRouterInitializer()]
    };
  }
  /**
   * Creates a module with all the router directives and a provider registering routes,
   * without creating a new Router service.
   * When registering for submodules and lazy-loaded submodules, create the NgModule as follows:
   *
   * ```
   * @NgModule({
   *   imports: [RouterModule.forChild(ROUTES)]
   * })
   * class MyNgModule {}
   * ```
   *
   * @param routes An array of `Route` objects that define the navigation paths for the submodule.
   * @return The new NgModule.
   *
   */
  static forChild(routes) {
    return {
      ngModule: _RouterModule,
      providers: [{
        provide: ROUTES,
        multi: true,
        useValue: routes
      }]
    };
  }
  static {
    this.\u0275fac = function RouterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RouterModule)(\u0275\u0275inject(ROUTER_FORROOT_GUARD, 8));
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _RouterModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterModule, [{
    type: NgModule,
    args: [{
      imports: ROUTER_DIRECTIVES,
      exports: ROUTER_DIRECTIVES
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ROUTER_FORROOT_GUARD]
    }]
  }], null);
})();
function provideRouterScroller() {
  return {
    provide: ROUTER_SCROLLER,
    useFactory: () => {
      const viewportScroller = inject(ViewportScroller);
      const zone = inject(NgZone);
      const config = inject(ROUTER_CONFIGURATION);
      const transitions = inject(NavigationTransitions);
      const urlSerializer = inject(UrlSerializer);
      if (config.scrollOffset) {
        viewportScroller.setOffset(config.scrollOffset);
      }
      return new RouterScroller(urlSerializer, transitions, viewportScroller, zone, config);
    }
  };
}
function provideHashLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  };
}
function providePathLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  };
}
function provideForRootGuard(router) {
  if ((typeof ngDevMode === "undefined" || ngDevMode) && router) {
    throw new RuntimeError(4007, `The Router was provided more than once. This can happen if 'forRoot' is used outside of the root injector. Lazy loaded modules should use RouterModule.forChild() instead.`);
  }
  return "guarded";
}
function provideInitialNavigation(config) {
  return [config.initialNavigation === "disabled" ? withDisabledInitialNavigation().\u0275providers : [], config.initialNavigation === "enabledBlocking" ? withEnabledBlockingInitialNavigation().\u0275providers : []];
}
var ROUTER_INITIALIZER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "Router Initializer" : "");
function provideRouterInitializer() {
  return [
    // ROUTER_INITIALIZER token should be removed. It's public API but shouldn't be. We can just
    // have `getBootstrapListener` directly attached to APP_BOOTSTRAP_LISTENER.
    {
      provide: ROUTER_INITIALIZER,
      useFactory: getBootstrapListener
    },
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      useExisting: ROUTER_INITIALIZER
    }
  ];
}
var VERSION2 = new Version("18.2.14");

// src/app/core/api-response.ts
function extractApiMessage(error, fallback = "Something went wrong") {
  const body = error?.error;
  if (body?.errors?.length)
    return body.errors.map((e) => e.message).join(". ");
  return body?.message || fallback;
}

// src/app/core/constants.ts
var APP_CONSTANTS = {
  PAGE_SIZE: 10,
  LOCAL_STORAGE_TOKEN_KEY: "erp_token",
  LOCAL_STORAGE_USER_KEY: "erp_user",
  SESSION_ACTIVITY_KEY: "erp_last_activity",
  DEFAULT_SESSION_IDLE_MINUTES: 30,
  FINANCE_RANGES: [
    { label: "7 days", value: 7 },
    { label: "30 days", value: 30 },
    { label: "1 year", value: 365 }
  ],
  DEFAULT_FINANCE_RANGE_DAYS: 30,
  DEFAULT_SECTION: "A",
  DEFAULT_CAPACITY: 40,
  DEFAULT_FEE_LABEL: "Tuition fee",
  DEFAULT_GUARDIAN_RELATION: "Father",
  PHONE_PATTERN: /^\d{10}$/,
  AADHAAR_PATTERN: /^\d{12}$/,
  AADHAAR_MAX_LENGTH: 12,
  PHONE_MAX_LENGTH: 10,
  MIN_EXAM_QUESTIONS: 3,
  MAX_EXAM_QUESTIONS: 20,
  DEFAULT_EXAM_QUESTION_COUNT: 10,
  DEFAULT_EXAM_DURATION: 60,
  MIN_EXAM_DURATION: 5,
  PASS_PERCENTAGE: 40
};
var EXAM_DIFFICULTY = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
  MIXED: "mixed"
};
var ATTENDANCE_STATUS = {
  PRESENT: "present",
  ABSENT: "absent",
  LEAVE: "leave",
  HOLIDAY: "holiday",
  LATE: "late",
  HALF_DAY: "half_day"
};
var PAYMENT_MODES = {
  CASH: "cash",
  UPI: "upi",
  CARD: "card",
  BANK_TRANSFER: "bank_transfer",
  CHEQUE: "cheque"
};
var FEE_COMPONENT_PRESETS = [
  { key: "admission", label: "Admission Fee", frequency: "one_time", newAdmissionOnly: true },
  { key: "registration", label: "Registration Fee", frequency: "one_time", newAdmissionOnly: false },
  { key: "tuition", label: "Tuition Fee", frequency: "monthly", newAdmissionOnly: false },
  { key: "bus", label: "Bus Fee", frequency: "monthly", newAdmissionOnly: false },
  { key: "lab", label: "Lab Fee", frequency: "monthly", newAdmissionOnly: false }
];
var FEE_FREQUENCY_OPTIONS = [
  { value: "one_time", label: "One time" },
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
  { value: "half_yearly", label: "Half yearly" },
  { value: "yearly", label: "Yearly" }
];
var CLASS_NAME_OPTIONS = [
  "Nursery",
  "LKG",
  "UKG",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII"
];
var SECTION_OPTIONS = ["A", "B", "C", "D", "E", "F", "G", "H"];
var SUBJECT_OPTIONS = [
  "English",
  "Hindi",
  "Mathematics",
  "Science",
  "Physics",
  "Chemistry",
  "Biology",
  "Social Science",
  "History",
  "Geography",
  "Civics",
  "Economics",
  "Computer Science",
  "Information Technology",
  "Physical Education",
  "Environmental Studies",
  "General Knowledge",
  "Sanskrit",
  "Drawing & Art",
  "Music",
  "Accountancy",
  "Business Studies"
];

// src/app/services/toast.service.ts
var ToastService = class _ToastService {
  seq = 0;
  itemsSubject = new BehaviorSubject([]);
  items$ = this.itemsSubject.asObservable();
  show(type, text, durationMs = 4e3) {
    const id = ++this.seq;
    const next = [...this.itemsSubject.value, { id, type, text }];
    this.itemsSubject.next(next.slice(-4));
    window.setTimeout(() => this.dismiss(id), durationMs);
  }
  success(text) {
    this.show("success", text);
  }
  error(text) {
    this.show("error", text, 6e3);
  }
  warning(text) {
    this.show("warning", text, 5e3);
  }
  info(text) {
    this.show("info", text);
  }
  dismiss(id) {
    this.itemsSubject.next(this.itemsSubject.value.filter((item) => item.id !== id));
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};

// src/app/shared/toast-container.component.ts
function ToastContainerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 3);
    \u0275\u0275listener("click", function ToastContainerComponent_div_1_Template_button_click_3_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toastService.dismiss(toast_r2.id));
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    \u0275\u0275classProp("success", toast_r2.type === "success")("error", toast_r2.type === "error")("warning", toast_r2.type === "warning")("info", toast_r2.type === "info");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r2.text);
  }
}
var ToastContainerComponent = class _ToastContainerComponent {
  toastService = inject(ToastService);
  static \u0275fac = function ToastContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastContainerComponent, selectors: [["app-toast-container"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [["aria-live", "polite", 1, "toast-stack"], ["class", "toast", 3, "success", "error", "warning", "info", 4, "ngFor", "ngForOf"], [1, "toast"], ["type", "button", "aria-label", "Dismiss", 1, "toast-close", 3, "click"]], template: function ToastContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ToastContainerComponent_div_1_Template, 5, 9, "div", 1);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx.toastService.items$));
    }
  }, dependencies: [CommonModule, NgForOf, AsyncPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastContainerComponent, { className: "ToastContainerComponent", filePath: "src\\app\\shared\\toast-container.component.ts", lineNumber: 25 });
})();

// src/app/services/confirm-dialog.service.ts
var ConfirmDialogService = class _ConfirmDialogService {
  stateSubject = new BehaviorSubject(null);
  state$ = this.stateSubject.asObservable();
  confirm(options) {
    return new Promise((resolve) => {
      this.stateSubject.next({
        title: options.title || "Confirm action",
        message: options.message,
        confirmLabel: options.confirmLabel || "Confirm",
        cancelLabel: options.cancelLabel || "Cancel",
        danger: options.danger ?? false,
        resolve
      });
    });
  }
  answer(confirmed) {
    const state = this.stateSubject.value;
    if (!state)
      return;
    this.stateSubject.next(null);
    state.resolve(confirmed);
  }
  isOpen() {
    return this.stateSubject.value !== null;
  }
  static \u0275fac = function ConfirmDialogService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmDialogService, factory: _ConfirmDialogService.\u0275fac, providedIn: "root" });
};

// src/app/shared/confirm-dialog.component.ts
function ConfirmDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function ConfirmDialogComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmService.answer(false));
    });
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275listener("click", function ConfirmDialogComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h3", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "button", 6);
    \u0275\u0275listener("click", function ConfirmDialogComponent_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmService.answer(false));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 7, 0);
    \u0275\u0275listener("click", function ConfirmDialogComponent_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmService.answer(true));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const state_r3 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-labelledby", ctx_r1.dialogTitleId)("aria-describedby", ctx_r1.dialogMessageId);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r1.dialogTitleId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(state_r3.title);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r1.dialogMessageId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(state_r3.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(state_r3.cancelLabel);
    \u0275\u0275advance();
    \u0275\u0275classProp("danger-btn", state_r3.danger)("primary-btn", !state_r3.danger)("btn-destructive", state_r3.danger)("btn-primary", !state_r3.danger);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(state_r3.confirmLabel);
  }
}
var ConfirmDialogComponent = class _ConfirmDialogComponent {
  confirmService = inject(ConfirmDialogService);
  dialogTitleId = "confirm-dialog-title";
  dialogMessageId = "confirm-dialog-message";
  onKeydown(event) {
    if (!this.confirmService.isOpen())
      return;
    if (event.key === "Escape") {
      event.preventDefault();
      this.confirmService.answer(false);
    }
  }
  static \u0275fac = function ConfirmDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], hostBindings: function ConfirmDialogComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function ConfirmDialogComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeydown($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 3, consts: [["confirmBtn", ""], ["class", "confirm-overlay", 3, "click", 4, "ngIf"], [1, "confirm-overlay", 3, "click"], ["role", "alertdialog", "aria-modal", "true", 1, "confirm-dialog", 3, "click"], [3, "id"], [1, "confirm-actions"], ["type", "button", 1, "ghost", 3, "click"], ["type", "button", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ConfirmDialogComponent_div_0_Template, 12, 16, "div", 1);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.confirmService.state$));
    }
  }, dependencies: [CommonModule, NgIf, AsyncPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src\\app\\shared\\confirm-dialog.component.ts", lineNumber: 83 });
})();

// src/environments/environment.ts
var environment = {
  production: false,
  // Used only when not on *.localhost / *.schoolerp.local (direct ng serve → backend)
  apiBaseUrl: "http://localhost:5000/api",
  // *.localhost needs no hosts file — browsers resolve to 127.0.0.1
  rootDomain: "localhost",
  upi: {
    vpa: "school@upi",
    payeeName: "School ERP"
  }
};

// src/app/services/erp-api.service.ts
function resolveApiBaseUrl() {
  if (typeof window === "undefined")
    return environment.apiBaseUrl;
  const host = window.location.hostname.toLowerCase();
  const root = environment.rootDomain || "localhost";
  if (host === "admin.localhost" || host === "admin.schoolerp.local" || host.startsWith("admin.")) {
    return "/api/admin";
  }
  if (host === root || host.endsWith(`.${root}`) || host.endsWith(".schoolerp.local") || host.endsWith(".localhost") || host.endsWith(".myerp.com")) {
    return "/api/erp";
  }
  return environment.apiBaseUrl;
}
var ErpApiService = class _ErpApiService {
  http;
  constructor(http) {
    this.http = http;
  }
  get baseUrl() {
    return resolveApiBaseUrl();
  }
  schoolBranding() {
    return this.http.get(`${this.baseUrl}/public/branding`);
  }
  login(email, password) {
    return this.http.post(`${this.baseUrl}/auth/login`, { email, password });
  }
  logout() {
    return this.http.post(`${this.baseUrl}/auth/logout`, {}, this.options());
  }
  securityPolicy() {
    return this.http.get(`${this.baseUrl}/auth/security-policy`);
  }
  changePassword(currentPassword, newPassword) {
    return this.http.post(`${this.baseUrl}/auth/change-password`, { currentPassword, newPassword }, this.options());
  }
  verifyEmail(token, password) {
    return this.http.post(`${this.baseUrl}/auth/verify-email`, { token, password });
  }
  resendVerification(email) {
    return this.http.post(`${this.baseUrl}/auth/resend-verification`, { email });
  }
  forgotPassword(email) {
    return this.http.post(`${this.baseUrl}/auth/forgot-password`, { email });
  }
  verifyResetOtp(email, otp) {
    return this.http.post(`${this.baseUrl}/auth/verify-reset-otp`, { email, otp });
  }
  resetPassword(email, otp, password) {
    return this.http.post(`${this.baseUrl}/auth/reset-password`, { email, otp, password });
  }
  assignableRoles() {
    return this.http.get(`${this.baseUrl}/auth/assignable-roles`, this.options());
  }
  createUser(payload) {
    return this.http.post(`${this.baseUrl}/auth/users`, payload, this.options());
  }
  dashboard() {
    return this.http.get(`${this.baseUrl}/dashboard`, this.options());
  }
  academicYears(params) {
    return this.http.get(`${this.baseUrl}/academic-years`, this.listOptions(params));
  }
  createAcademicYear(payload) {
    return this.http.post(`${this.baseUrl}/academic-years`, payload, this.options());
  }
  updateAcademicYear(id, payload) {
    return this.http.patch(`${this.baseUrl}/academic-years/${id}`, payload, this.options());
  }
  activateAcademicYear(id) {
    return this.http.post(`${this.baseUrl}/academic-years/${id}/activate`, {}, this.options());
  }
  closeAcademicYear(id) {
    return this.http.post(`${this.baseUrl}/academic-years/${id}/close`, {}, this.options());
  }
  deleteAcademicYear(id) {
    return this.http.delete(`${this.baseUrl}/academic-years/${id}`, this.options());
  }
  classes(params) {
    return this.http.get(`${this.baseUrl}/classes`, this.listOptions(params));
  }
  createClass(payload) {
    return this.http.post(`${this.baseUrl}/classes`, payload, this.options());
  }
  updateClass(id, payload) {
    return this.http.patch(`${this.baseUrl}/classes/${id}`, payload, this.options());
  }
  deleteClass(id) {
    return this.http.delete(`${this.baseUrl}/classes/${id}`, this.options());
  }
  toggleClassStatus(id) {
    return this.http.post(`${this.baseUrl}/classes/${id}/toggle-status`, {}, this.options());
  }
  teachers(params) {
    return this.http.get(`${this.baseUrl}/teachers`, this.listOptions(params));
  }
  createTeacher(payload) {
    return this.http.post(`${this.baseUrl}/teachers`, payload, this.options());
  }
  updateTeacher(id, payload) {
    return this.http.patch(`${this.baseUrl}/teachers/${id}`, payload, this.options());
  }
  deleteTeacher(id) {
    return this.http.delete(`${this.baseUrl}/teachers/${id}`, this.options());
  }
  uploadTeacherDocument(teacherId, file, type) {
    const formData = new FormData();
    formData.append("document", file);
    formData.append("type", type);
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY) || "";
    return this.http.post(`${this.baseUrl}/teachers/${teacherId}/documents`, formData, {
      headers: token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders()
    });
  }
  selfUpdateTeacher(payload) {
    return this.http.patch(`${this.baseUrl}/teachers/self`, payload, this.options());
  }
  selfUploadTeacherDocument(file, type) {
    const formData = new FormData();
    formData.append("document", file);
    formData.append("type", type);
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY) || "";
    return this.http.post(`${this.baseUrl}/teachers/self/documents`, formData, {
      headers: token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders()
    });
  }
  verifyTeacherDocument(teacherId, docType, action, reason) {
    return this.http.post(`${this.baseUrl}/teachers/${teacherId}/verify-document`, { docType, action, reason }, this.options());
  }
  verifyStudentDocument(studentId, documentId, action, reason) {
    return this.http.post(`${this.baseUrl}/students/${studentId}/verify-document`, { documentId, action, reason }, this.options());
  }
  getStudentDocumentUrl(studentId, documentId) {
    return this.http.get(`${this.baseUrl}/students/${studentId}/documents/${documentId}/url`, this.options());
  }
  studentDocumentFileUrl(studentId, documentId, download = false) {
    const suffix = download ? "?download=1" : "";
    return `${this.baseUrl}/students/${studentId}/documents/${documentId}/file${suffix}`;
  }
  // Authenticated image URL usable directly in <img src> (token via query param).
  studentDocumentImageUrl(studentId, documentId) {
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY) || "";
    return `${this.baseUrl}/students/${studentId}/documents/${documentId}/file?access_token=${encodeURIComponent(token)}`;
  }
  teacherDocumentFileUrl(teacherId, docType, download = false) {
    const suffix = download ? "?download=1" : "";
    return `${this.baseUrl}/teachers/${teacherId}/documents/${docType}/file${suffix}`;
  }
  // Authenticated image URL usable directly in <img src> (token via query param).
  teacherDocumentImageUrl(teacherId, docType) {
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY) || "";
    return `${this.baseUrl}/teachers/${teacherId}/documents/${docType}/file?access_token=${encodeURIComponent(token)}`;
  }
  getTeacherDocumentUrl(teacherId, docType) {
    return this.http.get(`${this.baseUrl}/teachers/${teacherId}/documents/${docType}/url`, this.options());
  }
  teacherEntryDocumentFileUrl(teacherId, section, index, download = false) {
    const suffix = download ? "?download=1" : "";
    return `${this.baseUrl}/teachers/${teacherId}/entries/${section}/${index}/file${suffix}`;
  }
  students(params) {
    return this.http.get(`${this.baseUrl}/students`, this.listOptions(params));
  }
  studentDetails(id) {
    return this.http.get(`${this.baseUrl}/students/${id}`, this.options());
  }
  searchParents(term) {
    const params = new HttpParams().set("q", term || "");
    return this.http.get(`${this.baseUrl}/students/parents/search`, __spreadProps(__spreadValues({}, this.options()), { params }));
  }
  studentProfile(id) {
    return this.http.get(`${this.baseUrl}/students/${id}/profile`, this.options());
  }
  createAdmission(formData) {
    return this.http.post(`${this.baseUrl}/students/admissions`, formData, this.options());
  }
  updateStudent(id, payload) {
    return this.http.patch(`${this.baseUrl}/students/${id}`, payload, this.options());
  }
  updateStudentStatus(id, status, reason) {
    return this.http.patch(`${this.baseUrl}/students/${id}/status`, { status, reason }, this.options());
  }
  replaceStudentDocument(studentId, documentId, formData) {
    return this.http.put(`${this.baseUrl}/students/${studentId}/documents/${documentId}`, formData, this.options());
  }
  deleteStudentDocument(studentId, documentId) {
    return this.http.delete(`${this.baseUrl}/students/${studentId}/documents/${documentId}`, this.options());
  }
  deleteStudent(id) {
    return this.http.delete(`${this.baseUrl}/students/${id}`, this.options());
  }
  promote(payload) {
    return this.http.post(`${this.baseUrl}/students/promotions`, payload, this.options());
  }
  promotionEligible(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value)
        httpParams = httpParams.set(key, value);
    }
    return this.http.get(`${this.baseUrl}/promotions/eligible`, __spreadProps(__spreadValues({}, this.options()), { params: httpParams }));
  }
  promotionPreview(payload) {
    return this.http.post(`${this.baseUrl}/promotions/preview`, payload, this.options());
  }
  promotionExecute(payload) {
    return this.http.post(`${this.baseUrl}/promotions/execute`, payload, this.options());
  }
  promotionRollback(batchId) {
    return this.http.post(`${this.baseUrl}/promotions/batches/${batchId}/rollback`, {}, this.options());
  }
  promotionFinalize(batchId) {
    return this.http.post(`${this.baseUrl}/promotions/batches/${batchId}/finalize`, {}, this.options());
  }
  promotionReport(type, params) {
    let httpParams = new HttpParams();
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value)
          httpParams = httpParams.set(key, value);
      }
    }
    return this.http.get(`${this.baseUrl}/promotions/reports/${type}`, __spreadProps(__spreadValues({}, this.options()), { params: httpParams }));
  }
  invoices(params) {
    return this.http.get(`${this.baseUrl}/fees/invoices`, this.listOptions(params));
  }
  feeSummary(params) {
    let httpParams = new HttpParams();
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value)
          httpParams = httpParams.set(key, value);
      }
    }
    return this.http.get(`${this.baseUrl}/fees/summary`, __spreadProps(__spreadValues({}, this.options()), { params: httpParams }));
  }
  feePredictionDashboard(params) {
    let httpParams = new HttpParams();
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value)
          httpParams = httpParams.set(key, value);
      }
    }
    return this.http.get(`${this.baseUrl}/fee-predictions/dashboard`, __spreadProps(__spreadValues({}, this.options()), {
      params: httpParams
    }));
  }
  prepareFeeReminders(studentIds) {
    return this.http.post(`${this.baseUrl}/fee-predictions/reminders/prepare`, { studentIds }, this.options());
  }
  sendFeeReminders(studentIds, channel = "all") {
    return this.http.post(`${this.baseUrl}/fee-predictions/reminders/send`, { studentIds, channel }, this.options());
  }
  timetableGeneratorDashboard(params) {
    let httpParams = new HttpParams();
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value)
          httpParams = httpParams.set(key, value);
      }
    }
    return this.http.get(`${this.baseUrl}/timetable-generator/dashboard`, __spreadProps(__spreadValues({}, this.options()), {
      params: httpParams
    }));
  }
  generateTimetable(body) {
    return this.http.post(`${this.baseUrl}/timetable-generator/generate`, body || {}, this.options());
  }
  updateTimetablePlanConfig(planId, body) {
    return this.http.put(`${this.baseUrl}/timetable-generator/plans/${planId}/config`, body, this.options());
  }
  validateTimetablePlan(planId) {
    return this.http.post(`${this.baseUrl}/timetable-generator/plans/${planId}/validate`, {}, this.options());
  }
  moveTimetableSlot(planId, body) {
    return this.http.post(`${this.baseUrl}/timetable-generator/plans/${planId}/move`, body, this.options());
  }
  updateTimetableSlot(planId, slotId, body) {
    return this.http.patch(`${this.baseUrl}/timetable-generator/plans/${planId}/slots/${slotId}`, body, this.options());
  }
  assignTimetableSlot(planId, body) {
    return this.http.post(`${this.baseUrl}/timetable-generator/plans/${planId}/slots`, body, this.options());
  }
  reopenTimetablePlanForEdit(planId) {
    return this.http.post(`${this.baseUrl}/timetable-generator/plans/${planId}/reopen`, {}, this.options());
  }
  applyTimetablePlan(planId) {
    return this.http.post(`${this.baseUrl}/timetable-generator/plans/${planId}/apply`, {}, this.options());
  }
  timetablePlanPdfUrl(planId, classRoom) {
    const q = classRoom ? `?classRoom=${encodeURIComponent(classRoom)}` : "";
    return `${this.baseUrl}/timetable-generator/plans/${planId}/pdf${q}`;
  }
  generateFeeDemands(payload) {
    return this.http.post(`${this.baseUrl}/fees/demands/generate`, payload, this.options());
  }
  feeStructureForClass(academicYear, target) {
    const params = typeof target === "string" ? { classRoom: target } : target;
    let httpParams = new HttpParams().set("academicYear", academicYear);
    if (params.className)
      httpParams = httpParams.set("className", params.className);
    if (params.classRoom)
      httpParams = httpParams.set("classRoom", params.classRoom);
    return this.http.get(`${this.baseUrl}/fees/structures/for-class`, __spreadProps(__spreadValues({}, this.options()), { params: httpParams }));
  }
  saveFeeStructure(payload) {
    return this.http.put(`${this.baseUrl}/fees/structures`, payload, this.options());
  }
  deleteFeeStructure(id) {
    return this.http.delete(`${this.baseUrl}/fees/structures/${id}`, this.options());
  }
  previewFeeDemand(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value)
        httpParams = httpParams.set(key, value);
    }
    return this.http.get(`${this.baseUrl}/fees/invoices/preview`, __spreadProps(__spreadValues({}, this.options()), { params: httpParams }));
  }
  feeHistory(params) {
    return this.http.get(`${this.baseUrl}/fees/history`, this.listOptions(params));
  }
  createInvoice(payload) {
    return this.http.post(`${this.baseUrl}/fees/invoices`, payload, this.options());
  }
  updateInvoice(id, payload) {
    return this.http.patch(`${this.baseUrl}/fees/invoices/${id}`, payload, this.options());
  }
  invoicePdfUrl(id) {
    return `${this.baseUrl}/fees/invoices/${id}/pdf`;
  }
  receiptPdfUrl(invoiceId, paymentId) {
    return `${this.baseUrl}/fees/invoices/${invoiceId}/receipts/${paymentId}/pdf`;
  }
  addPayment(invoiceId, payload) {
    return this.http.post(`${this.baseUrl}/fees/invoices/${invoiceId}/payments`, payload, this.options());
  }
  voidFeePayment(invoiceId, paymentId, reason) {
    return this.http.post(`${this.baseUrl}/fees/invoices/${invoiceId}/payments/${paymentId}/void`, { reason }, this.options());
  }
  unlockFeePayment(invoiceId, paymentId) {
    return this.http.post(`${this.baseUrl}/fees/invoices/${invoiceId}/payments/${paymentId}/unlock`, {}, this.options());
  }
  createPayroll(payload) {
    return this.http.post(`${this.baseUrl}/payroll`, payload, this.options());
  }
  updatePayroll(id, payload) {
    return this.http.patch(`${this.baseUrl}/payroll/${id}`, payload, this.options());
  }
  deletePayroll(id) {
    return this.http.delete(`${this.baseUrl}/payroll/${id}`, this.options());
  }
  markPayrollPaid(id) {
    return this.http.post(`${this.baseUrl}/payroll/${id}/mark-paid`, {}, this.options());
  }
  payroll(params) {
    return this.http.get(`${this.baseUrl}/payroll`, this.listOptions(params));
  }
  payrollPdfUrl(id) {
    return `${this.baseUrl}/payroll/${id}/pdf`;
  }
  attendance(params) {
    return this.http.get(`${this.baseUrl}/attendance`, this.listOptions(params));
  }
  markAttendance(payload) {
    return this.http.post(`${this.baseUrl}/attendance/mark`, payload, this.options());
  }
  selfAttendanceStatus() {
    return this.http.get(`${this.baseUrl}/attendance/self-status`, this.options());
  }
  selfMarkAttendance(status = "present") {
    return this.http.post(`${this.baseUrl}/attendance/self-mark`, { status }, this.options());
  }
  attendanceRegister(params) {
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value)
        httpParams = httpParams.set(key, value);
    });
    return this.http.get(`${this.baseUrl}/attendance/register`, __spreadProps(__spreadValues({}, this.options()), { params: httpParams }));
  }
  saveAttendanceRegister(payload) {
    return this.http.post(`${this.baseUrl}/attendance/register/save`, payload, this.options());
  }
  submitAttendanceRegister(payload) {
    return this.http.post(`${this.baseUrl}/attendance/register/submit`, payload, this.options());
  }
  lockAttendanceRegister(payload) {
    return this.http.post(`${this.baseUrl}/attendance/register/lock`, payload, this.options());
  }
  unlockAttendanceRegister(payload) {
    return this.http.post(`${this.baseUrl}/attendance/register/unlock`, payload, this.options());
  }
  attendanceReport(type, params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value)
          httpParams = httpParams.set(key, value);
      });
    }
    return this.http.get(`${this.baseUrl}/attendance/reports/${type}`, __spreadProps(__spreadValues({}, this.options()), { params: httpParams }));
  }
  attendanceReportPdfUrl(type, params) {
    const query = new URLSearchParams(params || {}).toString();
    return `${this.baseUrl}/attendance/reports/${type}/pdf${query ? `?${query}` : ""}`;
  }
  timetable() {
    return this.http.get(`${this.baseUrl}/timetable`, this.options());
  }
  saveTimetable(payload) {
    return this.http.post(`${this.baseUrl}/timetable`, payload, this.options());
  }
  deleteTimetablePeriod(timetableId, periodId) {
    return this.http.delete(`${this.baseUrl}/timetable/${timetableId}/periods/${periodId}`, this.options());
  }
  exams(params) {
    return this.http.get(`${this.baseUrl}/exams`, this.listOptions(params));
  }
  examDetails(id) {
    return this.http.get(`${this.baseUrl}/exams/${id}`, this.options());
  }
  generateExam(payload) {
    return this.http.post(`${this.baseUrl}/exams/generate`, payload, this.options());
  }
  generateExamFromPdf(formData) {
    return this.http.post(`${this.baseUrl}/exams/generate-from-pdf`, formData, this.options());
  }
  updateExam(id, payload) {
    return this.http.patch(`${this.baseUrl}/exams/${id}`, payload, this.options());
  }
  publishExam(id, payload = {}) {
    return this.http.post(`${this.baseUrl}/exams/${id}/publish`, payload, this.options());
  }
  closeExam(id) {
    return this.http.post(`${this.baseUrl}/exams/${id}/close`, {}, this.options());
  }
  deleteExam(id) {
    return this.http.delete(`${this.baseUrl}/exams/${id}`, this.options());
  }
  startExamAttempt(id) {
    return this.http.post(`${this.baseUrl}/exams/${id}/start`, {}, this.options());
  }
  submitExamAttempt(id, answers) {
    return this.http.post(`${this.baseUrl}/exams/${id}/submit`, { answers }, this.options());
  }
  examResults(examId) {
    const query = examId ? `?exam=${examId}` : "";
    return this.http.get(`${this.baseUrl}/exams/results${query}`, this.options());
  }
  examClassReport(id) {
    return this.http.get(`${this.baseUrl}/exams/${id}/report`, this.options());
  }
  listUsers(params) {
    return this.http.get(`${this.baseUrl}/auth/users`, this.listOptions(params));
  }
  deactivateUser(id) {
    return this.http.post(`${this.baseUrl}/auth/users/${id}/deactivate`, {}, this.options());
  }
  issueTemporaryPassword(id) {
    return this.http.post(`${this.baseUrl}/auth/users/${id}/temporary-password`, {}, this.options());
  }
  unlockUserAccount(id) {
    return this.http.post(`${this.baseUrl}/auth/users/${id}/unlock`, {}, this.options());
  }
  deleteUser(id) {
    return this.http.delete(`${this.baseUrl}/auth/users/${id}`, this.options());
  }
  roles() {
    return this.http.get(`${this.baseUrl}/roles`, this.options());
  }
  rolePermissionSchema() {
    return this.http.get(`${this.baseUrl}/roles/schema`, this.options());
  }
  createRole(payload) {
    return this.http.post(`${this.baseUrl}/roles`, payload, this.options());
  }
  updateRolePermissions(slug, permissions) {
    return this.http.patch(`${this.baseUrl}/roles/${slug}/permissions`, { permissions }, this.options());
  }
  deleteRole(slug) {
    return this.http.delete(`${this.baseUrl}/roles/${slug}`, this.options());
  }
  me() {
    return this.http.get(`${this.baseUrl}/auth/me`, this.options());
  }
  holidays() {
    return this.http.get(`${this.baseUrl}/holidays`, this.options());
  }
  createHoliday(payload) {
    return this.http.post(`${this.baseUrl}/holidays`, payload, this.options());
  }
  deleteHoliday(id) {
    return this.http.delete(`${this.baseUrl}/holidays/${id}`, this.options());
  }
  busRoutes(params) {
    return this.http.get(`${this.baseUrl}/transport/routes`, this.listOptions(params));
  }
  createBusRoute(payload) {
    return this.http.post(`${this.baseUrl}/transport/routes`, payload, this.options());
  }
  updateBusRoute(id, payload) {
    return this.http.patch(`${this.baseUrl}/transport/routes/${id}`, payload, this.options());
  }
  toggleBusRouteStatus(id) {
    return this.http.post(`${this.baseUrl}/transport/routes/${id}/toggle-status`, {}, this.options());
  }
  deleteBusRoute(id) {
    return this.http.delete(`${this.baseUrl}/transport/routes/${id}`, this.options());
  }
  vehicles(params) {
    return this.http.get(`${this.baseUrl}/drivers/vehicles`, this.listOptions(params));
  }
  createVehicle(payload) {
    return this.http.post(`${this.baseUrl}/drivers/vehicles`, payload, this.options());
  }
  updateVehicle(id, payload) {
    return this.http.patch(`${this.baseUrl}/drivers/vehicles/${id}`, payload, this.options());
  }
  vehicleDocumentImageUrl(vehicleId, docType) {
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY) || "";
    return `${this.baseUrl}/drivers/vehicles/${vehicleId}/documents/${docType}/file?access_token=${encodeURIComponent(token)}`;
  }
  vehicleDocumentFileUrl(vehicleId, docType, download = false) {
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY) || "";
    const dl = download ? "&download=1" : "";
    return `${this.baseUrl}/drivers/vehicles/${vehicleId}/documents/${docType}/file?access_token=${encodeURIComponent(token)}${dl}`;
  }
  toggleVehicleStatus(id) {
    return this.http.post(`${this.baseUrl}/drivers/vehicles/${id}/toggle-status`, {}, this.options());
  }
  deleteVehicle(id) {
    return this.http.delete(`${this.baseUrl}/drivers/vehicles/${id}`, this.options());
  }
  driverSalaryRegister(month, year) {
    return this.http.get(`${this.baseUrl}/drivers/driver-salaries/register?month=${month}&year=${year}`, this.options());
  }
  payDriverSalary(payload) {
    return this.http.post(`${this.baseUrl}/drivers/driver-salaries`, payload, this.options());
  }
  revertDriverSalary(id) {
    return this.http.delete(`${this.baseUrl}/drivers/driver-salaries/${id}`, this.options());
  }
  busRegistrations(params) {
    return this.http.get(`${this.baseUrl}/transport/registrations`, this.listOptions(params));
  }
  createBusRegistration(payload) {
    return this.http.post(`${this.baseUrl}/transport/registrations`, payload, this.options());
  }
  updateBusRegistration(id, payload) {
    return this.http.patch(`${this.baseUrl}/transport/registrations/${id}`, payload, this.options());
  }
  deactivateBusRegistration(id) {
    return this.http.post(`${this.baseUrl}/transport/registrations/${id}/deactivate`, {}, this.options());
  }
  busReport(type, params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value)
          httpParams = httpParams.set(key, value);
      });
    }
    return this.http.get(`${this.baseUrl}/transport/reports/${type}`, __spreadProps(__spreadValues({}, this.options()), { params: httpParams }));
  }
  busReportPdfUrl(type, params) {
    const query = new URLSearchParams(params || {}).toString();
    return `${this.baseUrl}/transport/reports/${type}/pdf${query ? `?${query}` : ""}`;
  }
  report(domain, type, params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value)
          httpParams = httpParams.set(key, value);
      });
    }
    return this.http.get(`${this.baseUrl}/reports/${domain}/${type}`, __spreadProps(__spreadValues({}, this.options()), { params: httpParams }));
  }
  reportPdfUrl(domain, type, params) {
    const query = new URLSearchParams(params || {}).toString();
    return `${this.baseUrl}/reports/${domain}/${type}/pdf${query ? `?${query}` : ""}`;
  }
  workflowNotifications() {
    return this.http.get(`${this.baseUrl}/workflow/notifications`, this.options());
  }
  dismissWorkflowNotification(key) {
    return this.http.post(`${this.baseUrl}/workflow/notifications/dismiss`, { key }, this.options());
  }
  globalSearch(query) {
    const params = new HttpParams().set("q", query);
    return this.http.get(`${this.baseUrl}/workflow/search`, __spreadProps(__spreadValues({}, this.options()), { params }));
  }
  workflowBulk(operation, payload) {
    return this.http.post(`${this.baseUrl}/workflow/bulk`, { operation, payload, confirmed: true }, this.options());
  }
  unlockPayroll(id) {
    return this.http.post(`${this.baseUrl}/payroll/${id}/unlock`, {}, this.options());
  }
  workflowDefaults() {
    return this.http.get(`${this.baseUrl}/workflow/defaults`, this.options());
  }
  listOptions(params) {
    const base = this.options();
    if (!params)
      return base;
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== void 0 && value !== null && value !== "") {
        httpParams = httpParams.set(key, String(value));
      }
    });
    return __spreadProps(__spreadValues({}, base), { params: httpParams });
  }
  options() {
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY) || "";
    return { headers: token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders() };
  }
  static \u0275fac = function ErpApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErpApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ErpApiService, factory: _ErpApiService.\u0275fac, providedIn: "root" });
};

// src/app/services/listing-state.service.ts
var ListingStateService = class _ListingStateService {
  prefix = "erp_list_";
  persistentPrefix = "erp_list_persist_";
  load(listKey) {
    return this.read(`${this.persistentPrefix}${listKey}`) || this.read(`${this.prefix}${listKey}`);
  }
  save(listKey, state) {
    sessionStorage.setItem(`${this.prefix}${listKey}`, JSON.stringify(state));
    localStorage.setItem(`${this.persistentPrefix}${listKey}`, JSON.stringify(state));
  }
  clear(listKey) {
    sessionStorage.removeItem(`${this.prefix}${listKey}`);
    localStorage.removeItem(`${this.persistentPrefix}${listKey}`);
  }
  clearAll(listKeys) {
    for (const key of listKeys)
      this.clear(key);
  }
  read(key) {
    try {
      const raw = localStorage.getItem(key) || sessionStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  static \u0275fac = function ListingStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListingStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ListingStateService, factory: _ListingStateService.\u0275fac, providedIn: "root" });
};

// src/app/services/session-context.service.ts
var SessionContextService = class _SessionContextService {
  key = "erp_workspace_context";
  load() {
    try {
      const raw = sessionStorage.getItem(this.key);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }
  save(context) {
    sessionStorage.setItem(this.key, JSON.stringify(context));
  }
  patch(partial) {
    this.save(__spreadValues(__spreadValues({}, this.load()), partial));
  }
  clear() {
    sessionStorage.removeItem(this.key);
  }
  static \u0275fac = function SessionContextService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SessionContextService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SessionContextService, factory: _SessionContextService.\u0275fac, providedIn: "root" });
};

// src/app/services/permission.service.ts
var TAB_MODULE_MAP = {
  dashboard: "dashboard",
  students: "students",
  classes: "classes",
  teachers: "teachers",
  fees: "fees",
  "fee-prediction": "fee_prediction",
  "timetable-generator": "timetable_generator",
  payroll: "payroll",
  transport: "transport",
  drivers: "drivers",
  promotion: "students",
  attendance: "attendance",
  timetable: "timetable",
  exams: "exams",
  profile: "students",
  users: "users",
  reports: "reports"
};
var ROLE_TAB_ALLOWLIST = {
  student: ["dashboard", "profile", "fees", "attendance", "exams"],
  parent: ["dashboard", "profile", "fees", "attendance", "exams"]
};
var PermissionService = class _PermissionService {
  permissions = {};
  setPermissions(permissions) {
    this.permissions = permissions || {};
  }
  clear() {
    this.permissions = {};
  }
  can(module, action, role) {
    if (role === "super_admin")
      return true;
    return !!this.permissions?.[module]?.[action];
  }
  canViewTab(tabKey, role) {
    const module = TAB_MODULE_MAP[tabKey];
    if (!module)
      return false;
    const allowlist = role ? ROLE_TAB_ALLOWLIST[role] : void 0;
    if (allowlist && !allowlist.includes(tabKey))
      return false;
    return this.can(module, "view", role);
  }
  canViewSensitivePii(module, role) {
    if (role === "super_admin" || role === "admin" || role === "principal")
      return true;
    return this.can(module, "edit", role);
  }
  static \u0275fac = function PermissionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PermissionService, factory: _PermissionService.\u0275fac, providedIn: "root" });
};

// src/app/app.component.ts
var AppComponent_main_1_Defer_52_DepsFn = () => [NgIf, import("./chunk-5B7OWJ4T.js").then((m) => m.DashboardPageComponent)];
var AppComponent_main_1_Defer_56_DepsFn = () => [NgIf, import("./chunk-ODRZG3WL.js").then((m) => m.StudentsPageComponent)];
var AppComponent_main_1_Defer_60_DepsFn = () => [NgIf, import("./chunk-KHQLY4ES.js").then((m) => m.ClassesPageComponent)];
var AppComponent_main_1_Defer_64_DepsFn = () => [NgIf, import("./chunk-TQN3WFNK.js").then((m) => m.TeachersPageComponent)];
var AppComponent_main_1_Defer_68_DepsFn = () => [NgIf, import("./chunk-QOM4E5OB.js").then((m) => m.FeesPageComponent)];
var AppComponent_main_1_Defer_72_DepsFn = () => [NgIf, import("./chunk-BB6ZYZJB.js").then((m) => m.FeePredictionPageComponent)];
var AppComponent_main_1_Defer_76_DepsFn = () => [NgIf, import("./chunk-36U47CIA.js").then((m) => m.TransportPageComponent)];
var AppComponent_main_1_Defer_80_DepsFn = () => [NgIf, import("./chunk-6NWTTFHH.js").then((m) => m.DriversPageComponent)];
var AppComponent_main_1_Defer_84_DepsFn = () => [NgIf, import("./chunk-TCH3RUBV.js").then((m) => m.ReportsPageComponent)];
var AppComponent_main_1_Defer_88_DepsFn = () => [NgIf, import("./chunk-MMX5DIK3.js").then((m) => m.PayrollPageComponent)];
var AppComponent_main_1_Defer_92_DepsFn = () => [NgIf, import("./chunk-XTEXNGCT.js").then((m) => m.PromotionPageComponent)];
var AppComponent_main_1_Defer_96_DepsFn = () => [NgIf, import("./chunk-XP7DQN6C.js").then((m) => m.AttendancePageComponent)];
var AppComponent_main_1_Defer_100_DepsFn = () => [NgIf, import("./chunk-M5MC276J.js").then((m) => m.TimetableGeneratorPageComponent)];
var AppComponent_main_1_Defer_104_DepsFn = () => [NgIf, import("./chunk-44PLYNNI.js").then((m) => m.ExamsPageComponent)];
var AppComponent_main_1_Defer_108_DepsFn = () => [NgIf, import("./chunk-WK7DHQJN.js").then((m) => m.StudentProfilePageComponent)];
var AppComponent_main_1_Defer_112_DepsFn = () => [NgIf, import("./chunk-ALEI3BI4.js").then((m) => m.UsersPageComponent)];
function AppComponent_main_0_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.schoolBrand == null ? null : ctx_r1.schoolBrand.logoUrl, \u0275\u0275sanitizeUrl)("alt", (ctx_r1.schoolBrand == null ? null : ctx_r1.schoolBrand.name) || "School logo");
  }
}
function AppComponent_main_0_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.schoolBrand == null ? null : ctx_r1.schoolBrand.website);
  }
}
function AppComponent_main_0_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1, "Admissions, fees, payroll, AI exams, and parent insights \u2014 all in one place.");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_main_0_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function AppComponent_main_0_button_12_Template_button_click_0_listener() {
      const role_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectLoginRole(role_r4.key));
    });
    \u0275\u0275element(1, "span", 29);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const role_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.selectedLoginRole === role_r4.key);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-role", role_r4.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r4.description);
  }
}
function AppComponent_main_0_p_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.message);
  }
}
function AppComponent_main_0_div_38_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.resendVerificationMessage);
  }
}
function AppComponent_main_0_div_38_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.resendVerificationError);
  }
}
function AppComponent_main_0_div_38_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1, " Dev link: ");
    \u0275\u0275elementStart(2, "a", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r1.resendVerificationDevLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.resendVerificationDevLink);
  }
}
function AppComponent_main_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "p", 32);
    \u0275\u0275text(2, "Didn\u2019t verify your email yet? We can send a new link to the address you entered above.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 33);
    \u0275\u0275listener("click", function AppComponent_main_0_div_38_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resendVerificationEmail());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AppComponent_main_0_div_38_p_5_Template, 2, 1, "p", 34)(6, AppComponent_main_0_div_38_p_6_Template, 2, 1, "p", 23)(7, AppComponent_main_0_div_38_p_7_Template, 4, 2, "p", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.resendVerificationLoading || ctx_r1.resendVerificationSeconds > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.resendVerificationLoading ? "Sending\u2026" : ctx_r1.resendVerificationSeconds > 0 ? "Resend in " + ctx_r1.resendVerificationSeconds + "s" : "Resend verification link", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resendVerificationMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resendVerificationError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resendVerificationDevLink);
  }
}
function AppComponent_main_0_div_39_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.verifyEmailMessage);
  }
}
function AppComponent_main_0_div_39_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.verifyEmailError);
  }
}
function AppComponent_main_0_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function AppComponent_main_0_div_39_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeVerifyEmailPanel());
    });
    \u0275\u0275elementStart(1, "div", 40);
    \u0275\u0275listener("click", function AppComponent_main_0_div_39_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 41)(3, "div")(4, "p", 7);
    \u0275\u0275text(5, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Verify your email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 42);
    \u0275\u0275listener("click", function AppComponent_main_0_div_39_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeVerifyEmailPanel());
    });
    \u0275\u0275text(9, "Close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 43)(11, "p", 44);
    \u0275\u0275text(12, "Confirm this email address to activate your account. Optionally set a new password below.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 17)(14, "span");
    \u0275\u0275text(15, "New password (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function AppComponent_main_0_div_39_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.verifyEmailPassword, $event) || (ctx_r1.verifyEmailPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "label", 17)(18, "span");
    \u0275\u0275text(19, "Confirm password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function AppComponent_main_0_div_39_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.verifyEmailConfirmPassword, $event) || (ctx_r1.verifyEmailConfirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, AppComponent_main_0_div_39_p_21_Template, 2, 1, "p", 34)(22, AppComponent_main_0_div_39_p_22_Template, 2, 1, "p", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 47)(24, "button", 48);
    \u0275\u0275listener("click", function AppComponent_main_0_div_39_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeVerifyEmailPanel());
    });
    \u0275\u0275text(25, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 49);
    \u0275\u0275listener("click", function AppComponent_main_0_div_39_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitEmailVerification());
    });
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.verifyEmailPassword);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.verifyEmailConfirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.verifyEmailMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.verifyEmailError);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.verifyEmailLoading || !!ctx_r1.verifyEmailMessage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.verifyEmailLoading ? "Verifying\u2026" : ctx_r1.verifyEmailMessage ? "Verified" : "Verify email", " ");
  }
}
function AppComponent_main_0_div_40_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 44);
    \u0275\u0275text(2, "Enter your registered email and we'll send a one-time verification code (OTP) to reset your password.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 17)(4, "span");
    \u0275\u0275text(5, "Email address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function AppComponent_main_0_div_40_ng_container_12_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1, "Dev mode (email not configured): your code is ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.forgotDevOtp);
  }
}
function AppComponent_main_0_div_40_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 44);
    \u0275\u0275text(2, "We sent a one-time code to ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ". Enter it below with your new password.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 17)(7, "span");
    \u0275\u0275text(8, "Verification code (OTP)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 17)(11, "span");
    \u0275\u0275text(12, "New password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label", 17)(15, "span");
    \u0275\u0275text(16, "Confirm new password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, AppComponent_main_0_div_40_ng_container_12_p_18_Template, 4, 1, "p", 35);
    \u0275\u0275elementStart(19, "button", 58);
    \u0275\u0275listener("click", function AppComponent_main_0_div_40_ng_container_12_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.requestResetOtp());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.forgotForm.get("email")) == null ? null : tmp_3_0.value);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", ctx_r1.forgotDevOtp);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.forgotLoading || ctx_r1.forgotResendSeconds > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.forgotResendSeconds > 0 ? "Resend code in " + ctx_r1.forgotResendSeconds + "s" : "Resend code", " ");
  }
}
function AppComponent_main_0_div_40_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.forgotMessage);
  }
}
function AppComponent_main_0_div_40_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.forgotError);
  }
}
function AppComponent_main_0_div_40_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function AppComponent_main_0_div_40_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.requestResetOtp());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.forgotLoading || ((tmp_3_0 = ctx_r1.forgotForm.get("email")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.forgotLoading ? "Sending\u2026" : "Send code", " ");
  }
}
function AppComponent_main_0_div_40_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function AppComponent_main_0_div_40_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.submitResetPassword());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.forgotLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.forgotLoading ? "Resetting\u2026" : "Reset password", " ");
  }
}
function AppComponent_main_0_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function AppComponent_main_0_div_40_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeForgotPassword());
    });
    \u0275\u0275elementStart(1, "div", 40);
    \u0275\u0275listener("click", function AppComponent_main_0_div_40_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 41)(3, "div")(4, "p", 7);
    \u0275\u0275text(5, "Account recovery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 50);
    \u0275\u0275listener("click", function AppComponent_main_0_div_40_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeForgotPassword());
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 51);
    \u0275\u0275template(11, AppComponent_main_0_div_40_ng_container_11_Template, 7, 0, "ng-container", 52)(12, AppComponent_main_0_div_40_ng_container_12_Template, 21, 4, "ng-container", 52)(13, AppComponent_main_0_div_40_p_13_Template, 2, 1, "p", 34)(14, AppComponent_main_0_div_40_p_14_Template, 2, 1, "p", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 47)(16, "button", 48);
    \u0275\u0275listener("click", function AppComponent_main_0_div_40_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeForgotPassword());
    });
    \u0275\u0275text(17, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, AppComponent_main_0_div_40_button_18_Template, 2, 2, "button", 53)(19, AppComponent_main_0_div_40_button_19_Template, 2, 2, "button", 53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.forgotStep === "request" ? "Forgot password" : "Enter code & new password");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.forgotForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.forgotStep === "request");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.forgotStep === "reset");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.forgotMessage && !ctx_r1.forgotError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.forgotError);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.forgotStep === "request");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.forgotStep === "reset");
  }
}
function AppComponent_main_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 4)(2, "aside", 5)(3, "div", 6)(4, "p", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AppComponent_main_0_img_6_Template, 1, 2, "img", 8);
    \u0275\u0275elementStart(7, "h1");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AppComponent_main_0_p_9_Template, 2, 1, "p", 9)(10, AppComponent_main_0_p_10_Template, 2, 0, "p", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275template(12, AppComponent_main_0_button_12_Template, 6, 5, "button", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "section", 12)(14, "div", 13)(15, "span", 14);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h2");
    \u0275\u0275text(18, "Welcome back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 15);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "form", 16);
    \u0275\u0275listener("ngSubmit", function AppComponent_main_0_Template_form_ngSubmit_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.login());
    });
    \u0275\u0275elementStart(22, "label", 17)(23, "span");
    \u0275\u0275text(24, "Email, username or phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "label", 17)(27, "span");
    \u0275\u0275text(28, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 20)(31, "button", 21);
    \u0275\u0275listener("click", function AppComponent_main_0_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForgotPassword());
    });
    \u0275\u0275text(32, "Forgot password?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 21);
    \u0275\u0275listener("click", function AppComponent_main_0_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.needsEmailVerification = true;
      return \u0275\u0275resetView(ctx_r1.resendVerificationEmail());
    });
    \u0275\u0275text(34, " Resend verification link ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 22);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, AppComponent_main_0_p_37_Template, 2, 1, "p", 23)(38, AppComponent_main_0_div_38_Template, 8, 5, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, AppComponent_main_0_div_39_Template, 28, 6, "div", 25)(40, AppComponent_main_0_div_40_Template, 20, 8, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.schoolBrand == null ? null : ctx_r1.schoolBrand.isAdmin) ? "Platform Admin" : "CampusFlow ERP");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.schoolBrand == null ? null : ctx_r1.schoolBrand.logoUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.schoolBrand == null ? null : ctx_r1.schoolBrand.name) || "Smart school management");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.schoolBrand == null ? null : ctx_r1.schoolBrand.website);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.schoolBrand == null ? null : ctx_r1.schoolBrand.website));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.loginRoles);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-role", ctx_r1.selectedLoginRole);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.selectedRoleLabel, " login");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedRoleHint);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.loginForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", ctx_r1.selectedRolePlaceholder);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.loginForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Sign in as ", ctx_r1.selectedRoleLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.needsEmailVerification);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showVerifyEmailPanel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showForgotPassword);
  }
}
function AppComponent_main_1_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 91);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.schoolBrand == null ? null : ctx_r1.schoolBrand.logoUrl, \u0275\u0275sanitizeUrl);
  }
}
function AppComponent_main_1_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 92);
    \u0275\u0275listener("click", function AppComponent_main_1_button_17_Template_button_click_0_listener() {
      const tab_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTab(tab_r13.key));
    });
    \u0275\u0275element(1, "span", 93);
    \u0275\u0275elementStart(2, "span", 94);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === tab_r13.key);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-icon", tab_r13.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r13.label);
  }
}
function AppComponent_main_1_div_30_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275text(1, "Searching...");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_main_1_div_30_div_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 103);
    \u0275\u0275listener("click", function AppComponent_main_1_div_30_div_2_button_2_Template_button_click_0_listener() {
      const result_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openGlobalSearchResult(result_r16));
    });
    \u0275\u0275elementStart(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const result_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", i_r17 === ctx_r1.globalSearchActiveIndex);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(result_r16.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(result_r16.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(result_r16.subtitle);
  }
}
function AppComponent_main_1_div_30_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275text(1, " No matches found ");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_main_1_div_30_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275template(1, AppComponent_main_1_div_30_div_2_div_1_Template, 2, 0, "div", 99)(2, AppComponent_main_1_div_30_div_2_button_2_Template, 7, 5, "button", 100)(3, AppComponent_main_1_div_30_div_2_div_3_Template, 2, 0, "div", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.globalSearchLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.globalSearchResults);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.globalSearchLoading && !ctx_r1.globalSearchResults.length && ctx_r1.globalSearchQuery.trim().length >= 2);
  }
}
function AppComponent_main_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function AppComponent_main_1_div_30_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.globalSearchQuery, $event) || (ctx_r1.globalSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function AppComponent_main_1_div_30_Template_input_input_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onGlobalSearchInput());
    })("focus", function AppComponent_main_1_div_30_Template_input_focus_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.globalSearchOpen = ctx_r1.globalSearchQuery.trim().length >= 2);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, AppComponent_main_1_div_30_div_2_Template, 4, 3, "div", 97);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.globalSearchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.globalSearchOpen);
  }
}
function AppComponent_main_1_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275listener("click", function AppComponent_main_1_div_31_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeNotificationMenu());
    });
    \u0275\u0275elementEnd();
  }
}
function AppComponent_main_1_div_31_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.workflowNotificationCount);
  }
}
function AppComponent_main_1_div_31_div_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275text(1, "Loading notifications...");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_main_1_div_31_div_5_article_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 121)(1, "button", 122);
    \u0275\u0275listener("click", function AppComponent_main_1_div_31_div_5_article_7_Template_button_click_1_listener() {
      const item_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openWorkflowNotification(item_r21));
    });
    \u0275\u0275elementStart(2, "div", 123)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 124);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 125);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 126);
    \u0275\u0275listener("click", function AppComponent_main_1_div_31_div_5_article_7_Template_button_click_11_listener($event) {
      const item_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.dismissWorkflowNotification(item_r21.key, $event));
    });
    \u0275\u0275text(12, "Dismiss");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r21.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", item_r21.severity);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r21.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r21.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r21.action);
  }
}
function AppComponent_main_1_div_31_div_5_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275text(1, " No pending actions right now. ");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_main_1_div_31_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "div", 115)(2, "strong");
    \u0275\u0275text(3, "Action required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 116);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AppComponent_main_1_div_31_div_5_div_6_Template, 2, 0, "div", 117)(7, AppComponent_main_1_div_31_div_5_article_7_Template, 13, 5, "article", 118)(8, AppComponent_main_1_div_31_div_5_div_8_Template, 2, 0, "div", 119);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.workflowNotificationCount, " alert(s)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.workflowNotificationsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.workflowNotifications);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.workflowNotificationsLoading && !ctx_r1.workflowNotifications.length);
  }
}
function AppComponent_main_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275template(1, AppComponent_main_1_div_31_div_1_Template, 1, 0, "div", 107);
    \u0275\u0275elementStart(2, "button", 108);
    \u0275\u0275listener("click", function AppComponent_main_1_div_31_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleNotificationMenu());
    });
    \u0275\u0275element(3, "span", 109);
    \u0275\u0275template(4, AppComponent_main_1_div_31_span_4_Template, 2, 1, "span", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AppComponent_main_1_div_31_div_5_Template, 9, 4, "div", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("open", ctx_r1.isNotificationMenuOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isNotificationMenuOpen);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r1.isNotificationMenuOpen);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.workflowNotificationCount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isNotificationMenuOpen);
  }
}
function AppComponent_main_1_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 128);
  }
}
function AppComponent_main_1_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 129);
    \u0275\u0275element(1, "span", 130);
    \u0275\u0275elementEnd();
  }
}
function AppComponent_main_1_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 131)(1, "div", 132)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 133);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 134);
    \u0275\u0275listener("click", function AppComponent_main_1_div_45_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.openMyProfile();
      return \u0275\u0275resetView(ctx_r1.closeProfileMenu());
    });
    \u0275\u0275text(7, "My profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 134);
    \u0275\u0275listener("click", function AppComponent_main_1_div_45_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.showChangePasswordPanel = true;
      return \u0275\u0275resetView(ctx_r1.closeProfileMenu());
    });
    \u0275\u0275text(9, "Change password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 135);
    \u0275\u0275listener("click", function AppComponent_main_1_div_45_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmLogout());
    });
    \u0275\u0275text(11, "Logout");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.currentUser.name);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-role", ctx_r1.currentUser.role);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.roleLabel);
  }
}
function AppComponent_main_1_div_46_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1, "You must set a new password before continuing.");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_main_1_div_46_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function AppComponent_main_1_div_46_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showChangePasswordPanel = false);
    });
    \u0275\u0275text(1, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_main_1_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 136)(1, "form", 137);
    \u0275\u0275listener("ngSubmit", function AppComponent_main_1_div_46_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePassword());
    });
    \u0275\u0275elementStart(2, "div", 138)(3, "div")(4, "p", 7);
    \u0275\u0275text(5, "Security");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Change password");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, AppComponent_main_1_div_46_p_8_Template, 2, 0, "p", 139);
    \u0275\u0275elementStart(9, "label");
    \u0275\u0275text(10, "Current password");
    \u0275\u0275element(11, "input", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label");
    \u0275\u0275text(13, "New password");
    \u0275\u0275element(14, "input", 141);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label");
    \u0275\u0275text(16, "Confirm password");
    \u0275\u0275element(17, "input", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 143)(19, "button", 144);
    \u0275\u0275text(20, "Update password");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, AppComponent_main_1_div_46_button_21_Template, 2, 0, "button", 145);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.changePasswordForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.currentUser.mustChangePassword);
    \u0275\u0275advance(11);
    \u0275\u0275property("disabled", ctx_r1.changePasswordForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.currentUser.mustChangePassword);
  }
}
function AppComponent_main_1_div_49_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 149);
    \u0275\u0275listener("click", function AppComponent_main_1_div_49_button_3_Template_button_click_0_listener() {
      const child_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectParentChild(child_r26._id));
    });
    \u0275\u0275elementStart(1, "span", 150);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 151);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 152);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r26 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", child_r26._id === ctx_r1.effectiveChildId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r26.firstName.charAt(0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.studentName(child_r26));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.enrollmentClassName(child_r26));
  }
}
function AppComponent_main_1_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146)(1, "span", 147);
    \u0275\u0275text(2, "Viewing for:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AppComponent_main_1_div_49_button_3_Template, 7, 5, "button", 148);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.parentChildren);
  }
}
function AppComponent_main_1_Defer_50_app_dashboard_page_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-dashboard-page", 154);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("vm", ctx_r1.pageVm);
  }
}
function AppComponent_main_1_Defer_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_main_1_Defer_50_app_dashboard_page_0_Template, 1, 1, "app-dashboard-page", 153);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "dashboard");
  }
}
function AppComponent_main_1_DeferLoading_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
function AppComponent_main_1_Defer_54_app_students_page_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-students-page", 154);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("vm", ctx_r1.pageVm);
  }
}
function AppComponent_main_1_Defer_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_main_1_Defer_54_app_students_page_0_Template, 1, 1, "app-students-page", 153);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "students");
  }
}
function AppComponent_main_1_DeferLoading_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
function AppComponent_main_1_Defer_58_app_classes_page_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-classes-page", 154);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("vm", ctx_r1.pageVm);
  }
}
function AppComponent_main_1_Defer_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_main_1_Defer_58_app_classes_page_0_Template, 1, 1, "app-classes-page", 153);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "classes");
  }
}
function AppComponent_main_1_DeferLoading_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
function AppComponent_main_1_Defer_62_app_teachers_page_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-teachers-page", 154);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("vm", ctx_r1.pageVm);
  }
}
function AppComponent_main_1_Defer_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_main_1_Defer_62_app_teachers_page_0_Template, 1, 1, "app-teachers-page", 153);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "teachers");
  }
}
function AppComponent_main_1_DeferLoading_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
function AppComponent_main_1_Defer_66_app_fees_page_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-fees-page", 154);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("vm", ctx_r1.pageVm);
  }
}
function AppComponent_main_1_Defer_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_main_1_Defer_66_app_fees_page_0_Template, 1, 1, "app-fees-page", 153);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "fees");
  }
}
function AppComponent_main_1_DeferLoading_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
function AppComponent_main_1_Defer_70_app_fee_prediction_page_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-fee-prediction-page", 154);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("vm", ctx_r1.pageVm);
  }
}
function AppComponent_main_1_Defer_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_main_1_Defer_70_app_fee_prediction_page_0_Template, 1, 1, "app-fee-prediction-page", 153);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "fee-prediction");
  }
}
function AppComponent_main_1_DeferLoading_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
function AppComponent_main_1_Defer_74_app_transport_page_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-transport-page", 154);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("vm", ctx_r1.pageVm);
  }
}
function AppComponent_main_1_Defer_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_main_1_Defer_74_app_transport_page_0_Template, 1, 1, "app-transport-page", 153);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "transport");
  }
}
function AppComponent_main_1_DeferLoading_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
function AppComponent_main_1_Defer_78_app_drivers_page_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-drivers-page", 154);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("vm", ctx_r1.pageVm);
  }
}
function AppComponent_main_1_Defer_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_main_1_Defer_78_app_drivers_page_0_Template, 1, 1, "app-drivers-page", 153);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "drivers");
  }
}
function AppComponent_main_1_DeferLoading_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
function AppComponent_main_1_Defer_82_app_reports_page_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-reports-page", 154);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("vm", ctx_r1.pageVm);
  }
}
function AppComponent_main_1_Defer_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_main_1_Defer_82_app_reports_page_0_Template, 1, 1, "app-reports-page", 153);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "reports");
  }
}
function AppComponent_main_1_DeferLoading_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
function AppComponent_main_1_Defer_86_app_payroll_page_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-payroll-page", 154);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("vm", ctx_r1.pageVm);
  }
}
function AppComponent_main_1_Defer_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_main_1_Defer_86_app_payroll_page_0_Template, 1, 1, "app-payroll-page", 153);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "payroll");
  }
}
function AppComponent_main_1_DeferLoading_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
function AppComponent_main_1_Defer_90_app_promotion_page_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-promotion-page", 154);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("vm", ctx_r1.pageVm);
  }
}
function AppComponent_main_1_Defer_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_main_1_Defer_90_app_promotion_page_0_Template, 1, 1, "app-promotion-page", 153);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "promotion");
  }
}
function AppComponent_main_1_DeferLoading_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
function AppComponent_main_1_Defer_94_app_attendance_page_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-attendance-page", 154);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("vm", ctx_r1.pageVm);
  }
}
function AppComponent_main_1_Defer_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_main_1_Defer_94_app_attendance_page_0_Template, 1, 1, "app-attendance-page", 153);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "attendance");
  }
}
function AppComponent_main_1_DeferLoading_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
function AppComponent_main_1_Defer_98_app_timetable_generator_page_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-timetable-generator-page", 154);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("vm", ctx_r1.pageVm);
  }
}
function AppComponent_main_1_Defer_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_main_1_Defer_98_app_timetable_generator_page_0_Template, 1, 1, "app-timetable-generator-page", 153);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "timetable-generator");
  }
}
function AppComponent_main_1_DeferLoading_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
function AppComponent_main_1_Defer_102_app_exams_page_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-exams-page", 154);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("vm", ctx_r1.pageVm);
  }
}
function AppComponent_main_1_Defer_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_main_1_Defer_102_app_exams_page_0_Template, 1, 1, "app-exams-page", 153);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "exams");
  }
}
function AppComponent_main_1_DeferLoading_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
function AppComponent_main_1_Defer_106_app_student_profile_page_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-student-profile-page", 154);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("vm", ctx_r1.pageVm);
  }
}
function AppComponent_main_1_Defer_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_main_1_Defer_106_app_student_profile_page_0_Template, 1, 1, "app-student-profile-page", 153);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "profile");
  }
}
function AppComponent_main_1_DeferLoading_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
function AppComponent_main_1_Defer_110_app_users_page_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-users-page", 154);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("vm", ctx_r1.pageVm);
  }
}
function AppComponent_main_1_Defer_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_main_1_Defer_110_app_users_page_0_Template, 1, 1, "app-users-page", 153);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "users");
  }
}
function AppComponent_main_1_DeferLoading_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
function AppComponent_main_1_div_114_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 165);
    \u0275\u0275text(2, "School Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 161)(4, "div", 162)(5, "span", 163);
    \u0275\u0275text(6, "Total Students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 164);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 162)(10, "span", 163);
    \u0275\u0275text(11, "Total Teachers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 164);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 162)(15, "span", 163);
    \u0275\u0275text(16, "Active Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 164);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 162)(20, "span", 163);
    \u0275\u0275text(21, "Today's Admissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 164);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.summary.students);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.summary.teachers);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.summary.activeYear == null ? null : ctx_r1.summary.activeYear.name) || "Not set");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r1.summary.todaysAdmissions) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 0);
  }
}
function AppComponent_main_1_div_114_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 165);
    \u0275\u0275text(2, "Teacher Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 161)(4, "div", 162)(5, "span", 163);
    \u0275\u0275text(6, "Employee Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 164);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 162)(10, "span", 163);
    \u0275\u0275text(11, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 164);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 162)(15, "span", 163);
    \u0275\u0275text(16, "Qualification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 164);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 162)(20, "span", 163);
    \u0275\u0275text(21, "Base Salary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 164);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 162)(26, "span", 163);
    \u0275\u0275text(27, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 164)(29, "span", 124);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teacher_r28 = ctx.ngIf;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(teacher_r28.employeeCode);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(teacher_r28.phone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(teacher_r28.qualification || "Not specified");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 6, teacher_r28.baseSalary, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", teacher_r28.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(teacher_r28.status);
  }
}
function AppComponent_main_1_div_114_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 165);
    \u0275\u0275text(2, "Student Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 161)(4, "div", 162)(5, "span", 163);
    \u0275\u0275text(6, "Admission No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 164);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 162)(10, "span", 163);
    \u0275\u0275text(11, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 164);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 162)(15, "span", 163);
    \u0275\u0275text(16, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 164);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 162)(21, "span", 163);
    \u0275\u0275text(22, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 164);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 162)(27, "span", 163);
    \u0275\u0275text(28, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 164)(30, "span", 124);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "button", 166);
    \u0275\u0275listener("click", function AppComponent_main_1_div_114_ng_container_36_Template_button_click_32_listener() {
      const student_r30 = \u0275\u0275restoreView(_r29).ngIf;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.closeMyProfile();
      return \u0275\u0275resetView(ctx_r1.loadStudentProfile(student_r30._id));
    });
    \u0275\u0275text(33, "View Full AI Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const student_r30 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(student_r30.admissionNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.enrollmentClassName(student_r30));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 6, student_r30.gender));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 8, student_r30.dateOfBirth, "dd MMM yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", student_r30.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(student_r30.status);
  }
}
function AppComponent_main_1_div_114_ng_container_37_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 168)(1, "div", 161)(2, "div", 162)(3, "span", 163);
    \u0275\u0275text(4, "Child Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 164);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 162)(8, "span", 163);
    \u0275\u0275text(9, "Admission No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 164);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 162)(13, "span", 163);
    \u0275\u0275text(14, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 164);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 162)(18, "span", 163);
    \u0275\u0275text(19, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 164)(21, "span", 124);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "button", 169);
    \u0275\u0275listener("click", function AppComponent_main_1_div_114_ng_container_37_div_3_Template_button_click_23_listener() {
      const child_r32 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.closeMyProfile();
      return \u0275\u0275resetView(ctx_r1.loadStudentProfile(child_r32._id));
    });
    \u0275\u0275text(24, "View Full Profile");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r32 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.studentName(child_r32));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(child_r32.admissionNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.enrollmentClassName(child_r32));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", child_r32.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(child_r32.status);
  }
}
function AppComponent_main_1_div_114_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 165);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AppComponent_main_1_div_114_ng_container_37_div_3_Template, 25, 5, "div", 167);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Linked Children (", ctx_r1.parentChildren.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.parentChildren);
  }
}
function AppComponent_main_1_div_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275listener("click", function AppComponent_main_1_div_114_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMyProfile());
    });
    \u0275\u0275elementStart(1, "div", 156);
    \u0275\u0275listener("click", function AppComponent_main_1_div_114_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 157)(3, "div")(4, "p", 7);
    \u0275\u0275text(5, "My Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Account Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 42);
    \u0275\u0275listener("click", function AppComponent_main_1_div_114_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMyProfile());
    });
    \u0275\u0275text(9, "Close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 158)(11, "span", 159);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "strong", 160);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 14);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 161)(19, "div", 162)(20, "span", 163);
    \u0275\u0275text(21, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 164);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 162)(25, "span", 163);
    \u0275\u0275text(26, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 164);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 162)(30, "span", 163);
    \u0275\u0275text(31, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 164);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, AppComponent_main_1_div_114_ng_container_34_Template, 24, 4, "ng-container", 52)(35, AppComponent_main_1_div_114_ng_container_35_Template, 31, 9, "ng-container", 52)(36, AppComponent_main_1_div_114_ng_container_36_Template, 34, 11, "ng-container", 52)(37, AppComponent_main_1_div_114_ng_container_37_Template, 4, 2, "ng-container", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275attribute("data-role", ctx_r1.currentUser.role);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentUser.name.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.currentUser.name);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-role", ctx_r1.currentUser.role);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.roleLabel);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.currentUser.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.currentUser.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.roleLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAdmin && ctx_r1.summary);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTeacher && ctx_r1.myTeacherProfile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isStudent && ctx_r1.myStudentProfile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isParent && ctx_r1.parentChildren.length);
  }
}
function AppComponent_main_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 59)(1, "aside", 60)(2, "div", 61)(3, "div", 62)(4, "p", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AppComponent_main_1_img_6_Template, 1, 1, "img", 63);
    \u0275\u0275elementStart(7, "h1", 64);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 65);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 66);
    \u0275\u0275listener("click", function AppComponent_main_1_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSidebar());
    });
    \u0275\u0275elementStart(13, "span", 67);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(15, "div", 68);
    \u0275\u0275elementStart(16, "nav", 69);
    \u0275\u0275template(17, AppComponent_main_1_button_17_Template, 4, 4, "button", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "section", 71)(19, "header", 72)(20, "div", 73)(21, "p", 7);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h2");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275elementStart(27, "span", 74);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 75);
    \u0275\u0275template(30, AppComponent_main_1_div_30_Template, 3, 2, "div", 76)(31, AppComponent_main_1_div_31_Template, 6, 6, "div", 77);
    \u0275\u0275elementStart(32, "button", 78);
    \u0275\u0275listener("click", function AppComponent_main_1_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refresh());
    });
    \u0275\u0275template(33, AppComponent_main_1_span_33_Template, 1, 0, "span", 79)(34, AppComponent_main_1_span_34_Template, 2, 0, "span", 80);
    \u0275\u0275elementStart(35, "span", 81);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 82)(38, "button", 83);
    \u0275\u0275listener("click", function AppComponent_main_1_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleProfileMenu());
    });
    \u0275\u0275elementStart(39, "span", 84);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 85);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 86);
    \u0275\u0275text(44, "\u25BE");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(45, AppComponent_main_1_div_45_Template, 12, 3, "div", 87);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(46, AppComponent_main_1_div_46_Template, 22, 4, "div", 88);
    \u0275\u0275element(47, "app-toast-container")(48, "app-confirm-dialog");
    \u0275\u0275template(49, AppComponent_main_1_div_49_Template, 4, 1, "div", 89)(50, AppComponent_main_1_Defer_50_Template, 1, 1)(51, AppComponent_main_1_DeferLoading_51_Template, 1, 0);
    \u0275\u0275defer(52, 50, AppComponent_main_1_Defer_52_DepsFn, 51, null, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
    \u0275\u0275template(54, AppComponent_main_1_Defer_54_Template, 1, 1)(55, AppComponent_main_1_DeferLoading_55_Template, 1, 0);
    \u0275\u0275defer(56, 54, AppComponent_main_1_Defer_56_DepsFn, 55, null, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
    \u0275\u0275deferPrefetchOnIdle();
    \u0275\u0275template(58, AppComponent_main_1_Defer_58_Template, 1, 1)(59, AppComponent_main_1_DeferLoading_59_Template, 1, 0);
    \u0275\u0275defer(60, 58, AppComponent_main_1_Defer_60_DepsFn, 59, null, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
    \u0275\u0275template(62, AppComponent_main_1_Defer_62_Template, 1, 1)(63, AppComponent_main_1_DeferLoading_63_Template, 1, 0);
    \u0275\u0275defer(64, 62, AppComponent_main_1_Defer_64_DepsFn, 63, null, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
    \u0275\u0275template(66, AppComponent_main_1_Defer_66_Template, 1, 1)(67, AppComponent_main_1_DeferLoading_67_Template, 1, 0);
    \u0275\u0275defer(68, 66, AppComponent_main_1_Defer_68_DepsFn, 67, null, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
    \u0275\u0275deferPrefetchOnIdle();
    \u0275\u0275template(70, AppComponent_main_1_Defer_70_Template, 1, 1)(71, AppComponent_main_1_DeferLoading_71_Template, 1, 0);
    \u0275\u0275defer(72, 70, AppComponent_main_1_Defer_72_DepsFn, 71, null, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
    \u0275\u0275template(74, AppComponent_main_1_Defer_74_Template, 1, 1)(75, AppComponent_main_1_DeferLoading_75_Template, 1, 0);
    \u0275\u0275defer(76, 74, AppComponent_main_1_Defer_76_DepsFn, 75, null, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
    \u0275\u0275template(78, AppComponent_main_1_Defer_78_Template, 1, 1)(79, AppComponent_main_1_DeferLoading_79_Template, 1, 0);
    \u0275\u0275defer(80, 78, AppComponent_main_1_Defer_80_DepsFn, 79, null, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
    \u0275\u0275template(82, AppComponent_main_1_Defer_82_Template, 1, 1)(83, AppComponent_main_1_DeferLoading_83_Template, 1, 0);
    \u0275\u0275defer(84, 82, AppComponent_main_1_Defer_84_DepsFn, 83, null, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
    \u0275\u0275template(86, AppComponent_main_1_Defer_86_Template, 1, 1)(87, AppComponent_main_1_DeferLoading_87_Template, 1, 0);
    \u0275\u0275defer(88, 86, AppComponent_main_1_Defer_88_DepsFn, 87, null, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
    \u0275\u0275template(90, AppComponent_main_1_Defer_90_Template, 1, 1)(91, AppComponent_main_1_DeferLoading_91_Template, 1, 0);
    \u0275\u0275defer(92, 90, AppComponent_main_1_Defer_92_DepsFn, 91, null, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
    \u0275\u0275template(94, AppComponent_main_1_Defer_94_Template, 1, 1)(95, AppComponent_main_1_DeferLoading_95_Template, 1, 0);
    \u0275\u0275defer(96, 94, AppComponent_main_1_Defer_96_DepsFn, 95, null, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
    \u0275\u0275deferPrefetchOnIdle();
    \u0275\u0275template(98, AppComponent_main_1_Defer_98_Template, 1, 1)(99, AppComponent_main_1_DeferLoading_99_Template, 1, 0);
    \u0275\u0275defer(100, 98, AppComponent_main_1_Defer_100_DepsFn, 99, null, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
    \u0275\u0275template(102, AppComponent_main_1_Defer_102_Template, 1, 1)(103, AppComponent_main_1_DeferLoading_103_Template, 1, 0);
    \u0275\u0275defer(104, 102, AppComponent_main_1_Defer_104_DepsFn, 103, null, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
    \u0275\u0275template(106, AppComponent_main_1_Defer_106_Template, 1, 1)(107, AppComponent_main_1_DeferLoading_107_Template, 1, 0);
    \u0275\u0275defer(108, 106, AppComponent_main_1_Defer_108_DepsFn, 107, null, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
    \u0275\u0275template(110, AppComponent_main_1_Defer_110_Template, 1, 1)(111, AppComponent_main_1_DeferLoading_111_Template, 1, 0);
    \u0275\u0275defer(112, 110, AppComponent_main_1_Defer_112_DepsFn, 111, null, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
    \u0275\u0275elementEnd();
    \u0275\u0275template(114, AppComponent_main_1_div_114_Template, 38, 12, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("collapsed", ctx_r1.isSidebarCollapsed);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r1.schoolBrand == null ? null : ctx_r1.schoolBrand.isAdmin) ? "Platform" : "School ERP");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.schoolBrand == null ? null : ctx_r1.schoolBrand.logoUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.schoolBrand == null ? null : ctx_r1.schoolBrand.name) || "CampusFlow");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 44, ((ctx_r1.schoolBrand == null ? null : ctx_r1.schoolBrand.name) || "CF").slice(0, 2)));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isSidebarCollapsed ? ">" : "<");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.tabs);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.activeTabLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.workspaceTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.currentUser.name, " \xB7 ");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-role", ctx_r1.currentUser.role);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.roleLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.can("dashboard", "view"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.can("dashboard", "view"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading ? "Syncing..." : "Refresh");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.isProfileMenuOpen);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-role", ctx_r1.currentUser.role);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentUser.name.charAt(0) || "U");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentUser.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isProfileMenuOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showChangePasswordPanel && ctx_r1.currentUser);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isParent && ctx_r1.parentChildren.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275deferWhen(ctx_r1.activeTab === "dashboard");
    \u0275\u0275advance(4);
    \u0275\u0275deferWhen(ctx_r1.activeTab === "students");
    \u0275\u0275advance(4);
    \u0275\u0275deferWhen(ctx_r1.activeTab === "classes");
    \u0275\u0275advance(4);
    \u0275\u0275deferWhen(ctx_r1.activeTab === "teachers");
    \u0275\u0275advance(4);
    \u0275\u0275deferWhen(ctx_r1.activeTab === "fees");
    \u0275\u0275advance(4);
    \u0275\u0275deferWhen(ctx_r1.activeTab === "fee-prediction");
    \u0275\u0275advance(4);
    \u0275\u0275deferWhen(ctx_r1.activeTab === "transport");
    \u0275\u0275advance(4);
    \u0275\u0275deferWhen(ctx_r1.activeTab === "drivers");
    \u0275\u0275advance(4);
    \u0275\u0275deferWhen(ctx_r1.activeTab === "reports");
    \u0275\u0275advance(4);
    \u0275\u0275deferWhen(ctx_r1.activeTab === "payroll");
    \u0275\u0275advance(4);
    \u0275\u0275deferWhen(ctx_r1.activeTab === "promotion");
    \u0275\u0275advance(4);
    \u0275\u0275deferWhen(ctx_r1.activeTab === "attendance");
    \u0275\u0275advance(4);
    \u0275\u0275deferWhen(ctx_r1.activeTab === "timetable-generator");
    \u0275\u0275advance(4);
    \u0275\u0275deferWhen(ctx_r1.activeTab === "exams");
    \u0275\u0275advance(4);
    \u0275\u0275deferWhen(ctx_r1.activeTab === "profile");
    \u0275\u0275advance(4);
    \u0275\u0275deferWhen(ctx_r1.activeTab === "users");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showMyProfile);
  }
}
var AppComponent = class _AppComponent {
  api = inject(ErpApiService);
  fb = inject(FormBuilder);
  permissionService = inject(PermissionService);
  listingState = inject(ListingStateService);
  sessionContext = inject(SessionContextService);
  toast = inject(ToastService);
  confirmDialog = inject(ConfirmDialogService);
  activeTab = "dashboard";
  loading = false;
  submitting = false;
  loginMessage = "";
  get message() {
    return this.loginMessage;
  }
  set message(value) {
    this.loginMessage = value;
    if (!value || !this.currentUser)
      return;
    const lower = value.toLowerCase();
    if (lower.includes("fail") || lower.includes("could not") || lower.includes("unable") || lower.includes("error")) {
      this.toast.error(value);
      return;
    }
    if (lower.includes("permission") || lower.includes("cannot") || lower.includes("read-only") || lower.includes("enter or generate")) {
      this.toast.warning(value);
      return;
    }
    if (lower.includes("editing") || lower.includes("found existing") || lower.includes("no existing")) {
      this.toast.info(value);
      return;
    }
    this.toast.success(value);
  }
  token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY);
  currentUser = this.readStoredUser();
  pageVm = this;
  isProfileMenuOpen = false;
  isNotificationMenuOpen = false;
  workflowNotifications = [];
  workflowNotificationsLoading = false;
  globalSearchQuery = "";
  globalSearchResults = [];
  globalSearchOpen = false;
  globalSearchLoading = false;
  globalSearchActiveIndex = -1;
  globalSearchTimer = null;
  bulkStatusTarget = "";
  bulkClassTarget = "";
  bulkBusRouteTarget = "";
  bulkBusStopSequence = "";
  bulkNotificationMessage = "";
  isSidebarCollapsed = false;
  summary;
  years = [];
  classes = [];
  teachers = [];
  students = [];
  invoices = [];
  feeHistory = [];
  busRoutes = [];
  busRegistrations = [];
  busReportRows = [];
  busRouteStops = [];
  vehicles = [];
  editingBusRouteId = "";
  editingBusRegistrationId = "";
  transportReportType = "route-wise";
  payrolls = [];
  attendance = [];
  attendanceRegisterRows = [];
  attendanceRegisterWorkflow = "draft";
  attendanceRegisterSummary = { present: 0, absent: 0, leave: 0, holiday: 0, total: 0, percentage: 100 };
  attendanceRegisterHoliday = null;
  attendanceRegisterSunday = false;
  attendanceReportRows = [];
  attendanceReportType = "daily";
  reportDomain = "students";
  reportType = "register";
  reportRows = [];
  reportLoading = false;
  holidays = [];
  holidaysLoaded = false;
  loadedTabs = /* @__PURE__ */ new Set();
  timetable = [];
  exams = [];
  examResults = [];
  examReport = null;
  activeExamAttempt = null;
  generatingExam = false;
  examPdfFile = null;
  selectedLoginRole = "admin";
  users = [];
  roles = [];
  permissionSchema = { modules: [], actions: [] };
  selectedRoleSlug = "";
  editablePermissions = {};
  roleForm = this.fb.group({
    slug: ["", Validators.required],
    name: ["", Validators.required],
    description: [""]
  });
  studentProfile = null;
  profileStudentId = "";
  profileLoading = false;
  showMyProfile = false;
  selfAttendanceMarked = false;
  selfAttendanceStatus = null;
  selfAttendanceLoading = false;
  viewingExamResult = null;
  parentSelectedChild = "";
  parentLinkedStudentIds = /* @__PURE__ */ new Set();
  selectedStudentIds = /* @__PURE__ */ new Set();
  promotionWizardStep = 1;
  promotionEligibleRows = [];
  promotionPreview = null;
  promotionBatch = null;
  promotionExcludedIds = /* @__PURE__ */ new Set();
  promotionSelectedIds = /* @__PURE__ */ new Set();
  promotionRollMode = "auto";
  promotionRollAssignments = {};
  promotionWarningsAcknowledged = false;
  promotionLoading = false;
  promotionReportType = "promoted";
  promotionReportRows = [];
  promotionReportLoading = false;
  selectedStudentId = "";
  selectedStudentDocuments = [];
  files = {};
  documentShape = {
    type: "",
    title: "",
    fileUrl: "",
    storageProvider: "local",
    mimeType: "",
    uploadedAt: ""
  };
  editingStudentId = "";
  pickerStudents = [];
  parentAccounts = [];
  editingTeacherId = "";
  viewingTeacher = null;
  editingClassId = "";
  editingAcademicYearId = "";
  editingPayrollId = "";
  financeRangeDays = APP_CONSTANTS.DEFAULT_FINANCE_RANGE_DAYS;
  financeRanges = APP_CONSTANTS.FINANCE_RANGES;
  pageSize = APP_CONSTANTS.PAGE_SIZE;
  pageSizes = {};
  listSort = {};
  serverPagedKeys = ["students", "classes", "years", "teachers", "users"];
  operationalPagedKeys = ["invoices", "feeHistory", "payroll", "busRoutes", "busRegistrations", "attendance", "exams"];
  collectableInvoiceOptions = [];
  listingRows = {};
  listingTotals = {};
  listingLoading = {};
  filters = {
    studentSearch: "",
    studentClass: "",
    studentYear: "",
    studentSection: "",
    studentStatus: "",
    studentAdmissionFrom: "",
    studentAdmissionTo: "",
    classSearch: "",
    classYear: "",
    classStatus: "",
    yearSearch: "",
    yearStatus: "",
    teacherSearch: "",
    teacherStatus: "",
    invoiceSearch: "",
    invoiceStatus: "",
    invoiceYear: "",
    invoiceClass: "",
    invoiceMonth: "",
    payrollSearch: "",
    payrollStatus: "",
    attendanceSearch: "",
    attendanceClass: "",
    attendanceStudent: "",
    attendanceYear: "",
    timetableSearch: "",
    examSearch: "",
    examStatus: "",
    attendanceStatus: "",
    userSearch: "",
    userRole: "",
    userStatus: "",
    examResultSearch: "",
    examResultGrade: "",
    profileSearch: "",
    profileClass: "",
    profileExamSearch: "",
    profileFeeSearch: "",
    profileFeeStatus: "",
    feeHistorySearch: "",
    feeHistoryStatus: "",
    feeHistoryClass: "",
    busRouteSearch: "",
    busRouteStatus: "",
    busRegYear: "",
    busRegRoute: "",
    busRegStatus: "",
    busRegSearch: "",
    busRegClass: "",
    busReportYear: "",
    attendanceReportMonth: String((/* @__PURE__ */ new Date()).getMonth() + 1),
    attendanceReportYear: String((/* @__PURE__ */ new Date()).getFullYear()),
    reportYear: "",
    reportClass: "",
    reportSection: "",
    reportStatus: "",
    reportAdmissionFrom: "",
    reportAdmissionTo: "",
    reportMonth: String((/* @__PURE__ */ new Date()).getMonth() + 1),
    reportYearNum: String((/* @__PURE__ */ new Date()).getFullYear()),
    reportDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    reportPaymentStatus: "",
    reportStudent: "",
    reportDepartment: "",
    reportDesignation: "",
    reportPayrollStatus: "",
    reportRoute: "",
    reportStop: "",
    reportBusStatus: "",
    reportPerformanceCategory: "",
    reportTeacher: ""
  };
  pages = {
    dashboardStudents: 1,
    dashboardAttendance: 1,
    dashboardTeachers: 1,
    dashboardPayroll: 1,
    dashboardTimetable: 1,
    dashboardActivities: 1,
    students: 1,
    classes: 1,
    years: 1,
    teachers: 1,
    invoices: 1,
    feeHistory: 1,
    busRoutes: 1,
    busRegistrations: 1,
    payroll: 1,
    promotion: 1,
    attendance: 1,
    timetable: 1,
    exams: 1,
    examResults: 1,
    users: 1,
    profileExams: 1,
    profileFees: 1
  };
  loginRoles = [
    { key: "admin", label: "Administrator", description: "Full school control", placeholder: "admin@schoolerp.local", hint: "Manage admissions, finance, payroll, and users." },
    { key: "teacher", label: "Teacher", description: "Classes & AI exams", placeholder: "teacher@schoolerp.local", hint: "Mark attendance, build timetables, and publish unit tests." },
    { key: "student", label: "Student", description: "Learning portal", placeholder: "Username (given at admission)", hint: "Sign in with the username and temporary password from admission." },
    { key: "parent", label: "Parent", description: "Child progress", placeholder: "Phone number or email", hint: "Sign in with your phone number (or email) and password." }
  ];
  allTabs = [
    { key: "dashboard", label: "Dashboard", icon: "dashboard", roles: ["admin", "teacher", "student", "parent"] },
    { key: "students", label: "Students", icon: "students", roles: ["admin", "teacher"] },
    { key: "classes", label: "Classes & Sections", icon: "classes", roles: ["admin", "teacher"] },
    { key: "teachers", label: "Teachers", icon: "teachers", roles: ["admin", "teacher"] },
    { key: "fees", label: "Fees", icon: "fees", roles: ["admin", "student", "parent"] },
    { key: "fee-prediction", label: "Fee Prediction", icon: "fee-prediction", roles: ["admin", "accountant"] },
    { key: "transport", label: "Bus", icon: "transport", roles: ["admin"] },
    { key: "drivers", label: "Drivers", icon: "drivers", roles: ["admin"] },
    { key: "payroll", label: "Payroll", icon: "payroll", roles: ["admin"] },
    { key: "attendance", label: "Attendance", icon: "attendance", roles: ["admin", "teacher", "student", "parent"] },
    { key: "timetable-generator", label: "Timetable", icon: "timetable-generator", roles: ["admin", "teacher"] },
    { key: "exams", label: "AI Exams", icon: "exams", roles: ["admin", "teacher", "student", "parent"] },
    { key: "profile", label: "Student Profile", icon: "profile", roles: ["admin", "teacher", "student", "parent"] },
    { key: "promotion", label: "Promotions", icon: "promotion", roles: ["admin"] },
    { key: "reports", label: "Reports", icon: "reports", roles: ["admin", "super_admin", "accountant"] },
    { key: "users", label: "Users & Roles", icon: "users", roles: ["admin"] }
  ];
  loginForm = this.fb.group({
    email: ["", [Validators.required]],
    password: ["", Validators.required]
  });
  userForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
    role: ["teacher", Validators.required],
    teacher: [""],
    student: [""],
    linkedStudent: [""],
    linkedStudents: [[]],
    useTemporaryPassword: [false]
  });
  changePasswordForm = this.fb.group({
    currentPassword: ["", Validators.required],
    newPassword: ["", Validators.required],
    confirmPassword: ["", Validators.required]
  });
  forgotForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    otp: [""],
    newPassword: [""],
    confirmPassword: [""]
  });
  showForgotPassword = false;
  forgotStep = "request";
  forgotLoading = false;
  forgotMessage = "";
  forgotError = "";
  forgotDevOtp = "";
  forgotResendSeconds = 0;
  forgotResendTimer = null;
  needsEmailVerification = false;
  resendVerificationLoading = false;
  resendVerificationMessage = "";
  resendVerificationError = "";
  resendVerificationSeconds = 0;
  resendVerificationDevLink = "";
  resendVerificationTimer = null;
  showVerifyEmailPanel = false;
  verifyEmailToken = "";
  verifyEmailLoading = false;
  verifyEmailMessage = "";
  verifyEmailError = "";
  verifyEmailPassword = "";
  verifyEmailConfirmPassword = "";
  showChangePasswordPanel = false;
  lastActivityAt = Date.now();
  sessionIdleMinutes = APP_CONSTANTS.DEFAULT_SESSION_IDLE_MINUTES;
  sessionWatchHandle;
  academicYearForm = this.fb.group({
    name: ["", Validators.required],
    startDate: ["", Validators.required],
    endDate: ["", Validators.required],
    isActive: [false]
  });
  classForm = this.fb.group({
    name: ["", Validators.required],
    section: [APP_CONSTANTS.DEFAULT_SECTION, Validators.required],
    capacity: [APP_CONSTANTS.DEFAULT_CAPACITY, Validators.required],
    academicYear: ["", Validators.required],
    classTeacher: [""],
    monthlyFee: [0, [Validators.required, Validators.min(0)]],
    status: ["active", Validators.required]
  });
  teacherForm = this.fb.group({
    employeeCode: [""],
    firstName: ["", Validators.required],
    middleName: [""],
    lastName: [""],
    phone: ["", [Validators.required, Validators.pattern(APP_CONSTANTS.PHONE_PATTERN)]],
    email: [""],
    aadhaarNumber: ["", Validators.pattern(APP_CONSTANTS.AADHAAR_PATTERN)],
    qualification: [""],
    subjects: [[]],
    baseSalary: [0, [Validators.required, Validators.min(0)]]
  });
  // Option lists for class configuration and teacher specialisation.
  classNameOptions = CLASS_NAME_OPTIONS;
  sectionOptions = SECTION_OPTIONS;
  subjectOptions = SUBJECT_OPTIONS;
  teacherSubjectDraft = "";
  get teacherSubjects() {
    return this.teacherForm.get("subjects")?.value || [];
  }
  addTeacherSubject(subject) {
    const value = (subject || "").trim();
    if (!value)
      return;
    const current = this.teacherSubjects;
    if (current.includes(value)) {
      this.teacherSubjectDraft = "";
      return;
    }
    this.teacherForm.get("subjects")?.setValue([...current, value]);
    this.teacherSubjectDraft = "";
  }
  removeTeacherSubject(subject) {
    this.teacherForm.get("subjects")?.setValue(this.teacherSubjects.filter((s) => s !== subject));
  }
  admissionForm = this.fb.group({
    admissionNumber: [""],
    firstName: ["", Validators.required],
    middleName: [""],
    lastName: [""],
    gender: ["male", Validators.required],
    dateOfBirth: ["", Validators.required],
    bloodGroup: [""],
    category: [""],
    nationality: ["Indian"],
    motherName: [""],
    aadhaarNumber: ["", Validators.pattern(APP_CONSTANTS.AADHAAR_PATTERN)],
    udisePenId: [""],
    line1: ["", Validators.required],
    city: ["", Validators.required],
    state: ["", Validators.required],
    pincode: ["", Validators.required],
    guardianName: ["", Validators.required],
    guardianRelation: [APP_CONSTANTS.DEFAULT_GUARDIAN_RELATION, Validators.required],
    guardianPhone: ["", [Validators.required, Validators.pattern(APP_CONSTANTS.PHONE_PATTERN)]],
    guardianEmail: ["", Validators.email],
    parentUserId: [""],
    academicYear: ["", Validators.required],
    classRoom: ["", Validators.required],
    rollNumber: [""],
    studentStatus: [{ value: "active", disabled: true }],
    hasPreviousSchool: ["no"],
    previousSchool: [""],
    previousSchoolBoard: [""],
    previousSchoolPercentage: [""],
    previousSchoolRollNumber: [""],
    previousSchoolAddress: [""],
    previousSchoolLastClass: [""],
    previousSchoolYearOfPassing: [""],
    previousSchoolReasonForLeaving: [""],
    previousSchoolTcNumber: [""],
    previousSchoolTcDate: [""]
  });
  feeDemandForm = this.fb.group({
    academicYear: ["", Validators.required],
    classRoom: [""],
    cycle: ["monthly", Validators.required],
    month: [(/* @__PURE__ */ new Date()).getMonth() + 1, Validators.required],
    year: [(/* @__PURE__ */ new Date()).getFullYear(), Validators.required]
  });
  admissionFeePreview = null;
  admissionFeePreviewLoading = false;
  get admissionFeePreviewTotal() {
    return (this.admissionFeePreview?.components || []).reduce((sum, c) => sum + (Number(c.amount) || 0), 0);
  }
  onAdmissionClassChange() {
    const academicYear = this.admissionForm.get("academicYear")?.value || "";
    const classRoom = this.admissionForm.get("classRoom")?.value || "";
    this.admissionFeePreview = null;
    if (!academicYear || !classRoom)
      return;
    this.admissionFeePreviewLoading = true;
    this.api.feeStructureForClass(academicYear, classRoom).subscribe({
      next: (structure) => {
        this.admissionFeePreview = structure;
        this.admissionFeePreviewLoading = false;
      },
      error: () => {
        this.admissionFeePreview = null;
        this.admissionFeePreviewLoading = false;
      }
    });
  }
  paymentForm = this.fb.group({
    invoiceId: ["", Validators.required],
    amount: [0, [Validators.required, Validators.min(1)]],
    mode: [PAYMENT_MODES.CASH, Validators.required],
    referenceNumber: [""],
    discount: [0, Validators.min(0)],
    fine: [0, Validators.min(0)],
    otherCharges: [0, Validators.min(0)]
  });
  busRouteForm = this.fb.group({
    routeName: ["", Validators.required],
    routeCode: ["", Validators.required],
    vehicle: [""],
    vehicleNumber: ["", Validators.required],
    driverName: ["", Validators.required],
    driverMobile: ["", [Validators.required, Validators.pattern(APP_CONSTANTS.PHONE_PATTERN)]],
    capacity: [40, [Validators.required, Validators.min(1)]],
    feeType: ["stop_based", Validators.required],
    fixedMonthlyFee: [0, Validators.min(0)],
    status: ["active", Validators.required]
  });
  vehicleForm = this.fb.group({
    vehicleNumber: ["", Validators.required],
    model: [""],
    type: ["bus", Validators.required],
    capacity: [40, [Validators.required, Validators.min(1)]],
    registrationExpiry: [""],
    insuranceExpiry: [""],
    pollutionExpiry: [""],
    fitnessExpiry: [""],
    driverName: [""],
    driverMobile: ["", Validators.pattern(APP_CONSTANTS.PHONE_PATTERN)],
    driverAddress: [""],
    licenseNumber: [""],
    licenseExpiry: [""],
    driverSalary: [0, Validators.min(0)],
    joiningDate: [""],
    notes: [""],
    status: ["active", Validators.required]
  });
  driverSalaryForm = this.fb.group({
    amount: [0, [Validators.required, Validators.min(0)]],
    mode: ["cash", Validators.required],
    referenceNumber: [""],
    paidOn: [(/* @__PURE__ */ new Date()).toISOString().slice(0, 10), Validators.required],
    notes: [""]
  });
  busRegistrationForm = this.fb.group({
    academicYear: ["", Validators.required],
    classRoom: [""],
    student: ["", Validators.required],
    route: ["", Validators.required],
    stopSequence: ["", Validators.required],
    monthlyFee: [0, [Validators.required, Validators.min(0)]],
    serviceStartDate: [(/* @__PURE__ */ new Date()).toISOString().slice(0, 10), Validators.required],
    serviceEndDate: [""],
    busService: [true],
    status: ["active", Validators.required]
  });
  payrollForm = this.fb.group({
    teacher: ["", Validators.required],
    month: [(/* @__PURE__ */ new Date()).getMonth() + 1, Validators.required],
    year: [(/* @__PURE__ */ new Date()).getFullYear(), Validators.required],
    basicSalary: [0, [Validators.required, Validators.min(0)]],
    allowances: [0, Validators.min(0)],
    deductions: [0, Validators.min(0)]
  });
  promotionForm = this.fb.group({
    fromAcademicYear: ["", Validators.required],
    toAcademicYear: ["", Validators.required],
    fromClassRoom: ["", Validators.required],
    toClassRoom: ["", Validators.required]
  });
  attendanceForm = this.fb.group({
    academicYear: ["", Validators.required],
    classRoom: ["", Validators.required],
    date: [(/* @__PURE__ */ new Date()).toISOString().slice(0, 10), Validators.required]
  });
  timetableForm = this.fb.group({
    classRoom: ["", Validators.required],
    academicYear: ["", Validators.required],
    dayOfWeek: ["monday", Validators.required],
    startTime: ["09:00", Validators.required],
    endTime: ["09:45", Validators.required],
    subject: ["", Validators.required],
    teacher: ["", Validators.required],
    room: [""]
  });
  timetableDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  timetableClassName = "";
  timetableClassId = "";
  timetableSelectedDay = "monday";
  showTimetableForm = false;
  examForm = this.fb.group({
    title: ["", Validators.required],
    subject: ["", Validators.required],
    chapter: ["", Validators.required],
    bookReference: [""],
    additionalContext: [""],
    academicYear: ["", Validators.required],
    classRoom: ["", Validators.required],
    difficulty: [EXAM_DIFFICULTY.MEDIUM, Validators.required],
    questionCount: [APP_CONSTANTS.DEFAULT_EXAM_QUESTION_COUNT, Validators.required],
    durationMinutes: [APP_CONSTANTS.DEFAULT_EXAM_DURATION, Validators.required]
  });
  examAttemptForm = this.fb.group({});
  schoolBrand = null;
  ngOnInit() {
    this.loadSchoolBranding();
    this.handleEmailVerificationDeepLink();
    applyDefaultListSort(this.listSort, [
      ...this.serverPagedKeys,
      ...this.operationalPagedKeys,
      "timetable",
      "examResults",
      "dashboardStudents",
      "dashboardAttendance",
      "dashboardTeachers",
      "dashboardPayroll",
      "dashboardTimetable",
      "dashboardActivities",
      "profileExams",
      "profileFees"
    ]);
    if (this.currentUser) {
      this.permissionService.setPermissions(this.currentUser.permissions);
      this.activeTab = "dashboard";
      if (this.token) {
        this.startSessionWatch();
        if (this.currentUser.mustChangePassword) {
          this.showChangePasswordPanel = true;
        }
      }
      if (this.currentUser.role === "parent") {
        this.parentSelectedChild = this.currentUser.linkedStudents?.[0] || this.currentUser.linkedStudent || "";
      }
      this.refresh();
      this.restoreWorkspaceContext();
      this.restoreAllListingStates();
      this.api.me().subscribe({
        next: (user) => {
          this.currentUser = user;
          this.permissionService.setPermissions(user.permissions);
          localStorage.setItem(APP_CONSTANTS.LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
          if (user.mustChangePassword) {
            this.showChangePasswordPanel = true;
          }
        }
      });
    }
  }
  get tabs() {
    if (!this.currentUser)
      return [];
    const role = this.currentUser.role;
    return this.allTabs.filter((tab) => this.permissionService.canViewTab(tab.key, role)).map(({ key, label, icon }) => ({ key, label, icon }));
  }
  get isPortalUser() {
    return this.isStudent || this.isParent;
  }
  get portalStudentId() {
    if (this.isStudent)
      return this.currentUser?.student;
    if (this.isParent)
      return this.effectiveChildId || void 0;
    return void 0;
  }
  get isAdmin() {
    return this.currentUser?.role === "admin" || this.currentUser?.role === "super_admin";
  }
  get showOperationalDashboard() {
    const role = this.currentUser?.role;
    return role === "admin" || role === "super_admin" || role === "accountant" || role === "principal";
  }
  get isSuperAdmin() {
    return this.currentUser?.role === "super_admin";
  }
  can(module, action) {
    return this.permissionService.can(module, action, this.currentUser?.role);
  }
  get isTeacher() {
    return this.currentUser?.role === "teacher";
  }
  get activeAcademicYear() {
    return this.years.find((y) => y.status === "active" || y.isActive) || this.summary?.activeYear;
  }
  yearStatus(year) {
    if (year.status)
      return year.status;
    return year.isActive ? "active" : "draft";
  }
  /**
   * Academic years available when CREATING records (admissions, classes, bus
   * registrations, fee demands). Closed sessions are excluded here — they remain
   * in list/report filters (vm.years) so historical data can still be fetched.
   */
  get openYears() {
    return this.years.filter((year) => this.yearStatus(year) !== "closed");
  }
  applyActiveYearDefaults() {
    const active = this.activeAcademicYear;
    if (!active)
      return;
    if (!this.admissionForm.get("academicYear")?.value && !this.editingStudentId) {
      this.admissionForm.patchValue({ academicYear: active._id });
    }
    if (!this.filters.studentYear) {
      this.filters.studentYear = active._id;
    }
    if (!this.classForm.get("academicYear")?.value && !this.editingClassId) {
      this.classForm.patchValue({ academicYear: active._id });
    }
    if (!this.feeDemandForm.get("academicYear")?.value) {
      this.feeDemandForm.patchValue({ academicYear: active._id });
    }
    if (!this.busRegistrationForm.get("academicYear")?.value) {
      this.busRegistrationForm.patchValue({ academicYear: active._id });
    }
    if (!this.filters.busRegYear)
      this.filters.busRegYear = active._id;
    if (!this.filters.busReportYear)
      this.filters.busReportYear = active._id;
    if (!this.filters.attendanceYear)
      this.filters.attendanceYear = active._id;
    if (!this.filters.reportYear)
      this.filters.reportYear = active._id;
    if (!this.filters.invoiceYear)
      this.filters.invoiceYear = active._id;
    if (!this.filters.invoiceMonth)
      this.filters.invoiceMonth = String((/* @__PURE__ */ new Date()).getMonth() + 1);
    if (!this.promotionForm.get("fromAcademicYear")?.value) {
      this.promotionForm.patchValue({ fromAcademicYear: active._id });
    }
    if (!this.attendanceForm.get("academicYear")?.value) {
      this.attendanceForm.patchValue({ academicYear: active._id });
    }
  }
  get isStudent() {
    return this.currentUser?.role === "student";
  }
  get isParent() {
    return this.currentUser?.role === "parent";
  }
  get selectedRoleLabel() {
    return this.loginRoles.find((role) => role.key === this.selectedLoginRole)?.label || "User";
  }
  get selectedRolePlaceholder() {
    return this.loginRoles.find((role) => role.key === this.selectedLoginRole)?.placeholder || "email@schoolerp.local";
  }
  get selectedRoleHint() {
    return this.loginRoles.find((role) => role.key === this.selectedLoginRole)?.hint || "";
  }
  get workspaceTitle() {
    const titles = {
      dashboard: "Overview & insights",
      students: "Student admissions",
      classes: "Classes & academic years",
      teachers: "Teacher management",
      fees: "Fee collection",
      "fee-prediction": "AI fee prediction",
      transport: "Bus management",
      drivers: "Drivers & fleet",
      payroll: "Payroll processing",
      promotion: "Student promotions",
      attendance: "Attendance tracking",
      timetable: "Class schedules",
      "timetable-generator": "Master timetable",
      exams: "AI-powered unit tests",
      profile: "Student profile & AI insights",
      users: "Users & access control",
      reports: "Reports & analytics"
    };
    return titles[this.activeTab] || "Operations workspace";
  }
  loadSchoolBranding() {
    this.api.schoolBranding().subscribe({
      next: (brand) => {
        this.schoolBrand = brand;
        if (brand?.name && typeof document !== "undefined") {
          document.title = brand.name;
          const meta = document.querySelector('meta[name="app-school-name"]');
          if (meta)
            meta.content = brand.name;
        }
      },
      error: () => {
        this.schoolBrand = {
          name: "School ERP",
          slug: typeof window !== "undefined" ? window.location.hostname.split(".")[0] : "default"
        };
      }
    });
  }
  selectLoginRole(role) {
    this.selectedLoginRole = role;
    this.message = "";
  }
  get roleLabel() {
    return this.currentUser?.role ? this.currentUser.role.replace(/\b\w/g, (char) => char.toUpperCase()) : "User";
  }
  get parentChildIds() {
    if (!this.isParent || !this.currentUser)
      return [];
    return this.currentUser.linkedStudents?.length ? this.currentUser.linkedStudents : this.currentUser.linkedStudent ? [this.currentUser.linkedStudent] : [];
  }
  get parentChildren() {
    return this.students.filter((s) => this.parentChildIds.includes(s._id));
  }
  get effectiveChildId() {
    if (this.parentSelectedChild && this.parentChildIds.includes(this.parentSelectedChild))
      return this.parentSelectedChild;
    return this.parentChildIds[0] || "";
  }
  selectParentChild(childId) {
    this.parentSelectedChild = childId;
    this.message = "";
    if (!this.isParent)
      return;
    this.filters.attendanceStudent = childId;
    if (this.loadedTabs.has("attendance"))
      this.ensurePortalTabData("attendance", true);
    if (this.loadedTabs.has("fees"))
      this.ensurePortalTabData("fees", true);
    if (this.activeTab === "profile")
      this.loadStudentProfile(childId);
  }
  get activeTabLabel() {
    return this.allTabs.find((tab) => tab.key === this.activeTab)?.label || "Workspace";
  }
  login() {
    const { email, password } = this.loginForm.getRawValue();
    this.needsEmailVerification = false;
    this.resendVerificationMessage = "";
    this.resendVerificationError = "";
    this.resendVerificationDevLink = "";
    this.api.login(email || "", password || "").subscribe({
      next: ({ token, user }) => {
        if (!this.isLoginRoleCompatible(user.role, this.selectedLoginRole)) {
          this.message = `This account is registered as ${this.roleLabelFor(user.role)}. Please select the correct role and try again.`;
          return;
        }
        this.persistSession(token, user);
        this.activeTab = "dashboard";
        this.message = "";
        this.needsEmailVerification = false;
        this.loginForm.reset({ email: "", password: "" });
        if (user.mustChangePassword || user.passwordExpired) {
          this.showChangePasswordPanel = true;
          this.toast.warning("You must change your password before continuing.");
        }
        this.refresh();
      },
      error: (error) => {
        this.message = error.error?.message || "Login failed. Check email and password.";
        this.needsEmailVerification = error.error?.code === "EMAIL_NOT_VERIFIED";
      }
    });
  }
  resendVerificationEmail() {
    if (this.resendVerificationLoading || this.resendVerificationSeconds > 0)
      return;
    const email = String(this.loginForm.get("email")?.value || "").trim();
    if (!email) {
      this.resendVerificationError = "Enter your email above, then resend the verification link.";
      return;
    }
    this.resendVerificationLoading = true;
    this.resendVerificationError = "";
    this.resendVerificationMessage = "";
    this.resendVerificationDevLink = "";
    this.api.resendVerification(email).subscribe({
      next: (res) => {
        this.resendVerificationLoading = false;
        this.startResendVerificationCountdown(60);
        if (res.alreadyVerified) {
          this.needsEmailVerification = false;
          this.message = res.message;
          this.resendVerificationMessage = "";
          return;
        }
        if (res.emailSent) {
          this.resendVerificationMessage = `Verification link sent to ${email}. Check your inbox (and spam folder).`;
        } else if (res.devLink) {
          this.resendVerificationMessage = "Email is not configured on the server. Use the verification link below (development mode).";
          this.resendVerificationDevLink = res.devLink;
        } else {
          this.resendVerificationMessage = res.message || "If an unverified account exists, a verification link has been sent.";
        }
      },
      error: (error) => {
        this.resendVerificationLoading = false;
        this.resendVerificationError = error.error?.message || "Could not resend the verification link.";
      }
    });
  }
  startResendVerificationCountdown(seconds = 60) {
    this.stopResendVerificationCountdown();
    this.resendVerificationSeconds = seconds;
    this.resendVerificationTimer = setInterval(() => {
      this.resendVerificationSeconds -= 1;
      if (this.resendVerificationSeconds <= 0)
        this.stopResendVerificationCountdown();
    }, 1e3);
  }
  stopResendVerificationCountdown() {
    if (this.resendVerificationTimer) {
      clearInterval(this.resendVerificationTimer);
      this.resendVerificationTimer = null;
    }
    this.resendVerificationSeconds = 0;
  }
  handleEmailVerificationDeepLink() {
    if (typeof window === "undefined")
      return;
    const path = window.location.pathname || "";
    const params = new URLSearchParams(window.location.search || "");
    const token = params.get("token") || "";
    if (!token)
      return;
    if (!/verify-email/i.test(path) && !params.has("verify"))
      return;
    this.verifyEmailToken = token;
    this.showVerifyEmailPanel = true;
    this.verifyEmailMessage = "";
    this.verifyEmailError = "";
    window.history.replaceState({}, document.title, "/");
  }
  closeVerifyEmailPanel() {
    this.showVerifyEmailPanel = false;
    this.verifyEmailToken = "";
    this.verifyEmailPassword = "";
    this.verifyEmailConfirmPassword = "";
    this.verifyEmailLoading = false;
    this.verifyEmailMessage = "";
    this.verifyEmailError = "";
  }
  submitEmailVerification() {
    if (!this.verifyEmailToken || this.verifyEmailLoading)
      return;
    if (this.verifyEmailPassword || this.verifyEmailConfirmPassword) {
      if (this.verifyEmailPassword.length < 8) {
        this.verifyEmailError = "Password must be at least 8 characters.";
        return;
      }
      if (this.verifyEmailPassword !== this.verifyEmailConfirmPassword) {
        this.verifyEmailError = "Passwords do not match.";
        return;
      }
    }
    this.verifyEmailLoading = true;
    this.verifyEmailError = "";
    this.verifyEmailMessage = "";
    this.api.verifyEmail(this.verifyEmailToken, this.verifyEmailPassword || void 0).subscribe({
      next: (res) => {
        this.verifyEmailLoading = false;
        this.verifyEmailMessage = res.passwordSet ? `Email verified for ${res.email}. You can sign in with your new password.` : `Email verified for ${res.email}. You can sign in now.`;
        if (res.email) {
          this.loginForm.patchValue({ email: res.email });
        }
        this.needsEmailVerification = false;
        this.message = "";
      },
      error: (error) => {
        this.verifyEmailLoading = false;
        this.verifyEmailError = error.error?.message || "Verification failed. Request a new link from the login screen.";
      }
    });
  }
  openForgotPassword() {
    this.showForgotPassword = true;
    this.forgotStep = "request";
    this.forgotMessage = "";
    this.forgotError = "";
    this.forgotDevOtp = "";
    this.forgotForm.reset({
      email: this.loginForm.get("email")?.value || "",
      otp: "",
      newPassword: "",
      confirmPassword: ""
    });
  }
  closeForgotPassword() {
    this.showForgotPassword = false;
    this.forgotLoading = false;
    this.stopForgotResendCountdown();
    this.forgotForm.reset({ email: "", otp: "", newPassword: "", confirmPassword: "" });
  }
  startForgotResendCountdown(seconds = 60) {
    this.stopForgotResendCountdown();
    this.forgotResendSeconds = seconds;
    this.forgotResendTimer = setInterval(() => {
      this.forgotResendSeconds -= 1;
      if (this.forgotResendSeconds <= 0) {
        this.stopForgotResendCountdown();
      }
    }, 1e3);
  }
  stopForgotResendCountdown() {
    if (this.forgotResendTimer) {
      clearInterval(this.forgotResendTimer);
      this.forgotResendTimer = null;
    }
    this.forgotResendSeconds = 0;
  }
  requestResetOtp() {
    if (this.forgotStep === "reset" && this.forgotResendSeconds > 0)
      return;
    const email = String(this.forgotForm.get("email")?.value || "").trim();
    if (!email) {
      this.forgotError = "Please enter your registered email address.";
      return;
    }
    this.forgotLoading = true;
    this.forgotError = "";
    this.forgotMessage = "";
    this.api.forgotPassword(email).subscribe({
      next: (res) => {
        this.forgotLoading = false;
        this.forgotStep = "reset";
        this.startForgotResendCountdown(60);
        this.forgotDevOtp = res.devOtp || "";
        if (res.emailSent) {
          this.forgotMessage = `We've emailed a one-time code to ${email}. It expires in ${res.expiresInMinutes ?? 10} minutes.`;
        } else if (res.devOtp) {
          this.forgotMessage = "Email is not configured on the server, so the code is shown below (development mode).";
          this.forgotForm.patchValue({ otp: res.devOtp });
        } else {
          this.forgotMessage = res.message || "If an account exists for that email, a one-time code has been sent.";
        }
      },
      error: (error) => {
        this.forgotLoading = false;
        this.forgotError = error.error?.message || "Could not send the reset code. Please try again.";
      }
    });
  }
  submitResetPassword() {
    const { email, otp, newPassword, confirmPassword } = this.forgotForm.getRawValue();
    this.forgotError = "";
    if (!otp || String(otp).trim().length < 4) {
      this.forgotError = "Enter the code sent to your email.";
      return;
    }
    if (!newPassword) {
      this.forgotError = "Enter a new password.";
      return;
    }
    if (newPassword !== confirmPassword) {
      this.forgotError = "Passwords do not match.";
      return;
    }
    this.forgotLoading = true;
    this.api.resetPassword(String(email || "").trim(), String(otp).trim(), String(newPassword)).subscribe({
      next: () => {
        this.forgotLoading = false;
        this.toast.success("Password reset successfully. Please sign in with your new password.");
        this.loginForm.patchValue({ email: String(email || "").trim(), password: "" });
        this.closeForgotPassword();
      },
      error: (error) => {
        this.forgotLoading = false;
        this.forgotError = error.error?.message || "Could not reset password. Check the code and try again.";
      }
    });
  }
  logout(options = {}) {
    if (!options.force && this.currentUser) {
      void this.confirmLogout();
      return;
    }
    this.performLogout();
  }
  confirmLogout() {
    return __async(this, null, function* () {
      const confirmed = yield this.confirmAction({
        title: "Logout",
        message: "Are you sure you want to sign out of CampusFlow ERP?",
        confirmLabel: "Logout",
        danger: true
      });
      if (!confirmed)
        return;
      this.performLogout();
    });
  }
  performLogout() {
    if (this.token) {
      this.api.logout().subscribe({ error: () => void 0 });
    }
    this.stopSessionWatch();
    this.clearSession();
    this.isProfileMenuOpen = false;
    this.showChangePasswordPanel = false;
    this.message = "";
    this.sessionContext.clear();
    this.listingState.clearAll(Object.keys(LIST_FILTER_KEYS));
  }
  isLoginRoleCompatible(actual, selected) {
    if (actual === selected)
      return true;
    if (selected === "admin") {
      return ["super_admin", "admin", "principal", "accountant", "reception", "receptionist", "transport_manager"].includes(actual);
    }
    return false;
  }
  changePassword() {
    const { currentPassword, newPassword, confirmPassword } = this.changePasswordForm.getRawValue();
    if (newPassword !== confirmPassword) {
      this.toast.error("New passwords do not match");
      return;
    }
    this.api.changePassword(currentPassword || "", newPassword || "").subscribe({
      next: (response) => {
        this.persistSession(response.token, response.user);
        this.showChangePasswordPanel = false;
        this.toast.success("Password updated");
        this.changePasswordForm.reset();
      },
      error: (err) => this.toast.error(extractApiMessage(err, "Password change failed"))
    });
  }
  issueTemporaryPassword(userId) {
    if (!this.can("users", "edit"))
      return;
    this.api.issueTemporaryPassword(userId).subscribe({
      next: (result) => {
        this.toast.success(`Temporary password issued: ${result.temporaryPassword}`);
        this.refresh();
      },
      error: (err) => this.toast.error(extractApiMessage(err, "Failed to issue temporary password"))
    });
  }
  unlockUserAccount(userId) {
    if (!this.can("users", "unlock"))
      return;
    this.api.unlockUserAccount(userId).subscribe({
      next: () => {
        this.toast.success("User account unlocked");
        this.refresh();
      },
      error: (err) => this.toast.error(extractApiMessage(err, "Failed to unlock account"))
    });
  }
  onUserActivity() {
    if (!this.currentUser)
      return;
    this.lastActivityAt = Date.now();
    sessionStorage.setItem(APP_CONSTANTS.SESSION_ACTIVITY_KEY, String(this.lastActivityAt));
  }
  startSessionWatch() {
    this.stopSessionWatch();
    const stored = Number(sessionStorage.getItem(APP_CONSTANTS.SESSION_ACTIVITY_KEY) || Date.now());
    this.lastActivityAt = stored;
    this.sessionWatchHandle = setInterval(() => {
      const idleMs = Date.now() - this.lastActivityAt;
      if (idleMs > this.sessionIdleMinutes * 60 * 1e3) {
        this.toast.warning("Session expired due to inactivity");
        this.logout({ force: true });
      }
    }, 6e4);
  }
  stopSessionWatch() {
    if (this.sessionWatchHandle) {
      clearInterval(this.sessionWatchHandle);
      this.sessionWatchHandle = void 0;
    }
    sessionStorage.removeItem(APP_CONSTANTS.SESSION_ACTIVITY_KEY);
  }
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
  closeProfileMenu() {
    this.isProfileMenuOpen = false;
  }
  onDocumentClick(event) {
    const target = event.target;
    if (this.isProfileMenuOpen && !target.closest(".profile-menu-wrap")) {
      this.isProfileMenuOpen = false;
    }
    if (this.isNotificationMenuOpen && !target.closest(".notification-menu-wrap")) {
      this.isNotificationMenuOpen = false;
    }
    if (this.globalSearchOpen && !target.closest(".global-search-wrap")) {
      this.globalSearchOpen = false;
    }
  }
  onGlobalSearchShortcut(event) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      const input = document.querySelector(".global-search-input");
      input?.focus();
      return;
    }
    if (!this.globalSearchOpen || !this.globalSearchResults.length) {
      if (event.key === "Escape" && this.globalSearchOpen) {
        this.clearGlobalSearch();
      }
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      this.globalSearchActiveIndex = Math.min(this.globalSearchActiveIndex + 1, this.globalSearchResults.length - 1);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      this.globalSearchActiveIndex = Math.max(this.globalSearchActiveIndex - 1, 0);
      return;
    }
    if (event.key === "Enter" && this.globalSearchActiveIndex >= 0) {
      event.preventDefault();
      const result = this.globalSearchResults[this.globalSearchActiveIndex];
      if (result)
        this.openGlobalSearchResult(result);
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      this.clearGlobalSearch();
    }
  }
  refresh() {
    if (!this.currentUser)
      return;
    this.loadWorkflowNotifications();
    if (this.isPortalUser) {
      this.loadPortalShell();
      if (this.activeTab !== "dashboard")
        this.ensurePortalTabData(this.activeTab, true);
      return;
    }
    if (this.isTeacher) {
      this.loadTeacherShell();
      if (this.activeTab !== "dashboard")
        this.ensureTeacherTabData(this.activeTab, true);
      return;
    }
    this.refreshAdminWorkspace();
  }
  applyDashboardPayload(summary) {
    this.summary = summary;
    if (summary?.activeYear) {
      this.years = [summary.activeYear];
      this.applyActiveYearDefaults();
    }
  }
  loadPortalShell() {
    this.loading = true;
    const requests = {
      summary: this.safeRefresh(this.api.dashboard(), {})
    };
    if (this.isParent) {
      requests.students = this.safeRefresh(this.api.students({ page: 1, pageSize: 20 }).pipe(map((r) => r.data)), []);
    }
    this.forkJoinMap(requests).subscribe({
      next: (data) => {
        this.applyDashboardPayload(data.summary);
        if (data.students)
          this.students = data.students;
        this.loading = false;
        this.submitting = false;
        this.loadedTabs.add("dashboard");
      },
      error: () => {
        this.toast.error("Could not load dashboard. Check backend and your permissions.");
        this.loading = false;
      }
    });
  }
  loadTeacherShell() {
    this.loading = true;
    this.safeRefresh(this.api.dashboard(), {}).subscribe({
      next: (summary) => {
        this.applyDashboardPayload(summary);
        this.loading = false;
        this.submitting = false;
        this.loadedTabs.add("dashboard");
      },
      error: () => {
        this.toast.error("Could not load dashboard. Check backend and your permissions.");
        this.loading = false;
      }
    });
  }
  ensurePortalTabData(tab, force = false) {
    if (!force && this.loadedTabs.has(tab))
      return;
    switch (tab) {
      case "dashboard":
        if (!this.summary)
          this.loadPortalShell();
        else
          this.loadedTabs.add("dashboard");
        return;
      case "fees":
        this.loading = true;
        forkJoin({
          invoices: this.safeRefresh(this.api.invoices({ page: 1, pageSize: 50 }).pipe(map((r) => r.data)), []),
          feeHistory: this.safeRefresh(this.api.feeHistory({ page: 1, pageSize: 50 }).pipe(map((r) => r.data)), [])
        }).subscribe({
          next: (data) => {
            this.invoices = data.invoices;
            this.feeHistory = data.feeHistory;
            this.loadedTabs.add("fees");
            this.loading = false;
          },
          error: () => {
            this.loading = false;
          }
        });
        return;
      case "attendance":
        if (this.portalStudentId)
          this.filters.attendanceStudent = this.portalStudentId;
        this.loading = true;
        this.safeRefresh(this.api.attendance({ page: 1, pageSize: 100 }).pipe(map((r) => r.data)), []).subscribe({
          next: (rows) => {
            this.attendance = rows;
            this.loadedTabs.add("attendance");
            this.loading = false;
            this.loadHolidays();
          },
          error: () => {
            this.loading = false;
          }
        });
        return;
      case "timetable":
        this.loading = true;
        this.safeRefresh(this.api.timetable(), []).subscribe({
          next: (rows) => {
            this.timetable = rows;
            this.ensureTimetableSelection();
            this.loadedTabs.add("timetable");
            this.loading = false;
          },
          error: () => {
            this.loading = false;
          }
        });
        return;
      case "exams":
        this.loading = true;
        forkJoin({
          exams: this.safeRefresh(this.api.exams({ page: 1, pageSize: 100 }).pipe(map((r) => r.data)), []),
          examResults: this.safeRefresh(this.api.examResults(), [])
        }).subscribe({
          next: (data) => {
            this.exams = data.exams;
            this.examResults = data.examResults;
            this.loadedTabs.add("exams");
            this.loading = false;
          },
          error: () => {
            this.loading = false;
          }
        });
        return;
      case "profile":
        this.loadedTabs.add("profile");
        if (this.isStudent && this.currentUser?.student)
          this.loadStudentProfile(this.currentUser.student);
        else if (this.isParent && this.effectiveChildId)
          this.loadStudentProfile(this.effectiveChildId);
        return;
    }
  }
  ensureTeacherTabData(tab, force = false) {
    if (!force && this.loadedTabs.has(tab))
      return;
    switch (tab) {
      case "dashboard":
        if (!this.summary)
          this.loadTeacherShell();
        else
          this.loadedTabs.add("dashboard");
        return;
      case "students":
        this.loading = true;
        forkJoin({
          students: this.safeRefresh(this.api.students({ page: 1, pageSize: 500 }).pipe(map((r) => r.data)), []),
          classes: this.safeRefresh(this.api.classes({ page: 1, pageSize: 500 }).pipe(map((r) => r.data)), [])
        }).subscribe({
          next: (data) => {
            this.students = data.students;
            this.classes = data.classes;
            this.loadedTabs.add("students");
            this.loading = false;
          },
          error: () => {
            this.loading = false;
          }
        });
        return;
      case "teachers":
        this.loading = true;
        this.safeRefresh(this.api.teachers({ page: 1, pageSize: 500 }).pipe(map((r) => r.data)), []).subscribe({
          next: (rows) => {
            this.teachers = rows;
            this.loadedTabs.add("teachers");
            this.loading = false;
          },
          error: () => {
            this.loading = false;
          }
        });
        return;
      case "attendance": {
        const requests = {
          attendance: this.safeRefresh(this.api.attendance({ page: 1, pageSize: 200 }).pipe(map((r) => r.data)), [])
        };
        if (!this.classes.length) {
          requests.classes = this.safeRefresh(this.api.classes({ page: 1, pageSize: 500 }).pipe(map((r) => r.data)), []);
        }
        if (!this.students.length) {
          requests.students = this.safeRefresh(this.api.students({ page: 1, pageSize: 500 }).pipe(map((r) => r.data)), []);
        }
        this.loading = true;
        this.forkJoinMap(requests).subscribe({
          next: (data) => {
            this.attendance = data.attendance;
            if (data.classes)
              this.classes = data.classes;
            if (data.students)
              this.students = data.students;
            this.applyActiveYearDefaults();
            this.loadedTabs.add("attendance");
            this.loading = false;
            this.loadSelfAttendanceStatus();
            this.loadHolidays();
          },
          error: () => {
            this.loading = false;
          }
        });
        return;
      }
      case "timetable":
        this.loading = true;
        this.safeRefresh(this.api.timetable(), []).subscribe({
          next: (rows) => {
            this.timetable = rows;
            this.ensureTimetableSelection();
            this.loadedTabs.add("timetable");
            this.loading = false;
          },
          error: () => {
            this.loading = false;
          }
        });
        return;
      case "exams":
        this.loading = true;
        forkJoin({
          exams: this.safeRefresh(this.api.exams({ page: 1, pageSize: 100 }).pipe(map((r) => r.data)), []),
          examResults: this.safeRefresh(this.api.examResults(), [])
        }).subscribe({
          next: (data) => {
            this.exams = data.exams;
            this.examResults = data.examResults;
            this.loadedTabs.add("exams");
            this.loading = false;
          },
          error: () => {
            this.loading = false;
          }
        });
        return;
      case "profile":
        this.loadedTabs.add("profile");
        return;
    }
  }
  forkJoinMap(sources) {
    return forkJoin(sources);
  }
  safeRefresh(request, fallback) {
    return request.pipe(catchError(() => of(fallback)));
  }
  refreshAdminWorkspace() {
    this.loading = true;
    this.forkJoinMap(this.buildAdminRefreshRequests()).subscribe({
      next: (data) => {
        this.summary = data.summary;
        this.years = data.years.length ? data.years : this.summary?.activeYear ? [this.summary.activeYear] : [];
        this.applyActiveYearDefaults();
        this.classes = data.classes;
        this.teachers = data.teachers;
        this.students = data.students;
        this.invoices = data.invoices;
        this.feeHistory = data.feeHistory;
        this.busRoutes = data.busRoutes;
        this.busRegistrations = data.busRegistrations;
        this.payrolls = data.payrolls;
        this.attendance = data.attendance;
        this.holidays = data.holidays;
        this.holidaysLoaded = true;
        this.timetable = data.timetable;
        this.ensureTimetableSelection();
        this.exams = data.exams;
        this.examResults = data.examResults;
        this.users = data.users;
        this.roles = data.roles;
        this.permissionSchema = data.permissionSchema;
        if (this.roles.length && !this.selectedRoleSlug) {
          this.selectRoleForEdit(this.roles[0].slug);
        }
        this.loading = false;
        this.submitting = false;
        this.loadReferenceData();
        this.loadAssignmentPickers();
        this.loadServerListings();
        this.loadSelfAttendanceStatus();
        this.loadWorkflowNotifications();
        if (this.can("transport", "view"))
          this.loadBusReport();
        if (this.can("attendance", "view"))
          this.loadAttendanceReport();
      },
      error: () => {
        this.toast.error("Could not load workspace data. Check backend, MongoDB, and your role permissions.");
        this.loading = false;
      }
    });
  }
  buildAdminRefreshRequests() {
    const empty = {
      years: [],
      classes: [],
      teachers: [],
      students: [],
      invoices: [],
      feeHistory: [],
      busRoutes: [],
      busRegistrations: [],
      payrolls: [],
      attendance: [],
      holidays: [],
      timetable: [],
      exams: [],
      examResults: [],
      users: [],
      roles: [],
      permissionSchema: { modules: [], actions: [] }
    };
    const requests = {
      summary: this.safeRefresh(this.api.dashboard(), {}),
      years: of(empty.years),
      classes: of(empty.classes),
      teachers: of(empty.teachers),
      students: of(empty.students),
      invoices: of(empty.invoices),
      feeHistory: of(empty.feeHistory),
      busRoutes: of(empty.busRoutes),
      busRegistrations: of(empty.busRegistrations),
      payrolls: of(empty.payrolls),
      attendance: of(empty.attendance),
      holidays: of(empty.holidays),
      timetable: of(empty.timetable),
      exams: of(empty.exams),
      examResults: of(empty.examResults),
      users: of(empty.users),
      roles: of(empty.roles),
      permissionSchema: of(empty.permissionSchema)
    };
    if (this.can("academic_year", "view")) {
      requests.years = of(empty.years);
    } else {
      requests.years = of(empty.years);
    }
    if (this.can("classes", "view")) {
      requests.classes = of(empty.classes);
    } else {
      requests.classes = of(empty.classes);
    }
    if (this.can("teachers", "view")) {
      requests.teachers = of(empty.teachers);
    } else {
      requests.teachers = of(empty.teachers);
    }
    if (this.can("students", "view")) {
      requests.students = of(empty.students);
    } else {
      requests.students = of(empty.students);
    }
    if (this.can("fees", "view")) {
      requests.invoices = of(empty.invoices);
      requests.feeHistory = of(empty.feeHistory);
    } else {
      requests.invoices = of(empty.invoices);
      requests.feeHistory = of(empty.feeHistory);
    }
    if (this.can("transport", "view")) {
      requests.busRoutes = of(empty.busRoutes);
      requests.busRegistrations = of(empty.busRegistrations);
    } else {
      requests.busRoutes = of(empty.busRoutes);
      requests.busRegistrations = of(empty.busRegistrations);
    }
    if (this.can("payroll", "view")) {
      requests.payrolls = of(empty.payrolls);
    } else {
      requests.payrolls = of(empty.payrolls);
    }
    if (this.can("attendance", "view")) {
      requests.attendance = of(empty.attendance);
      requests.holidays = this.safeRefresh(this.api.holidays(), empty.holidays);
    } else {
      requests.attendance = of(empty.attendance);
      requests.holidays = of(empty.holidays);
    }
    if (this.can("timetable", "view")) {
      requests.timetable = this.safeRefresh(this.api.timetable(), empty.timetable);
    } else {
      requests.timetable = of(empty.timetable);
    }
    if (this.can("exams", "view")) {
      requests.exams = of(empty.exams);
      requests.examResults = this.safeRefresh(this.api.examResults(), empty.examResults);
    } else {
      requests.exams = of(empty.exams);
      requests.examResults = of(empty.examResults);
    }
    if (this.can("users", "view")) {
      requests.users = of(empty.users);
    } else {
      requests.users = of(empty.users);
    }
    if (this.can("roles", "view")) {
      requests.roles = this.safeRefresh(this.api.roles(), empty.roles);
      requests.permissionSchema = this.safeRefresh(this.api.rolePermissionSchema(), empty.permissionSchema);
    } else {
      requests.roles = of(empty.roles);
      requests.permissionSchema = of(empty.permissionSchema);
    }
    return requests;
  }
  loadReferenceData() {
    if (this.can("academic_year", "view")) {
      this.safeRefresh(this.api.academicYears({ page: 1, pageSize: 100 }).pipe(map((r) => r.data)), []).subscribe((rows) => {
        this.years = rows.length ? rows : this.summary?.activeYear ? [this.summary.activeYear] : [];
        this.applyActiveYearDefaults();
      });
    }
    if (this.can("classes", "view")) {
      this.safeRefresh(this.api.classes({ page: 1, pageSize: 100 }).pipe(map((r) => r.data)), []).subscribe((rows) => {
        this.classes = rows;
      });
    }
    if (this.can("teachers", "view")) {
      this.safeRefresh(this.api.teachers({ page: 1, pageSize: 100 }).pipe(map((r) => r.data)), []).subscribe((rows) => {
        this.teachers = rows;
      });
    }
    if (this.can("transport", "view")) {
      this.safeRefresh(this.api.busRoutes({ page: 1, pageSize: 100 }).pipe(map((r) => r.data)), []).subscribe((rows) => {
        if (!this.isServerPaged("busRoutes"))
          this.busRoutes = rows;
      });
    }
  }
  loadAssignmentPickers() {
    if (this.can("students", "view")) {
      this.safeRefresh(this.api.students({ page: 1, pageSize: 500, status: "active", sortField: "admissionNumber", sortDir: "asc" }).pipe(map((r) => r.data)), []).subscribe((rows) => {
        this.pickerStudents = rows;
        if (this.isAdmin)
          this.students = rows;
      });
    }
    if (this.can("users", "view")) {
      this.safeRefresh(this.api.listUsers({ page: 1, pageSize: 200, role: "parent" }).pipe(map((r) => r.data)), []).subscribe((rows) => {
        this.parentAccounts = rows;
      });
    }
    if (this.isAdmin && this.can("attendance", "view") && !this.attendance.length) {
      this.safeRefresh(this.api.attendance({ page: 1, pageSize: 200, sortField: "date", sortDir: "desc" }).pipe(map((r) => r.data)), []).subscribe((rows) => {
        this.attendance = rows;
      });
    }
  }
  get studentPickerOptions() {
    if (this.pickerStudents.length)
      return this.pickerStudents;
    const listed = this.listingRows.students ?? [];
    if (listed.length)
      return listed;
    return this.students;
  }
  get guardianSuggestions() {
    const names = /* @__PURE__ */ new Set();
    for (const parent of this.parentAccounts) {
      const name = (parent?.name || "").trim();
      if (name)
        names.add(name);
    }
    for (const student of this.studentPickerOptions) {
      const guardian = student?.guardians?.find((g) => (g?.name || "").trim());
      const name = (guardian?.name || "").trim();
      if (name)
        names.add(name);
    }
    return Array.from(names).sort((a, b) => a.localeCompare(b));
  }
  parentPickerTerm = "";
  parentPickerResults = [];
  parentPickerOpen = false;
  parentPickerLoading = false;
  parentPickerTimer = null;
  onParentPickerFocus() {
    this.parentPickerOpen = true;
  }
  onParentPickerBlur() {
    setTimeout(() => {
      this.parentPickerOpen = false;
    }, 180);
  }
  onParentPickerInput(term) {
    this.parentPickerTerm = term;
    this.parentPickerOpen = true;
    if (this.parentPickerTimer)
      clearTimeout(this.parentPickerTimer);
    const search = (term || "").trim();
    if (search.length < 2) {
      this.parentPickerResults = [];
      this.parentPickerLoading = false;
      return;
    }
    this.parentPickerLoading = true;
    this.parentPickerTimer = setTimeout(() => this.searchParentAccounts(search), 300);
  }
  searchParentAccounts(term) {
    const search = (term || "").trim();
    if (search.length < 2) {
      this.parentPickerResults = [];
      this.parentPickerLoading = false;
      return;
    }
    this.parentPickerLoading = true;
    this.api.searchParents(search).pipe(map((response) => response.data ?? [])).subscribe({
      next: (rows) => {
        this.parentPickerResults = rows;
        this.parentPickerLoading = false;
      },
      error: () => {
        this.parentPickerResults = [];
        this.parentPickerLoading = false;
      }
    });
  }
  selectParentAccount(result) {
    const patch = {};
    if (result.name)
      patch["guardianName"] = result.name;
    if (result.relation)
      patch["guardianRelation"] = result.relation;
    if (result.phone)
      patch["guardianPhone"] = result.phone;
    if (result.email)
      patch["guardianEmail"] = result.email;
    if (result.parentUserId && !this.editingStudentId)
      patch["parentUserId"] = result.parentUserId;
    this.admissionForm.patchValue(patch);
    this.parentPickerTerm = result.phone ? `${result.name} \xB7 ${result.phone}` : result.name;
    this.parentPickerResults = [];
    this.parentPickerOpen = false;
  }
  clearParentSelection() {
    this.admissionForm.patchValue({ parentUserId: "" });
    this.parentPickerTerm = "";
    this.parentPickerResults = [];
    this.parentPickerOpen = false;
  }
  parentInitials(result) {
    return (result?.name || "?").trim().charAt(0).toUpperCase();
  }
  showAdmissionModal = false;
  openAdmissionModal() {
    this.editingStudentId = "";
    this.resetAdmissionForm();
    this.files = {};
    this.clearParentSelection();
    this.loadAssignmentPickers();
    this.message = "";
    this.showAdmissionModal = true;
  }
  closeAdmissionModal() {
    this.showAdmissionModal = false;
    this.editingStudentId = "";
    this.resetAdmissionForm();
    this.files = {};
    this.clearParentSelection();
  }
  resetAdmissionForm() {
    this.admissionForm.reset({
      admissionNumber: "",
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "male",
      dateOfBirth: "",
      bloodGroup: "",
      category: "",
      nationality: "Indian",
      motherName: "",
      aadhaarNumber: "",
      udisePenId: "",
      line1: "",
      city: "",
      state: "",
      pincode: "",
      guardianName: "",
      guardianRelation: APP_CONSTANTS.DEFAULT_GUARDIAN_RELATION,
      guardianPhone: "",
      guardianEmail: "",
      parentUserId: "",
      academicYear: "",
      classRoom: "",
      rollNumber: "",
      studentStatus: "active",
      hasPreviousSchool: "no",
      previousSchool: "",
      previousSchoolBoard: "",
      previousSchoolPercentage: "",
      previousSchoolRollNumber: "",
      previousSchoolAddress: "",
      previousSchoolLastClass: "",
      previousSchoolYearOfPassing: "",
      previousSchoolReasonForLeaving: "",
      previousSchoolTcNumber: "",
      previousSchoolTcDate: ""
    });
    const active = this.activeAcademicYear;
    if (active?._id)
      this.admissionForm.patchValue({ academicYear: active._id });
    this.admissionFeePreview = null;
    this.admissionFeePreviewLoading = false;
  }
  closeStudentDocuments() {
    this.selectedStudentId = "";
    this.selectedStudentDocuments = [];
  }
  setTab(tab) {
    if (!this.tabs.some((item) => item.key === tab))
      return;
    this.activeTab = tab;
    if (this.isPortalUser) {
      this.ensurePortalTabData(tab);
      return;
    }
    if (this.isTeacher) {
      this.ensureTeacherTabData(tab);
      return;
    }
    const tabListKey = {
      students: "students",
      classes: "classes",
      teachers: "teachers",
      users: "users"
    };
    const listKey = tabListKey[tab];
    if (listKey)
      this.loadListing(listKey);
    if (tab === "students" || tab === "users")
      this.loadAssignmentPickers();
    if (tab === "reports" && this.can("reports", "view"))
      this.loadReport();
    if (tab === "fees" && this.can("fees", "view")) {
      if (!this.isPortalUser) {
        this.loadListing("invoices");
        this.loadListing("feeHistory");
        this.loadCollectableInvoices();
        this.loadFeeSummary();
        if (!this.collectAcademicYear)
          this.collectAcademicYear = this.activeAcademicYear?._id || "";
      }
    }
    if (tab === "fee-prediction" && this.can("fee_prediction", "view")) {
      this.loadFeePredictions();
    }
    if (tab === "timetable-generator" && this.can("timetable_generator", "view")) {
      this.loadTimetableGenerator();
    }
    if (tab === "payroll" && this.can("payroll", "view"))
      this.loadListing("payroll");
    if (tab === "transport" && this.can("transport", "view")) {
      this.loadListing("busRoutes");
      this.loadListing("busRegistrations");
      if (this.can("drivers", "view"))
        this.loadVehicles();
      this.loadBusReport();
    }
    if (tab === "drivers" && this.can("drivers", "view")) {
      this.loadVehicles();
      this.loadDriverSalaries();
    }
    if (tab === "attendance" && this.can("attendance", "view")) {
      if (!this.isPortalUser)
        this.loadListing("attendance");
      else
        this.ensurePortalTabData("attendance");
      if (!this.holidaysLoaded)
        this.loadHolidays();
      if (!this.isPortalUser)
        this.loadAttendanceReport();
    }
    if (tab === "exams" && this.can("exams", "view") && !this.isPortalUser) {
      this.loadListing("exams");
    }
    if (tab === "profile") {
      if (this.isStudent && this.currentUser?.student)
        this.loadStudentProfile(this.currentUser.student);
      else if (this.isParent && this.effectiveChildId)
        this.loadStudentProfile(this.effectiveChildId);
    }
  }
  loadStudentProfile(studentId) {
    if (!studentId) {
      this.profileStudentId = "";
      this.studentProfile = null;
      return;
    }
    this.profileStudentId = studentId;
    this.profileLoading = true;
    this.profilePhotoError = false;
    this.api.studentProfile(studentId).subscribe({
      next: (profile) => {
        this.studentProfile = profile;
        this.profileLoading = false;
        this.activeTab = "profile";
      },
      error: () => {
        this.message = "Could not load student profile.";
        this.profileLoading = false;
      }
    });
  }
  openStudentProfile(studentId) {
    this.loadStudentProfile(studentId);
  }
  // Resolve the best avatar URL for the profile hero: an http(s) URL is usable
  // directly; otherwise build an authenticated stream URL from the photo doc id.
  profilePhotoError = false;
  get profilePhotoSrc() {
    const student = this.studentProfile?.student;
    if (!student)
      return null;
    const docId = student.photoDocumentId;
    const studentId = this.profileStudentId;
    if (docId && studentId)
      return this.api.studentDocumentImageUrl(studentId, docId);
    const url = student.photoUrl || "";
    if (url.startsWith("http"))
      return url;
    return null;
  }
  onProfilePhotoError() {
    this.profilePhotoError = true;
  }
  /** Dates (last 30 days) on which the student was marked absent. */
  get profileRecentAbsentDates() {
    const recent = this.studentProfile?.attendance?.recent || [];
    return recent.filter((day) => day.status === "absent").map((day) => day.date);
  }
  /** Opens an uploaded student document (image/PDF) in a new tab via the authenticated stream. */
  viewProfileDocument(documentId) {
    if (!documentId || !this.profileStudentId)
      return;
    this.openProtectedFile(this.api.studentDocumentFileUrl(this.profileStudentId, documentId));
  }
  /** Documents that have been uploaded but not yet approved by staff. */
  get profilePendingDocuments() {
    return (this.studentProfile?.documents?.items || []).filter((doc) => doc.status === "uploaded" && doc.verificationStatus !== "approved" && doc.verificationStatus !== "rejected");
  }
  get profileHasPendingDocuments() {
    return this.profilePendingDocuments.length > 0;
  }
  docVerificationLabel(status) {
    const labels = {
      approved: "Verified",
      uploaded: "Verification pending",
      pending: "Verification pending",
      rejected: "Rejected"
    };
    return labels[status || ""] || (status || "Pending");
  }
  openMyProfile() {
    this.showMyProfile = true;
  }
  closeMyProfile() {
    this.showMyProfile = false;
  }
  get myTeacherProfile() {
    if (!this.currentUser?.teacher)
      return void 0;
    return this.teachers.find((t) => t._id === this.currentUser.teacher);
  }
  get myStudentProfile() {
    if (!this.currentUser?.student)
      return void 0;
    return this.students.find((s) => s._id === this.currentUser.student);
  }
  get myLinkedStudentProfile() {
    if (!this.currentUser?.linkedStudent)
      return void 0;
    return this.students.find((s) => s._id === this.currentUser.linkedStudent);
  }
  setFinanceRange(days) {
    this.financeRangeDays = days;
    this.refresh();
  }
  dashboardActivityLabel(type) {
    const labels = {
      student_admission: "Admission",
      teacher_registration: "Teacher",
      class_creation: "Class",
      student_status_change: "Status change"
    };
    return labels[type] || type;
  }
  trendLabel(trend) {
    const labels = {
      improved: "Improved",
      declined: "Declined",
      stable: "Stable"
    };
    return labels[trend] || trend;
  }
  loadStudentDocuments(studentId) {
    this.selectedStudentId = studentId;
    if (!studentId) {
      this.selectedStudentDocuments = [];
      return;
    }
    this.api.studentDetails(studentId).subscribe({
      next: (student) => {
        const documents = student.documents || [];
        this.selectedStudentDocuments = documents.map((document2) => ({
          _id: document2["_id"] ? String(document2["_id"]) : void 0,
          type: String(document2["type"] || ""),
          title: String(document2["title"] || ""),
          fileUrl: String(document2["fileUrl"] || ""),
          storageKey: document2["storageKey"] ? String(document2["storageKey"]) : void 0,
          storageProvider: document2["storageProvider"] === "s3" ? "s3" : "local",
          mimeType: document2["mimeType"] ? String(document2["mimeType"]) : void 0,
          uploadedAt: document2["uploadedAt"] ? String(document2["uploadedAt"]) : void 0,
          status: document2["status"] ? String(document2["status"]) : "pending",
          rejectReason: document2["rejectReason"] ? String(document2["rejectReason"]) : void 0
        }));
      },
      error: () => {
        this.message = "Unable to load document vault for this student.";
      }
    });
  }
  onFile(name, event, multiple = false) {
    const input = event.target;
    this.files[name] = multiple ? input.files : input.files?.item(0) || null;
  }
  saveAcademicYear() {
    const value = this.academicYearForm.getRawValue();
    if (this.isEndBeforeStart(value.startDate, value.endDate)) {
      this.toast.error("End date cannot be earlier than the start date.");
      return;
    }
    const payload = {
      name: value.name || void 0,
      startDate: value.startDate || void 0,
      endDate: value.endDate || void 0,
      isActive: !!value.isActive
    };
    if (this.editingAcademicYearId) {
      this.submit(this.api.updateAcademicYear(this.editingAcademicYearId, {
        name: payload.name,
        startDate: payload.startDate,
        endDate: payload.endDate
      }), "Academic year updated", this.academicYearForm);
      this.editingAcademicYearId = "";
      return;
    }
    this.submit(this.api.createAcademicYear(payload), "Academic year created", this.academicYearForm);
  }
  editAcademicYear(year) {
    if (this.yearStatus(year) === "closed") {
      this.message = "Closed academic years cannot be edited";
      return;
    }
    this.editingAcademicYearId = year._id;
    this.academicYearForm.patchValue({
      name: year.name,
      startDate: year.startDate ? year.startDate.slice(0, 10) : "",
      endDate: year.endDate ? year.endDate.slice(0, 10) : "",
      isActive: false
    });
    this.message = `Editing ${year.name}`;
  }
  activateAcademicYear(id) {
    void this.confirmAction({
      title: "Activate academic year",
      message: "Activate this academic year? The current active year will be deactivated.",
      confirmLabel: "Activate"
    }).then((confirmed) => {
      if (!confirmed)
        return;
      this.api.activateAcademicYear(id).subscribe({
        next: () => {
          this.toast.success("Academic year activated");
          this.editingAcademicYearId = "";
          this.refresh();
        },
        error: (err) => this.toast.error(extractApiMessage(err, "Could not activate academic year"))
      });
    });
  }
  closeAcademicYear(id) {
    void this.confirmAction({
      title: "Close academic year",
      message: "Close this academic year? Linked classes become read-only.",
      danger: true,
      confirmLabel: "Close year"
    }).then((confirmed) => {
      if (!confirmed)
        return;
      this.api.closeAcademicYear(id).subscribe({
        next: () => {
          this.toast.success("Academic year closed");
          this.editingAcademicYearId = "";
          this.refresh();
        },
        error: (err) => this.toast.error(extractApiMessage(err, "Could not close academic year"))
      });
    });
  }
  deleteAcademicYear(id) {
    void this.confirmAction({
      title: "Delete academic year",
      message: "Delete this academic year? This is only allowed when no dependent records exist.",
      danger: true,
      confirmLabel: "Delete"
    }).then((confirmed) => {
      if (!confirmed)
        return;
      this.api.deleteAcademicYear(id).subscribe({
        next: () => {
          this.toast.success("Academic year deleted");
          this.refresh();
        },
        error: (err) => this.toast.error(extractApiMessage(err, "Could not delete academic year"))
      });
    });
  }
  saveClass() {
    if (this.editingClassId) {
      const room = this.classes.find((c) => c._id === this.editingClassId);
      if (room && this.isClassYearClosed(room)) {
        this.message = "Classes linked to a closed academic year are read-only";
        return;
      }
    }
    const request = this.editingClassId ? this.api.updateClass(this.editingClassId, this.classForm.getRawValue()) : this.api.createClass(this.classForm.getRawValue());
    this.submit(request, this.editingClassId ? "Class updated" : "Class saved", this.classForm);
    this.editingClassId = "";
    this.classTuitionLocked = false;
    this.classFeeStructure = null;
  }
  // ── Class-level fee structure (defined once per class name, shared by every section) ──
  classFeeStructure = null;
  classFeeStructureLoading = false;
  // Tuition is locked/auto-filled when a class-level Fee Structure defines it.
  classTuitionLocked = false;
  monthlyFactor = {
    monthly: 1,
    quarterly: 1 / 3,
    half_yearly: 1 / 6,
    yearly: 1 / 12,
    one_time: 0
  };
  /** Full per-cycle total of the class fee structure (e.g. ₹5,000 incl. admission etc.). */
  get classFeeStructureTotal() {
    return (this.classFeeStructure?.components || []).reduce((sum, component) => sum + (Number(component.amount) || 0), 0);
  }
  /** Monthly-equivalent tuition implied by the class fee structure. */
  get classFeeMonthlyTuition() {
    const monthly = (this.classFeeStructure?.components || []).filter((component) => component.key === "tuition").reduce((sum, component) => sum + Math.max(Number(component.amount) || 0, 0) * (this.monthlyFactor[component.frequency] ?? 1), 0);
    return Math.round(monthly);
  }
  /** True once a class-level fee structure has been found for the chosen class + year. */
  get classHasFeeStructure() {
    return !!this.classFeeStructure && (this.classFeeStructure.components?.length || 0) > 0;
  }
  /** When true the manual monthly-fee input is hidden (fee comes from the structure). */
  get classFeeInherited() {
    return this.classHasFeeStructure;
  }
  /**
   * When a class name + academic year are chosen, look up the class-level fee
   * structure. If found, the section inherits it automatically: the monthly
   * tuition is filled in and, on save, the backend attaches the structure id.
   */
  onClassSelectionChange() {
    const name = (this.classForm.get("name")?.value || "").toString().trim();
    const yearId = this.classForm.get("academicYear")?.value;
    this.classFeeStructure = null;
    this.classTuitionLocked = false;
    if (!name || !yearId)
      return;
    this.classFeeStructureLoading = true;
    this.api.feeStructureForClass(yearId, { className: name }).subscribe({
      next: (structure) => {
        this.classFeeStructure = structure && (structure.components?.length || 0) > 0 ? structure : null;
        this.classFeeStructureLoading = false;
        if (this.classFeeStructure) {
          this.classForm.patchValue({ monthlyFee: this.classFeeMonthlyTuition });
          this.classTuitionLocked = true;
        }
      },
      error: () => {
        this.classFeeStructure = null;
        this.classFeeStructureLoading = false;
      }
    });
  }
  editClass(room) {
    if (this.isClassYearClosed(room)) {
      this.message = "Classes linked to a closed academic year are read-only";
      return;
    }
    this.editingClassId = room._id;
    const academicYearId = typeof room.academicYear === "string" ? room.academicYear : room.academicYear?._id || "";
    this.classForm.patchValue({
      name: room.name,
      section: room.section,
      capacity: room.capacity || APP_CONSTANTS.DEFAULT_CAPACITY,
      academicYear: academicYearId,
      classTeacher: typeof room.classTeacher === "string" ? room.classTeacher : room.classTeacher?._id || "",
      monthlyFee: room.monthlyFee,
      status: room.status || "active"
    });
    this.onClassSelectionChange();
    this.message = `Editing class ${room.name}-${room.section}`;
  }
  isClassYearClosed(room) {
    const year = typeof room.academicYear === "string" ? this.years.find((y) => y._id === room.academicYear) : room.academicYear;
    return year ? this.yearStatus(year) === "closed" : false;
  }
  getClassStudentCount(classId, academicYearId) {
    const yearId = academicYearId || this.admissionForm.get("academicYear")?.value || this.activeAcademicYear?._id;
    const room = this.classes.find((c) => c._id === classId);
    if (room?.studentCount !== void 0 && (!yearId || (typeof room.academicYear === "string" ? room.academicYear : room.academicYear?._id) === yearId)) {
      return room.studentCount;
    }
    return this.students.filter((student) => {
      if (student.status !== "active")
        return false;
      return student.enrollments?.some((enrollment) => {
        const eYear = typeof enrollment.academicYear === "string" ? enrollment.academicYear : enrollment.academicYear?._id;
        const eClass = typeof enrollment.classRoom === "string" ? enrollment.classRoom : enrollment.classRoom?._id;
        return eYear === yearId && eClass === classId && enrollment.status === "studying";
      });
    }).length;
  }
  getClassAvailableCapacity(room) {
    if (room.availableCapacity !== void 0)
      return room.availableCapacity;
    const yearId = typeof room.academicYear === "string" ? room.academicYear : room.academicYear?._id;
    const count = this.getClassStudentCount(room._id, yearId);
    return Math.max((room.capacity || 0) - count, 0);
  }
  get admissionClassOptions() {
    const yearId = this.admissionForm.get("academicYear")?.value || this.activeAcademicYear?._id;
    const selectedClassId = this.admissionForm.get("classRoom")?.value;
    return this.classes.filter((room) => {
      if ((room.status || "active") !== "active")
        return false;
      const roomYearId = typeof room.academicYear === "string" ? room.academicYear : room.academicYear?._id;
      if (yearId && roomYearId !== yearId)
        return false;
      const hasCapacity = this.getClassAvailableCapacity(room) > 0;
      if (!hasCapacity && this.editingStudentId && room._id === selectedClassId)
        return true;
      return hasCapacity;
    });
  }
  toggleClassStatus(id) {
    void this.confirmAction({
      title: "Change class status",
      message: "Change the status of this class?",
      confirmLabel: "Confirm"
    }).then((confirmed) => {
      if (!confirmed)
        return;
      this.api.toggleClassStatus(id).subscribe({
        next: () => {
          this.toast.success("Class status updated");
          this.refresh();
        },
        error: (err) => this.toast.error(extractApiMessage(err, "Could not update class status"))
      });
    });
  }
  teacherAssignedClass(teacherId) {
    return this.classes.find((room) => {
      if (room._id === this.editingClassId)
        return false;
      const assignedTeacherId = typeof room.classTeacher === "string" ? room.classTeacher : room.classTeacher?._id;
      return assignedTeacherId === teacherId;
    });
  }
  isTeacherAssignedToAnotherClass(teacherId) {
    return Boolean(this.teacherAssignedClass(teacherId));
  }
  classTeacherOptionLabel(teacher) {
    const assignedClass = this.teacherAssignedClass(teacher._id);
    const name = this.teacherName(teacher);
    return assignedClass ? `${name} - assigned to ${assignedClass.name}-${assignedClass.section}` : name;
  }
  deleteClass(id) {
    void this.confirmAction({
      title: "Delete class",
      message: "Delete this class? This action is only allowed when no students are enrolled.",
      danger: true,
      confirmLabel: "Delete"
    }).then((confirmed) => {
      if (!confirmed)
        return;
      this.submit(this.api.deleteClass(id), "Class deleted");
    });
  }
  showTeacherForm = false;
  openTeacherForm() {
    this.editingTeacherId = "";
    this.resetTeacherForm();
    this.message = "";
    this.showTeacherForm = true;
  }
  closeTeacherForm() {
    this.showTeacherForm = false;
    this.editingTeacherId = "";
    this.resetTeacherForm();
  }
  resetTeacherForm() {
    this.teacherForm.reset({
      employeeCode: "",
      firstName: "",
      middleName: "",
      lastName: "",
      phone: "",
      email: "",
      aadhaarNumber: "",
      qualification: "",
      subjects: [],
      baseSalary: 0
    });
    this.teacherSubjectDraft = "";
  }
  saveTeacher() {
    const editing = !!this.editingTeacherId;
    const request = editing ? this.api.updateTeacher(this.editingTeacherId, this.teacherForm.getRawValue()) : this.api.createTeacher(this.teacherForm.getRawValue());
    this.submit(request, editing ? "Teacher updated" : "Teacher saved", void 0, () => this.closeTeacherForm());
  }
  editTeacher(teacher) {
    this.editingTeacherId = teacher._id;
    this.teacherForm.patchValue({
      employeeCode: teacher.employeeCode,
      firstName: teacher.firstName,
      middleName: teacher.middleName || "",
      lastName: teacher.lastName || "",
      phone: teacher.phone,
      email: teacher.email || "",
      aadhaarNumber: teacher.aadhaarNumber || "",
      qualification: teacher.qualification || "",
      subjects: teacher.subjects ? [...teacher.subjects] : [],
      baseSalary: teacher.baseSalary
    });
    this.teacherSubjectDraft = "";
    this.message = `Editing ${teacher.firstName}`;
    this.showTeacherForm = true;
  }
  viewTeacherProfile(teacher) {
    this.viewingTeacher = teacher;
  }
  closeTeacherProfile() {
    this.viewingTeacher = null;
  }
  /** Authenticated avatar URL for a teacher's uploaded profile photo (or null). */
  teacherPhotoSrc(teacher) {
    if (!teacher?._id || !teacher.documents?.photo?.url)
      return null;
    return this.api.teacherDocumentImageUrl(teacher._id, "photo");
  }
  // Collapsible add-forms for teacher experience / education.
  showTeacherExpForm = false;
  showTeacherEduForm = false;
  toggleTeacherExpForm() {
    this.showTeacherExpForm = !this.showTeacherExpForm;
  }
  toggleTeacherEduForm() {
    this.showTeacherEduForm = !this.showTeacherEduForm;
  }
  teacherExpForm = { instituteName: "", designation: "", fromDate: "", toDate: "", description: "" };
  teacherExpFile = null;
  teacherEduForm = { instituteName: "", degree: "", fieldOfStudy: "", fromDate: "", toDate: "", grade: "" };
  teacherEduFile = null;
  onExpFileChange(event) {
    this.teacherExpFile = event.target.files?.[0] || null;
  }
  onEduFileChange(event) {
    this.teacherEduFile = event.target.files?.[0] || null;
  }
  isEndBeforeStart(from2, to) {
    if (!from2 || !to)
      return false;
    const start = new Date(from2);
    const end = new Date(to);
    if (isNaN(start.getTime()) || isNaN(end.getTime()))
      return false;
    return end < start;
  }
  addTeacherExperience() {
    const teacher = this.viewingTeacher || this.myTeacherProfile;
    if (!teacher || !this.teacherExpForm.instituteName)
      return;
    if (this.isEndBeforeStart(this.teacherExpForm.fromDate, this.teacherExpForm.toDate)) {
      this.toast.error("End date cannot be earlier than the start date.");
      return;
    }
    const saveEntry = (doc) => {
      const entry = __spreadValues({}, this.teacherExpForm);
      if (doc)
        entry["document"] = doc;
      const exp = [...teacher.experience || [], entry];
      const request = this.isTeacher ? this.api.selfUpdateTeacher({ experience: exp }) : this.api.updateTeacher(teacher._id, { experience: exp });
      request.subscribe({
        next: () => {
          this.message = "Experience added";
          this.teacherExpForm = { instituteName: "", designation: "", fromDate: "", toDate: "", description: "" };
          this.teacherExpFile = null;
          this.refresh();
        },
        error: (err) => {
          this.message = err.error?.message || "Could not save experience";
        }
      });
    };
    if (this.teacherExpFile) {
      const upload$ = this.isTeacher ? this.api.selfUploadTeacherDocument(this.teacherExpFile, "certificate") : this.api.uploadTeacherDocument(teacher._id, this.teacherExpFile, "certificate");
      upload$.subscribe({
        next: (res) => {
          const certs = res?.certificates || [];
          const last3 = certs[certs.length - 1];
          saveEntry(last3 ? { url: last3.url, originalName: last3.originalName, uploadedAt: last3.uploadedAt } : void 0);
        },
        error: () => saveEntry()
      });
    } else {
      saveEntry();
    }
  }
  removeTeacherExperience(index) {
    void this.confirmAction({
      title: "Remove experience",
      message: "Remove this work experience entry from the teacher profile?",
      danger: true,
      confirmLabel: "Remove"
    }).then((confirmed) => {
      if (!confirmed)
        return;
      const teacher = this.viewingTeacher || this.myTeacherProfile;
      if (!teacher)
        return;
      const exp = [...teacher.experience || []];
      exp.splice(index, 1);
      const request = this.isTeacher ? this.api.selfUpdateTeacher({ experience: exp }) : this.api.updateTeacher(teacher._id, { experience: exp });
      request.subscribe({
        next: () => {
          this.toast.success("Experience removed");
          this.refresh();
        },
        error: (err) => this.toast.error(extractApiMessage(err, "Could not remove experience"))
      });
    });
  }
  addTeacherEducation() {
    const teacher = this.viewingTeacher || this.myTeacherProfile;
    if (!teacher || !this.teacherEduForm.instituteName)
      return;
    if (this.isEndBeforeStart(this.teacherEduForm.fromDate, this.teacherEduForm.toDate)) {
      this.toast.error("End date cannot be earlier than the start date.");
      return;
    }
    const saveEntry = (doc) => {
      const entry = __spreadValues({}, this.teacherEduForm);
      if (doc)
        entry["document"] = doc;
      const edu = [...teacher.education || [], entry];
      const request = this.isTeacher ? this.api.selfUpdateTeacher({ education: edu }) : this.api.updateTeacher(teacher._id, { education: edu });
      request.subscribe({
        next: () => {
          this.message = "Education added";
          this.teacherEduForm = { instituteName: "", degree: "", fieldOfStudy: "", fromDate: "", toDate: "", grade: "" };
          this.teacherEduFile = null;
          this.refresh();
        },
        error: (err) => {
          this.message = err.error?.message || "Could not save education";
        }
      });
    };
    if (this.teacherEduFile) {
      const upload$ = this.isTeacher ? this.api.selfUploadTeacherDocument(this.teacherEduFile, "certificate") : this.api.uploadTeacherDocument(teacher._id, this.teacherEduFile, "certificate");
      upload$.subscribe({
        next: (res) => {
          const certs = res?.certificates || [];
          const last3 = certs[certs.length - 1];
          saveEntry(last3 ? { url: last3.url, originalName: last3.originalName, uploadedAt: last3.uploadedAt } : void 0);
        },
        error: () => saveEntry()
      });
    } else {
      saveEntry();
    }
  }
  removeTeacherEducation(index) {
    void this.confirmAction({
      title: "Remove education",
      message: "Remove this education entry from the teacher profile?",
      danger: true,
      confirmLabel: "Remove"
    }).then((confirmed) => {
      if (!confirmed)
        return;
      const teacher = this.viewingTeacher || this.myTeacherProfile;
      if (!teacher)
        return;
      const edu = [...teacher.education || []];
      edu.splice(index, 1);
      const request = this.isTeacher ? this.api.selfUpdateTeacher({ education: edu }) : this.api.updateTeacher(teacher._id, { education: edu });
      request.subscribe({
        next: () => {
          this.toast.success("Education removed");
          this.refresh();
        },
        error: (err) => this.toast.error(extractApiMessage(err, "Could not remove education"))
      });
    });
  }
  uploadTeacherDoc(event, type) {
    const file = event.target.files?.[0];
    if (!file || !this.viewingTeacher)
      return;
    this.api.uploadTeacherDocument(this.viewingTeacher._id, file, type).subscribe({
      next: () => {
        this.message = `Document uploaded`;
        this.refresh();
      },
      error: (err) => {
        this.message = err.error?.message || "Upload failed";
      }
    });
  }
  selfUploadTeacherDoc(event, type) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    this.api.selfUploadTeacherDocument(file, type).subscribe({
      next: () => {
        this.message = "Document uploaded for review";
        this.refresh();
      },
      error: (err) => {
        this.message = err.error?.message || "Upload failed";
      }
    });
  }
  selfUpdateTeacher(field, value) {
    this.api.selfUpdateTeacher({ [field]: value }).subscribe({
      next: () => {
        this.message = "Profile updated";
        this.refresh();
      },
      error: (err) => {
        this.message = err.error?.message || "Could not update profile";
      }
    });
  }
  verifyDocReason = "";
  verifyTeacherDoc(docType, action) {
    if (!this.viewingTeacher)
      return;
    this.api.verifyTeacherDocument(this.viewingTeacher._id, docType, action, this.verifyDocReason).subscribe({
      next: (res) => {
        this.toast.success(action === "approve" ? "Document approved" : "Document rejected \u2014 reupload requested");
        this.verifyDocReason = "";
        const documents = res?.documents;
        if (this.viewingTeacher && documents) {
          this.viewingTeacher = __spreadProps(__spreadValues({}, this.viewingTeacher), { documents });
        }
        this.refresh();
      },
      error: (err) => this.toast.error(extractApiMessage(err, "Verification failed"))
    });
  }
  verifyStudentDoc(documentId, action) {
    if (!this.selectedStudentId || !documentId)
      return;
    this.api.verifyStudentDocument(this.selectedStudentId, documentId, action, this.verifyDocReason).subscribe({
      next: () => {
        this.toast.success(action === "approve" ? "Document approved" : "Document rejected \u2014 reupload requested");
        this.verifyDocReason = "";
        this.loadStudentDocuments(this.selectedStudentId);
      },
      error: (err) => this.toast.error(extractApiMessage(err, "Verification failed"))
    });
  }
  openStudentDocument(document2) {
    if (!this.selectedStudentId || !document2._id)
      return;
    this.openProtectedFile(this.api.studentDocumentFileUrl(this.selectedStudentId, document2._id));
  }
  openTeacherDocument(teacherId, docType) {
    if (!teacherId || !docType)
      return;
    this.openProtectedFile(this.api.teacherDocumentFileUrl(teacherId, docType));
  }
  openTeacherEntryDocument(teacherId, section, index) {
    if (!teacherId || index < 0)
      return;
    this.openProtectedFile(this.api.teacherEntryDocumentFileUrl(teacherId, section, index));
  }
  get showPreviousSchoolDetails() {
    return this.admissionForm.get("hasPreviousSchool")?.value === "yes";
  }
  getTeacherClasses(teacherId) {
    return this.classes.filter((c) => {
      const ct = c.classTeacher;
      const ctId = typeof ct === "string" ? ct : ct?._id;
      return ctId === teacherId;
    });
  }
  getTeacherSubjects(teacherId) {
    const results = [];
    for (const cls of this.classes) {
      for (const subj of cls.subjects || []) {
        const tid = typeof subj.teacher === "string" ? subj.teacher : subj.teacher?._id;
        if (tid === teacherId) {
          results.push({ className: `${cls.name}-${cls.section}`, subjectName: subj.name });
        }
      }
    }
    return results;
  }
  deleteTeacher(id) {
    return __async(this, null, function* () {
      const confirmed = yield this.confirmAction({
        title: "Deactivate teacher",
        message: "Deactivate this teacher? The record will be retained with inactive status.",
        danger: true,
        confirmLabel: "Deactivate"
      });
      if (!confirmed)
        return;
      this.submit(this.api.deleteTeacher(id), "Teacher deactivated");
    });
  }
  saveAdmission() {
    if (this.editingStudentId) {
      const value2 = this.admissionForm.getRawValue();
      const payload2 = {
        admissionNumber: value2.admissionNumber,
        firstName: value2.firstName,
        middleName: value2.middleName || void 0,
        lastName: value2.lastName,
        gender: value2.gender,
        dateOfBirth: value2.dateOfBirth,
        bloodGroup: value2.bloodGroup,
        category: value2.category,
        nationality: value2.nationality,
        motherName: value2.motherName,
        aadhaarNumber: value2.aadhaarNumber || void 0,
        udisePenId: value2.udisePenId || void 0,
        address: {
          line1: value2.line1,
          city: value2.city,
          state: value2.state,
          pincode: value2.pincode
        },
        guardians: [
          {
            name: value2.guardianName,
            relation: value2.guardianRelation,
            phone: value2.guardianPhone,
            email: value2.guardianEmail || void 0,
            isPrimary: true
          }
        ],
        previousSchoolDetails: value2.hasPreviousSchool === "yes" ? {
          schoolName: value2.previousSchool,
          board: value2.previousSchoolBoard,
          percentage: value2.previousSchoolPercentage ? Number(value2.previousSchoolPercentage) : void 0,
          rollNumber: value2.previousSchoolRollNumber,
          address: value2.previousSchoolAddress,
          lastClass: value2.previousSchoolLastClass,
          yearOfPassing: value2.previousSchoolYearOfPassing ? Number(value2.previousSchoolYearOfPassing) : void 0,
          reasonForLeaving: value2.previousSchoolReasonForLeaving,
          tcNumber: value2.previousSchoolTcNumber,
          tcDate: value2.previousSchoolTcDate || void 0
        } : void 0,
        enrollments: value2.academicYear && value2.classRoom ? [
          {
            academicYear: value2.academicYear,
            classRoom: value2.classRoom,
            rollNumber: value2.rollNumber,
            status: "studying"
          }
        ] : void 0
      };
      this.submit(this.api.updateStudent(this.editingStudentId, payload2), "Student updated", void 0, () => this.closeAdmissionModal());
      return;
    }
    const value = this.admissionForm.getRawValue();
    const payload = __spreadValues(__spreadValues({
      student: {
        firstName: value.firstName,
        middleName: value.middleName || void 0,
        lastName: value.lastName,
        gender: value.gender,
        dateOfBirth: value.dateOfBirth,
        bloodGroup: value.bloodGroup,
        category: value.category,
        nationality: value.nationality,
        motherName: value.motherName,
        aadhaarNumber: value.aadhaarNumber || void 0,
        udisePenId: value.udisePenId || void 0,
        address: {
          line1: value.line1,
          city: value.city,
          state: value.state,
          pincode: value.pincode
        }
      },
      guardians: [
        {
          name: value.guardianName,
          relation: value.guardianRelation,
          phone: value.guardianPhone,
          email: value.guardianEmail || void 0,
          isPrimary: true
        }
      ],
      academicYear: value.academicYear,
      classRoom: value.classRoom,
      rollNumber: value.rollNumber
    }, value.parentUserId ? { parentUserId: value.parentUserId } : {}), value.hasPreviousSchool === "yes" ? {
      previousSchool: value.previousSchool,
      previousSchoolDetails: {
        schoolName: value.previousSchool,
        board: value.previousSchoolBoard,
        percentage: value.previousSchoolPercentage ? Number(value.previousSchoolPercentage) : void 0,
        rollNumber: value.previousSchoolRollNumber,
        address: value.previousSchoolAddress,
        lastClass: value.previousSchoolLastClass,
        yearOfPassing: value.previousSchoolYearOfPassing ? Number(value.previousSchoolYearOfPassing) : void 0,
        reasonForLeaving: value.previousSchoolReasonForLeaving,
        tcNumber: value.previousSchoolTcNumber,
        tcDate: value.previousSchoolTcDate || void 0
      }
    } : {});
    const formData = new FormData();
    formData.append("data", JSON.stringify(payload));
    for (const field of ["photo", "aadhaar", "birthCertificate"]) {
      const file = this.files[field];
      if (file)
        formData.append(field, file);
    }
    const otherDocuments = this.files["otherDocuments"];
    if (otherDocuments) {
      Array.from(otherDocuments).forEach((file) => formData.append("otherDocuments", file));
    }
    this.submit(this.api.createAdmission(formData), "Student admission saved", void 0, (response) => {
      this.closeAdmissionModal();
      this.showAdmissionCredentials(response);
    });
  }
  admissionCredentials = null;
  showAdmissionCredentials(response) {
    const res = response || {};
    if (!res.studentCredentials && !res.parentCredentials) {
      this.admissionCredentials = null;
      return;
    }
    this.admissionCredentials = {
      studentName: [res.firstName, res.lastName].filter(Boolean).join(" ").trim(),
      student: res.studentCredentials || void 0,
      parent: res.parentCredentials || void 0
    };
  }
  closeAdmissionCredentials() {
    this.admissionCredentials = null;
  }
  editStudent(student) {
    const latest = student.enrollments?.[student.enrollments.length - 1];
    const guardian = student.guardians?.[0];
    const prev = student.previousSchoolDetails;
    const hasPrev = !!prev?.schoolName;
    this.editingStudentId = student._id;
    this.admissionForm.patchValue({
      admissionNumber: student.admissionNumber,
      firstName: student.firstName,
      middleName: student.middleName || "",
      lastName: student.lastName || "",
      gender: student.gender,
      dateOfBirth: student.dateOfBirth ? student.dateOfBirth.slice(0, 10) : "",
      bloodGroup: student.bloodGroup || "",
      category: student.category || "",
      nationality: student.nationality || "Indian",
      motherName: student.motherName || "",
      aadhaarNumber: student.aadhaarNumber || "",
      udisePenId: student.udisePenId || "",
      line1: student.address?.line1 || "",
      city: student.address?.city || "",
      state: student.address?.state || "",
      pincode: student.address?.pincode || "",
      guardianName: guardian?.name || "",
      guardianRelation: guardian?.relation || "Father",
      guardianPhone: guardian?.phone || "",
      guardianEmail: guardian?.email || "",
      academicYear: typeof latest?.academicYear === "string" ? latest.academicYear : latest?.academicYear?._id || "",
      classRoom: typeof latest?.classRoom === "string" ? latest.classRoom : latest?.classRoom?._id || "",
      rollNumber: latest?.rollNumber || "",
      studentStatus: student.status || "active",
      hasPreviousSchool: hasPrev ? "yes" : "no",
      previousSchool: prev?.schoolName || "",
      previousSchoolBoard: prev?.board || "",
      previousSchoolPercentage: prev?.percentage != null ? String(prev.percentage) : "",
      previousSchoolRollNumber: prev?.rollNumber || "",
      previousSchoolAddress: prev?.address || "",
      previousSchoolLastClass: prev?.lastClass || "",
      previousSchoolYearOfPassing: prev?.yearOfPassing ? String(prev.yearOfPassing) : "",
      previousSchoolReasonForLeaving: prev?.reasonForLeaving || "",
      previousSchoolTcNumber: prev?.tcNumber || "",
      previousSchoolTcDate: prev?.tcDate ? String(prev.tcDate).slice(0, 10) : ""
    });
    this.files = {};
    this.clearParentSelection();
    this.message = `Editing student ${this.studentName(student)}`;
    this.showAdmissionModal = true;
  }
  deactivateStudent(id) {
    return __async(this, null, function* () {
      const confirmed = yield this.confirmAction({
        title: "Deactivate student",
        message: "Deactivate this student? Records are retained; status will be set to Inactive.",
        danger: true,
        confirmLabel: "Deactivate"
      });
      if (!confirmed)
        return;
      this.submit(this.api.deleteStudent(id), "Student deactivated");
    });
  }
  changeStudentStatus(id, status) {
    const reason = status === "left_school" || status === "tc_issued" ? prompt("Reason (optional):") || "" : "";
    this.api.updateStudentStatus(id, status, reason || void 0).subscribe({
      next: () => {
        this.message = `Student status updated to ${this.studentStatusLabel(status)}`;
        this.refresh();
      },
      error: (err) => {
        this.message = err.error?.message || "Status update failed";
      }
    });
  }
  generateUdisePenId() {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const random = Math.floor(1e5 + Math.random() * 9e5);
    this.admissionForm.patchValue({ udisePenId: `UDISE-${year}-${random}` });
  }
  searchByUdise() {
    const udise = this.admissionForm.get("udisePenId")?.value?.trim();
    if (!udise) {
      this.message = "Enter or generate a UDISE+/PEN ID first";
      return;
    }
    const match2 = this.students.find((s) => s.udisePenId === udise);
    if (match2) {
      this.message = `Found existing student: ${this.studentName(match2)} (${match2.admissionNumber})`;
      this.editStudent(match2);
    } else {
      this.message = "No existing student with this UDISE+/PEN ID";
    }
  }
  studentStatusLabel(status) {
    const labels = {
      active: "Active",
      inactive: "Inactive",
      left_school: "Left School",
      passed_out: "Passed Out",
      tc_issued: "TC Issued",
      alumni: "Passed Out"
    };
    return labels[status] || status;
  }
  profileTimelineLabel(action) {
    const labels = {
      admission: "Admission",
      bus_assignment: "Bus assignment",
      bus_deactivate: "Bus update",
      fee_payment: "Fee payment",
      fee_collection: "Fee payment",
      attendance_update: "Attendance",
      attendance_entry: "Attendance",
      attendance_submit: "Attendance",
      status_change: "Status change",
      profile_update: "Profile update",
      document_upload: "Document",
      document_replace: "Document",
      document_delete: "Document"
    };
    return labels[action] || action.replace(/_/g, " ");
  }
  studentDocumentStatus(student) {
    const docs = student.documents || [];
    const hasPhoto = docs.some((d) => d.type === "photo" && d.fileUrl);
    const hasBirth = docs.some((d) => d.type === "birth_certificate" && d.fileUrl);
    return hasPhoto && hasBirth ? "uploaded" : "pending";
  }
  studentPhotoUrl(student) {
    const photo = student.documents?.find((d) => d.type === "photo");
    if (!photo?._id || !student._id)
      return null;
    return this.api.studentDocumentImageUrl(student._id, photo._id);
  }
  get studentSectionOptions() {
    return [...new Set(this.classes.map((c) => c.section).filter(Boolean))].sort();
  }
  exportStudentsCsv() {
    const items = this.sortedStudents;
    exportRowsToCsv(`students-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`, ["Admission No", "Name", "Class", "Roll No", "Admission Date", "Status", "Documents"], items.map((s) => {
      const latest = s.enrollments?.[s.enrollments.length - 1];
      return [
        s.admissionNumber,
        this.studentName(s),
        this.enrollmentClassName(s),
        latest?.rollNumber || "",
        s.admissionDate ? new Date(s.admissionDate).toLocaleDateString() : "",
        this.studentStatusLabel(s.status),
        this.studentDocumentStatus(s)
      ];
    }));
  }
  exportStudentsPdf() {
    const items = this.sortedStudents;
    exportRowsToPdf("Student Directory", ["Adm No", "Name", "Class", "Admission Date", "Status"], items.map((s) => [
      s.admissionNumber,
      this.studentName(s),
      this.enrollmentClassName(s),
      s.admissionDate ? new Date(s.admissionDate).toLocaleDateString() : "\u2014",
      this.studentStatusLabel(s.status)
    ]));
  }
  exportClassesCsv() {
    const items = this.sortedClasses;
    exportRowsToCsv(`classes-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`, ["Class", "Academic Year", "Teacher", "Students", "Available", "Fee", "Status"], items.map((room) => [
      `${room.name}-${room.section}`,
      this.classYearName(room),
      this.teacherName(room.classTeacher),
      String(room.studentCount ?? this.getClassStudentCount(room._id)),
      String(this.getClassAvailableCapacity(room)),
      String(room.monthlyFee ?? 0),
      room.status || "active"
    ]));
  }
  exportClassesPdf() {
    const items = this.sortedClasses;
    exportRowsToPdf("Classes & Sections", ["Class", "Year", "Teacher", "Status"], items.map((room) => [
      `${room.name}-${room.section}`,
      this.classYearName(room),
      this.teacherName(room.classTeacher),
      room.status || "active"
    ]));
  }
  exportTeachersCsv() {
    const items = this.sortedTeachers;
    exportRowsToCsv(`teachers-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`, ["Name", "Employee Code", "Phone", "Email", "Salary", "Status"], items.map((t) => [
      this.teacherName(t),
      t.employeeCode,
      t.phone,
      t.email || "",
      String(t.baseSalary),
      t.status
    ]));
  }
  exportTeachersPdf() {
    const items = this.sortedTeachers;
    exportRowsToPdf("Teacher Roster", ["Name", "Code", "Phone", "Status"], items.map((t) => [
      this.teacherName(t),
      t.employeeCode,
      t.phone,
      t.status
    ]));
  }
  exportUsersCsv() {
    const items = this.sortedUsers;
    exportRowsToCsv(`users-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`, ["Name", "Email", "Role", "Status"], items.map((u) => [
      u.name,
      u.email,
      this.roleLabelFor(u.role),
      u.isActive === false ? "inactive" : "active"
    ]));
  }
  exportUsersPdf() {
    const items = this.sortedUsers;
    exportRowsToPdf("User Directory", ["Name", "Email", "Role", "Status"], items.map((u) => [
      u.name,
      u.email,
      this.roleLabelFor(u.role),
      u.isActive === false ? "inactive" : "active"
    ]));
  }
  exportYearsCsv() {
    const items = this.sortedYears;
    exportRowsToCsv(`academic-years-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`, ["Name", "Start", "End", "Status"], items.map((y) => [
      y.name,
      new Date(y.startDate).toLocaleDateString(),
      new Date(y.endDate).toLocaleDateString(),
      this.yearStatus(y)
    ]));
  }
  exportYearsPdf() {
    const items = this.sortedYears;
    exportRowsToPdf("Academic Years", ["Name", "Period", "Status"], items.map((y) => [
      y.name,
      `${new Date(y.startDate).toLocaleDateString()} \u2014 ${new Date(y.endDate).toLocaleDateString()}`,
      this.yearStatus(y)
    ]));
  }
  refreshListing(_key) {
    this.refresh();
    if (_key)
      this.loadListing(_key);
  }
  isServerPaged(key) {
    if (this.isPortalUser)
      return false;
    return this.serverPagedKeys.includes(key) || this.operationalPagedKeys.includes(key);
  }
  getListTotalItems(key) {
    if (this.isServerPaged(key))
      return this.listingTotals[key] ?? 0;
    return 0;
  }
  isListingLoading(key) {
    return !!this.listingLoading[key];
  }
  saveButtonLabel(idleLabel, busyLabel = "Saving...") {
    return this.submitting ? busyLabel : idleLabel;
  }
  loadServerListings() {
    if (this.isPortalUser)
      return;
    const keys = [...this.listingKeysForRole()];
    if (!this.isPortalUser) {
      this.operationalPagedKeys.forEach((key) => {
        if (this.canAccessOperationalList(key))
          keys.push(key);
      });
    }
    [...new Set(keys)].forEach((key) => this.loadListing(key));
  }
  canAccessOperationalList(key) {
    const map2 = {
      invoices: ["fees", "view"],
      feeHistory: ["fees", "view"],
      payroll: ["payroll", "view"],
      busRoutes: ["transport", "view"],
      busRegistrations: ["transport", "view"],
      attendance: ["attendance", "view"],
      exams: ["exams", "view"]
    };
    const entry = map2[key];
    return entry ? this.can(entry[0], entry[1]) : false;
  }
  loadCollectableInvoices() {
    if (!this.can("fees", "view"))
      return;
    forkJoin([
      this.api.invoices({ status: "unpaid", page: 1, pageSize: 100 }),
      this.api.invoices({ status: "partial", page: 1, pageSize: 100 })
    ]).subscribe({
      next: ([unpaid, partial]) => {
        const merged = [...unpaid.data, ...partial.data];
        this.collectableInvoiceOptions = merged.filter((invoice) => invoice.status !== "cancelled" && invoice.balanceAmount > 0);
      },
      error: () => {
        this.collectableInvoiceOptions = [];
      }
    });
  }
  // ── Fees dashboard summary + generation stats ──
  feeSummary = null;
  // ── AI Fee Prediction ──
  feePredDashboard = null;
  feePredLoading = false;
  feePredSending = false;
  feePredYear = "";
  feePredClass = "";
  feePredSelectedIds = [];
  feePredReminders = [];
  loadFeeSummary() {
    if (this.isPortalUser || !this.can("fees", "view"))
      return;
    const params = {};
    const year = this.feeDemandForm.get("academicYear")?.value || this.activeAcademicYear?._id;
    if (year)
      params["academicYear"] = String(year);
    const cls = this.feeDemandForm.get("classRoom")?.value;
    if (cls)
      params["classRoom"] = String(cls);
    const month = this.feeDemandForm.get("month")?.value;
    if (month)
      params["feeMonth"] = String(month);
    const feeYear = this.feeDemandForm.get("year")?.value;
    if (feeYear)
      params["feeYear"] = String(feeYear);
    this.api.feeSummary(params).subscribe({
      next: (summary) => {
        this.feeSummary = summary;
      },
      error: () => {
        this.feeSummary = null;
      }
    });
  }
  loadFeePredictions() {
    if (!this.can("fee_prediction", "view"))
      return;
    if (!this.feePredYear && this.activeAcademicYear?._id) {
      this.feePredYear = this.activeAcademicYear._id;
    }
    this.feePredLoading = true;
    const params = {};
    if (this.feePredYear)
      params["academicYear"] = this.feePredYear;
    if (this.feePredClass)
      params["classRoom"] = this.feePredClass;
    this.api.feePredictionDashboard(params).subscribe({
      next: (dashboard) => {
        this.feePredDashboard = dashboard;
        this.feePredLoading = false;
        const valid = new Set((dashboard.predictions || []).map((row) => row.studentId));
        this.feePredSelectedIds = this.feePredSelectedIds.filter((id) => valid.has(id));
      },
      error: (error) => {
        this.feePredDashboard = null;
        this.feePredLoading = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  get feePredAllSelected() {
    const rows = this.feePredDashboard?.predictions || [];
    return rows.length > 0 && rows.every((row) => this.feePredSelectedIds.includes(row.studentId));
  }
  isFeePredSelected(studentId) {
    return this.feePredSelectedIds.includes(studentId);
  }
  toggleFeePredStudent(studentId, checked) {
    if (checked) {
      if (!this.feePredSelectedIds.includes(studentId))
        this.feePredSelectedIds = [...this.feePredSelectedIds, studentId];
    } else {
      this.feePredSelectedIds = this.feePredSelectedIds.filter((id) => id !== studentId);
    }
  }
  toggleFeePredSelectAll(checked) {
    const rows = this.feePredDashboard?.predictions || [];
    this.feePredSelectedIds = checked ? rows.map((row) => row.studentId) : [];
  }
  feePredRiskBarWidth(key) {
    const breakdown = this.feePredDashboard?.riskBreakdown;
    if (!breakdown)
      return 0;
    const total = Object.values(breakdown).reduce((sum, n) => sum + (Number(n) || 0), 0);
    if (!total)
      return 0;
    return Math.round((Number(breakdown[key]) || 0) / total * 100);
  }
  feePredTrendHeight(value) {
    const trend = this.feePredDashboard?.paymentTrend || [];
    const max = Math.max(...trend.map((p) => Math.max(p.billed || 0, p.collected || 0)), 1);
    return Math.max(4, Math.round((value || 0) / max * 100));
  }
  prepareFeeReminders() {
    if (!this.can("fee_prediction", "create") || !this.feePredSelectedIds.length)
      return;
    this.api.prepareFeeReminders(this.feePredSelectedIds).subscribe({
      next: (response) => {
        this.feePredReminders = response.reminders || [];
        this.toast.success(`${this.feePredReminders.length} parent reminder${this.feePredReminders.length === 1 ? "" : "s"} prepared`);
      },
      error: (error) => this.toast.error(extractApiMessage(error))
    });
  }
  sendFeeReminders(channel) {
    if (!this.can("fee_prediction", "create") || !this.feePredSelectedIds.length)
      return;
    this.feePredSending = true;
    this.api.sendFeeReminders(this.feePredSelectedIds, channel).subscribe({
      next: (response) => {
        this.feePredSending = false;
        if (channel === "whatsapp" || channel === "all") {
          this.api.prepareFeeReminders(this.feePredSelectedIds).subscribe({
            next: (prepared) => {
              this.feePredReminders = prepared.reminders || [];
              const links = this.feePredReminders.map((r) => r.reminder?.whatsappUrl).filter(Boolean);
              links.slice(0, 5).forEach((url) => window.open(url, "_blank"));
            }
          });
        }
        const parts = [];
        if (channel !== "whatsapp")
          parts.push(`${response.sent} email${response.sent === 1 ? "" : "s"} sent`);
        if (channel !== "email")
          parts.push(`${response.whatsappReady} WhatsApp link${response.whatsappReady === 1 ? "" : "s"} ready`);
        this.toast.success(parts.join(" \xB7 ") || "Reminders processed");
      },
      error: (error) => {
        this.feePredSending = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  // ── Timetable Generator ──
  ttGenDashboard = null;
  ttGenLoading = false;
  ttGenBusy = false;
  ttGenYear = "";
  ttGenClassFilter = "";
  ttGenDragSlotId = "";
  ttGenSelectedSlotId = "";
  ttGenDropDay = "";
  ttGenDropPeriod = 0;
  ttGenSettingsOpen = false;
  ttGenCompact = false;
  ttGenShowAdvancedFilters = false;
  ttGenGuideDismissed = false;
  ttGenPlanName = "";
  ttGenTeacherFilter = "";
  ttGenSubjectFilter = "";
  ttGenEditSubject = "";
  ttGenEditTeacher = "";
  ttGenEditRoom = "";
  ttGenEditSlotType = "subject";
  ttGenAssignDay = "";
  ttGenAssignPeriod = 0;
  ttGenAssignPeriodLabel = "";
  ttGenSubjectChoices = SUBJECT_OPTIONS;
  ttGenPeriods = [];
  ttGenAvailTeacher = "";
  ttGenAvailDay = "monday";
  ttGenAvailStartTime = "08:00";
  ttGenAvailEndTime = "08:40";
  ttGenConstraints = {
    maxPeriodsPerTeacherPerDay: 6,
    sportsPeriodsPerWeek: 2,
    libraryPeriodsPerWeek: 1,
    defaultSubjectPeriodsPerWeek: 4,
    labPeriodsPerWeek: 2,
    protectBreaks: true
  };
  applyTtGenDashboard(dashboard) {
    const previous = this.ttGenDashboard;
    const previousClassFilter = this.ttGenClassFilter;
    this.ttGenDashboard = __spreadProps(__spreadValues({}, dashboard), {
      teachers: dashboard.teachers || previous?.teachers || [],
      classes: dashboard.classes || previous?.classes || []
    });
    this.ttGenPeriods = (this.ttGenDashboard.plan?.periods || []).map((period) => __spreadValues({}, period));
    this.ttGenPlanName = this.ttGenDashboard.plan?.name || "";
    const classOptions = this.ttGenDashboard.classes || [];
    if (previousClassFilter && classOptions.some((room) => room._id === previousClassFilter)) {
      this.ttGenClassFilter = previousClassFilter;
    } else if (this.ttGenClassFilter && !classOptions.some((room) => room._id === this.ttGenClassFilter)) {
      this.ttGenClassFilter = "";
    }
    if (!this.ttGenClassFilter && classOptions.length) {
      this.ttGenClassFilter = classOptions[0]._id;
    }
    const firstTeachingPeriod = this.ttGenPeriods.find((period) => period.type === "teaching");
    if (firstTeachingPeriod && (!this.ttGenAvailStartTime || !this.ttGenAvailEndTime)) {
      this.ttGenAvailStartTime = firstTeachingPeriod.startTime;
      this.ttGenAvailEndTime = firstTeachingPeriod.endTime;
    }
    const c = this.ttGenDashboard.plan?.constraints;
    if (c) {
      this.ttGenConstraints = {
        maxPeriodsPerTeacherPerDay: c.maxPeriodsPerTeacherPerDay ?? 6,
        sportsPeriodsPerWeek: c.sportsPeriodsPerWeek ?? 2,
        libraryPeriodsPerWeek: c.libraryPeriodsPerWeek ?? 1,
        defaultSubjectPeriodsPerWeek: c.defaultSubjectPeriodsPerWeek ?? 4,
        labPeriodsPerWeek: c.labPeriodsPerWeek ?? 2,
        protectBreaks: c.protectBreaks !== false
      };
    }
    if (!this.ttGenHasSchedule() && this.ttGenGuideStep() === 1) {
      this.ttGenSettingsOpen = true;
    }
  }
  toggleTimetableSettings() {
    this.ttGenSettingsOpen = !this.ttGenSettingsOpen;
  }
  /** 1 = set day times, 2 = optional teachers + generate, 3 = review/apply, 4 = published */
  ttGenGuideStep() {
    const plan = this.ttGenDashboard?.plan;
    if (!plan)
      return 1;
    const teachingCount = (this.ttGenPeriods.length ? this.ttGenPeriods : plan.periods || []).filter((p) => p.type === "teaching").length;
    if (teachingCount < 1)
      return 1;
    const placed = this.ttGenDashboard?.summary?.placed || 0;
    if (placed < 1)
      return 2;
    if (plan.status === "applied")
      return 4;
    return 3;
  }
  ttGenHasSchedule() {
    return (this.ttGenDashboard?.summary?.placed || 0) > 0;
  }
  ttGenCanShowCalendar() {
    return (this.ttGenDashboard?.calendar?.periods || this.ttGenPeriods || []).length > 0;
  }
  ttGenIsAssigning() {
    return !!this.ttGenAssignDay && this.ttGenAssignPeriod > 0;
  }
  ttGenEditorOpen() {
    return !!this.ttGenSelectedSlotId || this.ttGenIsAssigning();
  }
  ttGenNextActionLabel() {
    const step = this.ttGenGuideStep();
    if (step === 1)
      return "Save school day times";
    if (step === 2)
      return "Create timetable";
    if ((this.ttGenDashboard?.summary?.conflictCount || 0) > 0)
      return "Review clashes";
    if (step === 3 && this.can("timetable_generator", "approve"))
      return "Publish for school";
    if (step === 4 && this.can("timetable_generator", "edit"))
      return "Edit timetable";
    return "Download PDF";
  }
  ttGenNextActionHint() {
    const step = this.ttGenGuideStep();
    if (step === 1) {
      return "Start here: set your school day periods (example: Period 1 from 8:00 to 8:40), then save.";
    }
    if (step === 2) {
      return "Day times are ready. Optionally mark busy teachers, then click Create timetable.";
    }
    if ((this.ttGenDashboard?.summary?.conflictCount || 0) > 0) {
      return "Almost done: fix clashes (same teacher/room at the same time), then publish.";
    }
    if (step === 4) {
      return "Timetable is live. Click Edit timetable to change teachers or subjects without losing data.";
    }
    return "Check the weekly grid for each class. When it looks good, publish for the school.";
  }
  runTtGenNextAction() {
    const step = this.ttGenGuideStep();
    const plan = this.ttGenDashboard?.plan;
    if (step === 1) {
      this.ttGenSettingsOpen = true;
      this.saveTimetablePeriods();
      return;
    }
    if (step === 2) {
      this.runTimetableGenerator();
      return;
    }
    if ((this.ttGenDashboard?.summary?.conflictCount || 0) > 0) {
      this.ttGenSelectedSlotId = "";
      this.clearTtGenSlotEditor();
      return;
    }
    if (plan?.status === "applied" && this.can("timetable_generator", "edit")) {
      this.enableTimetableEditing();
      return;
    }
    if (plan?.status !== "applied" && this.can("timetable_generator", "approve")) {
      this.applyTimetablePlan();
      return;
    }
    this.exportTimetablePlanPdf();
  }
  dismissTtGenGuide() {
    this.ttGenGuideDismissed = true;
  }
  loadTimetableGenerator() {
    if (!this.can("timetable_generator", "view"))
      return;
    this.ttGenLoading = true;
    const params = {};
    if (this.ttGenYear)
      params["academicYear"] = this.ttGenYear;
    this.api.timetableGeneratorDashboard(params).subscribe({
      next: (dashboard) => {
        this.applyTtGenDashboard(dashboard);
        this.ttGenLoading = false;
      },
      error: (error) => {
        this.ttGenLoading = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  enableTimetableEditing() {
    const plan = this.ttGenDashboard?.plan;
    if (!plan?._id || !this.can("timetable_generator", "edit"))
      return;
    if (plan.status === "draft") {
      this.toast.success("Timetable is already editable. Click a period to change subject or teacher.");
      return;
    }
    this.ttGenBusy = true;
    this.api.reopenTimetablePlanForEdit(plan._id).subscribe({
      next: (dashboard) => {
        this.applyTtGenDashboard(dashboard);
        this.ttGenBusy = false;
        this.toast.success("Editing enabled. Your periods and teachers are kept.");
      },
      error: (error) => {
        this.ttGenBusy = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  saveTimetableConstraints() {
    const planId = this.ttGenDashboard?.plan?._id;
    if (!planId || !this.can("timetable_generator", "edit"))
      return;
    this.ttGenBusy = true;
    this.api.updateTimetablePlanConfig(planId, { constraints: __spreadValues({}, this.ttGenConstraints) }).subscribe({
      next: () => {
        this.ttGenBusy = false;
        this.toast.success("Constraints saved");
        this.loadTimetableGenerator();
      },
      error: (error) => {
        this.ttGenBusy = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  addTimetablePeriod(type = "teaching") {
    const last3 = this.ttGenPeriods[this.ttGenPeriods.length - 1];
    const index = this.ttGenPeriods.reduce((max, period) => Math.max(max, period.index), 0) + 1;
    const startTime = last3?.endTime || "08:00";
    const [hours, minutes] = startTime.split(":").map(Number);
    const end = new Date(2e3, 0, 1, hours || 0, (minutes || 0) + (type === "break" ? 20 : 40));
    const endTime = `${String(end.getHours()).padStart(2, "0")}:${String(end.getMinutes()).padStart(2, "0")}`;
    this.ttGenPeriods.push({
      index,
      label: type === "break" ? "Break" : `Period ${this.ttGenPeriods.filter((p) => p.type === "teaching").length + 1}`,
      startTime,
      endTime,
      type
    });
  }
  removeTimetablePeriod(index) {
    this.ttGenPeriods = this.ttGenPeriods.filter((period) => period.index !== index).map((period, position) => __spreadProps(__spreadValues({}, period), { index: position + 1 }));
  }
  saveTimetablePeriods() {
    const planId = this.ttGenDashboard?.plan?._id;
    if (!planId || !this.can("timetable_generator", "edit"))
      return;
    if (!this.ttGenPeriods.length) {
      this.toast.error("Add at least one period");
      return;
    }
    const invalid = this.ttGenPeriods.some((period) => !period.label?.trim() || !period.startTime || !period.endTime || period.startTime >= period.endTime);
    if (invalid) {
      this.toast.error("Each period needs a label and an end time after its start time");
      return;
    }
    const sorted = this.ttGenPeriods.map((period) => __spreadProps(__spreadValues({}, period), { label: period.label.trim() })).sort((a, b) => a.startTime.localeCompare(b.startTime)).map((period, position) => __spreadProps(__spreadValues({}, period), { index: position + 1 }));
    const overlaps = sorted.some((period, index) => index > 0 && period.startTime < sorted[index - 1].endTime);
    if (overlaps) {
      this.toast.error("Period times cannot overlap");
      return;
    }
    this.ttGenBusy = true;
    const planName = this.ttGenPlanName.trim() || "School Timetable Plan";
    this.ttGenPlanName = planName;
    this.api.updateTimetablePlanConfig(planId, {
      name: planName,
      periods: sorted
    }).subscribe({
      next: () => {
        this.ttGenBusy = false;
        if (this.ttGenDashboard?.plan) {
          this.ttGenDashboard.plan = __spreadProps(__spreadValues({}, this.ttGenDashboard.plan), { name: planName });
        }
        this.toast.success("School day times saved. Next: create the timetable.");
        this.ttGenSettingsOpen = true;
        this.loadTimetableGenerator();
      },
      error: (error) => {
        this.ttGenBusy = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  addTeacherAvailabilityBlock() {
    const plan = this.ttGenDashboard?.plan;
    if (!plan?._id || !this.can("timetable_generator", "edit"))
      return;
    if (!this.ttGenAvailTeacher) {
      this.toast.error("Select a teacher");
      return;
    }
    if (!this.ttGenAvailStartTime || !this.ttGenAvailEndTime || this.ttGenAvailStartTime >= this.ttGenAvailEndTime) {
      this.toast.error("Select a valid unavailable start and end time");
      return;
    }
    const unavailablePeriods = this.ttGenPeriods.filter((period) => period.type === "teaching" && period.startTime < this.ttGenAvailEndTime && period.endTime > this.ttGenAvailStartTime).map((period) => period.index);
    if (!unavailablePeriods.length) {
      this.toast.error("The selected time does not overlap a teaching period");
      return;
    }
    const existing = [...plan.teacherAvailability || []];
    const day = this.ttGenAvailDay || "monday";
    const idx = existing.findIndex((row) => String(typeof row.teacher === "string" ? row.teacher : row.teacher?._id) === String(this.ttGenAvailTeacher) && row.dayOfWeek === day);
    if (idx >= 0) {
      existing[idx] = __spreadProps(__spreadValues({}, existing[idx]), {
        teacher: this.ttGenAvailTeacher,
        dayOfWeek: day,
        unavailablePeriods: [.../* @__PURE__ */ new Set([...existing[idx].unavailablePeriods || [], ...unavailablePeriods])]
      });
    } else {
      existing.push({ teacher: this.ttGenAvailTeacher, dayOfWeek: day, unavailablePeriods });
    }
    this.ttGenBusy = true;
    this.api.updateTimetablePlanConfig(plan._id, { teacherAvailability: existing }).subscribe({
      next: () => {
        this.ttGenBusy = false;
        this.toast.success("Teacher availability updated");
        this.loadTimetableGenerator();
      },
      error: (error) => {
        this.ttGenBusy = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  removeTeacherAvailabilityBlock(row) {
    const plan = this.ttGenDashboard?.plan;
    if (!plan?._id || !this.can("timetable_generator", "edit"))
      return;
    const teacherId = typeof row.teacher === "string" ? row.teacher : row.teacher?._id;
    const nextRows = (plan.teacherAvailability || []).filter((item) => {
      const itemTeacherId = typeof item.teacher === "string" ? item.teacher : item.teacher?._id;
      return !(String(itemTeacherId) === String(teacherId) && item.dayOfWeek === row.dayOfWeek);
    });
    this.ttGenBusy = true;
    this.api.updateTimetablePlanConfig(plan._id, { teacherAvailability: nextRows }).subscribe({
      next: () => {
        this.ttGenBusy = false;
        this.toast.success("Teacher availability removed");
        this.loadTimetableGenerator();
      },
      error: (error) => {
        this.ttGenBusy = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  ttGenAvailabilityTimeLabel(row) {
    const selected = this.ttGenPeriods.filter((period) => (row.unavailablePeriods || []).includes(period.index));
    if (!selected.length)
      return "No periods";
    return `${selected[0].startTime}\u2013${selected[selected.length - 1].endTime}`;
  }
  ttGenAvailTeacherLabel(row) {
    const teacher = row.teacher;
    if (!teacher)
      return "Teacher";
    if (typeof teacher === "string") {
      const match2 = (this.ttGenDashboard?.teachers || []).find((t) => t._id === teacher);
      return match2 ? `${match2.firstName} ${match2.lastName}` : teacher;
    }
    return [teacher.firstName, teacher.lastName].filter(Boolean).join(" ") || "Teacher";
  }
  runTimetableGenerator() {
    if (!this.can("timetable_generator", "create"))
      return;
    this.ttGenBusy = true;
    this.api.generateTimetable({
      academicYear: this.ttGenYear || void 0,
      planId: this.ttGenDashboard?.plan?._id
    }).subscribe({
      next: (dashboard) => {
        this.applyTtGenDashboard(dashboard);
        this.ttGenBusy = false;
        this.ttGenSettingsOpen = false;
        const score = dashboard.summary?.score ?? 0;
        const conflicts = dashboard.summary?.conflictCount ?? 0;
        if (conflicts > 0) {
          this.toast.success(`Timetable created with ${conflicts} clash${conflicts === 1 ? "" : "es"} to review.`);
        } else {
          this.toast.success(`Timetable created (${score}% filled). Review each class, then publish.`);
        }
      },
      error: (error) => {
        this.ttGenBusy = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  validateTimetablePlan() {
    const planId = this.ttGenDashboard?.plan?._id;
    if (!planId)
      return;
    this.ttGenBusy = true;
    this.api.validateTimetablePlan(planId).subscribe({
      next: (dashboard) => {
        this.applyTtGenDashboard(dashboard);
        this.ttGenBusy = false;
        this.toast.success(`${dashboard.summary?.conflictCount || 0} conflict(s) detected`);
      },
      error: (error) => {
        this.ttGenBusy = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  applyTimetablePlan() {
    const planId = this.ttGenDashboard?.plan?._id;
    if (!planId || !this.can("timetable_generator", "approve"))
      return;
    this.ttGenBusy = true;
    this.api.applyTimetablePlan(planId).subscribe({
      next: (dashboard) => {
        this.applyTtGenDashboard(dashboard);
        this.ttGenBusy = false;
        this.toast.success("Plan applied to live timetable");
        if (this.can("timetable", "view"))
          this.loadListing("timetable");
      },
      error: (error) => {
        this.ttGenBusy = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  exportTimetablePlanPdf() {
    const planId = this.ttGenDashboard?.plan?._id;
    if (!planId || !this.can("timetable_generator", "print"))
      return;
    this.openProtectedPdf(this.api.timetablePlanPdfUrl(planId, this.ttGenClassFilter || void 0));
  }
  ttGenConflictKeys() {
    return Object.keys(this.ttGenDashboard?.conflictsByType || {});
  }
  ttGenDayLabel(day) {
    return day ? day.charAt(0).toUpperCase() + day.slice(1, 3) : day;
  }
  ttGenFullDayLabel(day) {
    return day ? day.charAt(0).toUpperCase() + day.slice(1) : day;
  }
  ttGenIsToday(day) {
    const map2 = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return map2[(/* @__PURE__ */ new Date()).getDay()] === String(day || "").toLowerCase();
  }
  selectTtGenClass(classId) {
    this.ttGenClassFilter = classId;
    this.ttGenSelectedSlotId = "";
    this.clearTtGenSlotEditor();
  }
  toggleTtGenCompact() {
    this.ttGenCompact = !this.ttGenCompact;
  }
  clearTtGenSlotEditor() {
    this.ttGenEditSubject = "";
    this.ttGenEditTeacher = "";
    this.ttGenEditRoom = "";
    this.ttGenEditSlotType = "subject";
    this.ttGenAssignDay = "";
    this.ttGenAssignPeriod = 0;
    this.ttGenAssignPeriodLabel = "";
  }
  openTtGenSlotEditor(slot) {
    this.ttGenAssignDay = "";
    this.ttGenAssignPeriod = 0;
    this.ttGenAssignPeriodLabel = "";
    this.ttGenSelectedSlotId = slot._id;
    this.ttGenEditSubject = slot.subject || "";
    this.ttGenEditTeacher = typeof slot.teacher === "string" ? slot.teacher : slot.teacher?._id || "";
    this.ttGenEditRoom = slot.room || "";
    this.ttGenEditSlotType = slot.slotType === "break" ? "subject" : slot.slotType || "subject";
  }
  openTtGenAssignCell(day, period) {
    if (!this.can("timetable_generator", "edit"))
      return;
    if (this.ttGenDashboard?.plan?.status === "applied") {
      this.toast.error("This timetable is live. Create a new draft to edit.");
      return;
    }
    if (!this.ttGenClassFilter) {
      this.toast.error("Select a class first (example: VII-A), then click a Free period");
      return;
    }
    if (period.type === "break" || period.type === "assembly") {
      this.toast.error(`Cannot assign a teacher during ${period.type}`);
      return;
    }
    this.ttGenSelectedSlotId = "";
    this.ttGenAssignDay = day;
    this.ttGenAssignPeriod = period.index;
    this.ttGenAssignPeriodLabel = `${period.label} (${period.startTime}\u2013${period.endTime})`;
    this.ttGenEditSubject = "";
    this.ttGenEditTeacher = "";
    this.ttGenEditRoom = "";
    this.ttGenEditSlotType = "subject";
  }
  ttGenAssignContextLabel() {
    if (!this.ttGenIsAssigning())
      return "";
    return `${this.ttGenSelectedClassLabel()} \xB7 ${this.ttGenFullDayLabel(this.ttGenAssignDay)} \xB7 ${this.ttGenAssignPeriodLabel}`;
  }
  saveTimetableSlotEdit() {
    const planId = this.ttGenDashboard?.plan?._id;
    if (!planId || !this.can("timetable_generator", "edit"))
      return;
    if (!this.ttGenEditSubject.trim()) {
      this.toast.error("Select or type a subject");
      return;
    }
    if (!this.ttGenEditTeacher) {
      this.toast.error("Select a teacher for this period");
      return;
    }
    if (this.ttGenIsAssigning()) {
      this.ttGenBusy = true;
      this.api.assignTimetableSlot(planId, {
        classRoom: this.ttGenClassFilter,
        dayOfWeek: this.ttGenAssignDay,
        periodIndex: this.ttGenAssignPeriod,
        subject: this.ttGenEditSubject.trim(),
        teacher: this.ttGenEditTeacher,
        room: this.ttGenEditRoom.trim(),
        slotType: this.ttGenEditSlotType
      }).subscribe({
        next: (dashboard) => {
          this.applyTtGenDashboard(dashboard);
          this.ttGenBusy = false;
          this.ttGenSelectedSlotId = "";
          this.clearTtGenSlotEditor();
          this.toast.success("Teacher assigned to this period");
        },
        error: (error) => {
          this.ttGenBusy = false;
          this.toast.error(extractApiMessage(error));
        }
      });
      return;
    }
    const slot = this.ttGenSelectedSlot();
    if (!slot)
      return;
    this.ttGenBusy = true;
    this.api.updateTimetableSlot(planId, slot._id, {
      subject: this.ttGenEditSubject.trim(),
      teacher: this.ttGenEditTeacher || null,
      room: this.ttGenEditRoom.trim(),
      slotType: this.ttGenEditSlotType
    }).subscribe({
      next: (dashboard) => {
        this.applyTtGenDashboard(dashboard);
        this.ttGenBusy = false;
        this.ttGenSelectedSlotId = "";
        this.clearTtGenSlotEditor();
        this.toast.success("Period updated");
      },
      error: (error) => {
        this.ttGenBusy = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  onTtGenCellClick(day, period) {
    if (period.type === "break" || period.type === "assembly")
      return;
    if (this.ttGenSelectedSlotId) {
      this.moveSelectedTimetableSlot(day, period);
      return;
    }
    const existing = this.ttGenSlotsFor(day, period.index);
    if (existing.length)
      return;
    this.openTtGenAssignCell(day, period);
  }
  ttGenVisibleConflicts() {
    const conflicts = this.ttGenDashboard?.plan?.conflicts || [];
    if (!this.ttGenClassFilter)
      return conflicts;
    const classSlots = new Set((this.ttGenDashboard?.calendar?.cells || []).filter((slot) => {
      const id = typeof slot.classRoom === "string" ? slot.classRoom : slot.classRoom?._id;
      return String(id) === String(this.ttGenClassFilter);
    }).map((slot) => String(slot._id)));
    return conflicts.filter((conflict) => {
      if (!conflict.slotIds?.length)
        return true;
      return conflict.slotIds.some((id) => classSlots.has(String(id)));
    });
  }
  ttGenSubjectOptions() {
    const subjects = /* @__PURE__ */ new Set();
    for (const slot of this.ttGenDashboard?.calendar?.cells || []) {
      if (slot.subject && slot.slotType !== "break")
        subjects.add(slot.subject);
    }
    return [...subjects].sort((a, b) => a.localeCompare(b));
  }
  ttGenSubjectHue(subject) {
    const text = (subject || "subject").trim().toLowerCase();
    let hash = 0;
    for (let i = 0; i < text.length; i += 1) {
      hash = (hash * 31 + text.charCodeAt(i)) % 360;
    }
    return hash;
  }
  ttGenSelectedSlot() {
    if (!this.ttGenSelectedSlotId)
      return null;
    return (this.ttGenDashboard?.calendar?.cells || []).find((slot) => slot._id === this.ttGenSelectedSlotId) || null;
  }
  ttGenTeacherLoad() {
    const maxPerDay = this.ttGenConstraints.maxPeriodsPerTeacherPerDay || 6;
    const workingDays = this.ttGenDashboard?.plan?.workingDays?.length || 5;
    const weeklyCap = maxPerDay * workingDays;
    const counts = /* @__PURE__ */ new Map();
    for (const slot of this.ttGenDashboard?.calendar?.cells || []) {
      if (slot.slotType === "break" || !slot.teacher)
        continue;
      if (this.ttGenClassFilter) {
        const id = typeof slot.classRoom === "string" ? slot.classRoom : slot.classRoom?._id;
        if (String(id) !== String(this.ttGenClassFilter))
          continue;
      }
      const name = slot.teacherLabel || this.ttGenTeacherLabel(slot) || "Teacher";
      counts.set(name, (counts.get(name) || 0) + 1);
    }
    return [...counts.entries()].map(([name, count]) => ({ name, count, maxed: count >= weeklyCap })).sort((a, b) => b.count - a.count).slice(0, 8);
  }
  ttGenAcademicYearLabel() {
    const year = this.ttGenDashboard?.plan?.academicYear;
    if (!year)
      return "Academic year not selected";
    if (typeof year === "string") {
      return this.years.find((item) => item._id === year)?.name || year;
    }
    return year.name;
  }
  ttGenSelectedClassLabel() {
    if (!this.ttGenClassFilter)
      return "All classes overview";
    const room = (this.ttGenDashboard?.classes || []).find((item) => item._id === this.ttGenClassFilter);
    return room ? `${room.name}${room.section ? `-${room.section}` : ""}` : "Select a class";
  }
  ttGenClassLabel(slot) {
    const room = slot.classRoom;
    if (!room || typeof room === "string")
      return slot.classLabel || "";
    return `${room.name || ""}${room.section ? `-${room.section}` : ""}`.trim();
  }
  ttGenTeacherLabel(slot) {
    if (slot.teacherLabel)
      return slot.teacherLabel;
    const teacher = slot.teacher;
    if (!teacher || typeof teacher === "string")
      return "";
    return [teacher.firstName, teacher.lastName].filter(Boolean).join(" ");
  }
  ttGenSlotsFor(day, periodIndex) {
    const cells = this.ttGenDashboard?.calendar?.cells || [];
    return cells.filter((slot) => {
      if (slot.dayOfWeek !== day || slot.periodIndex !== periodIndex)
        return false;
      if (slot.slotType === "break")
        return false;
      if (this.ttGenClassFilter) {
        const id = typeof slot.classRoom === "string" ? slot.classRoom : slot.classRoom?._id;
        if (String(id) !== String(this.ttGenClassFilter))
          return false;
      }
      if (this.ttGenTeacherFilter) {
        const teacherId = typeof slot.teacher === "string" ? slot.teacher : slot.teacher?._id;
        if (String(teacherId || "") !== String(this.ttGenTeacherFilter))
          return false;
      }
      if (this.ttGenSubjectFilter) {
        if (String(slot.subject || "").toLowerCase() !== String(this.ttGenSubjectFilter).toLowerCase()) {
          return false;
        }
      }
      return true;
    });
  }
  ttGenCellHasConflict(day, periodIndex) {
    return (this.ttGenDashboard?.plan?.conflicts || []).some((c) => c.severity === "error" && c.dayOfWeek === day && c.periodIndex === periodIndex);
  }
  onTtGenDragStart(event, slot) {
    this.ttGenDragSlotId = slot._id;
    this.ttGenSelectedSlotId = slot._id;
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", slot._id);
      event.dataTransfer.setData("application/x-timetable-slot", slot._id);
    }
  }
  onTtGenDragEnd() {
    this.ttGenDragSlotId = "";
    this.ttGenDropDay = "";
    this.ttGenDropPeriod = 0;
  }
  onTtGenDragOver(event, day, period) {
    if (period.type === "break" || period.type === "assembly")
      return;
    event.preventDefault();
    event.stopPropagation();
    this.ttGenDropDay = day;
    this.ttGenDropPeriod = period.index;
    if (event.dataTransfer)
      event.dataTransfer.dropEffect = "move";
  }
  onTtGenDrop(event, day, period) {
    event.preventDefault();
    event.stopPropagation();
    const planId = this.ttGenDashboard?.plan?._id;
    const slotId = this.ttGenDragSlotId || event.dataTransfer?.getData("application/x-timetable-slot") || event.dataTransfer?.getData("text/plain");
    this.ttGenDragSlotId = "";
    this.ttGenDropDay = "";
    this.ttGenDropPeriod = 0;
    this.moveTimetableSlot(planId, slotId, day, period);
  }
  selectTimetableSlot(slot) {
    if (!this.can("timetable_generator", "edit") || slot.locked || slot.slotType === "break")
      return;
    if (this.ttGenSelectedSlotId === slot._id) {
      this.ttGenSelectedSlotId = "";
      this.clearTtGenSlotEditor();
      return;
    }
    this.openTtGenSlotEditor(slot);
  }
  moveSelectedTimetableSlot(day, period) {
    const planId = this.ttGenDashboard?.plan?._id;
    if (!this.ttGenSelectedSlotId)
      return;
    this.moveTimetableSlot(planId, this.ttGenSelectedSlotId, day, period);
  }
  moveTimetableSlot(planId, slotId, day, period) {
    if (!planId || !slotId || !this.can("timetable_generator", "edit"))
      return;
    if (period.type === "break" || period.type === "assembly") {
      this.toast.error(`Cannot place a class during ${period.type}`);
      return;
    }
    this.ttGenBusy = true;
    this.api.moveTimetableSlot(planId, { slotId, targetDay: day, targetPeriodIndex: period.index, swap: true }).subscribe({
      next: (dashboard) => {
        this.applyTtGenDashboard(dashboard);
        this.ttGenBusy = false;
        this.ttGenSelectedSlotId = "";
        this.clearTtGenSlotEditor();
        this.toast.success("Period moved");
      },
      error: (error) => {
        this.ttGenBusy = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  // ── Fee structure definition (admin builds per class + year) ──
  feeComponentPresets = FEE_COMPONENT_PRESETS;
  feeFrequencyOptions = FEE_FREQUENCY_OPTIONS;
  showFeeStructure = false;
  feeStructureYear = "";
  feeStructureClassName = "";
  feeStructureComponents = [];
  feeStructureId = null;
  feeStructureLoading = false;
  feeStructureSaving = false;
  toggleFeeStructure() {
    this.showFeeStructure = !this.showFeeStructure;
    if (this.showFeeStructure && !this.feeStructureYear) {
      this.feeStructureYear = this.feeDemandForm.get("academicYear")?.value || this.activeAcademicYear?._id || "";
    }
  }
  loadFeeStructure() {
    if (!this.feeStructureYear || !this.feeStructureClassName) {
      this.feeStructureComponents = [];
      this.feeStructureId = null;
      return;
    }
    this.feeStructureLoading = true;
    this.api.feeStructureForClass(this.feeStructureYear, { className: this.feeStructureClassName }).subscribe({
      next: (structure) => {
        this.feeStructureComponents = (structure?.components || []).map((component) => __spreadValues({}, component));
        this.feeStructureId = structure?._id || null;
        this.feeStructureLoading = false;
      },
      error: () => {
        this.feeStructureComponents = [];
        this.feeStructureId = null;
        this.feeStructureLoading = false;
      }
    });
  }
  addFeeComponentPreset(preset) {
    if (this.feeStructureComponents.some((component) => component.key === preset.key)) {
      this.toast.error(`${preset.label} is already added`);
      return;
    }
    this.feeStructureComponents.push({
      key: preset.key,
      label: preset.label,
      amount: 0,
      frequency: preset.frequency,
      newAdmissionOnly: preset.newAdmissionOnly
    });
  }
  addCustomFeeComponent() {
    this.feeStructureComponents.push({
      key: `custom_${Date.now()}`,
      label: "",
      amount: 0,
      frequency: "monthly",
      newAdmissionOnly: false
    });
  }
  removeFeeComponent(index) {
    this.feeStructureComponents.splice(index, 1);
  }
  onFeeComponentFrequencyChange(component) {
    if (component.frequency !== "one_time")
      component.newAdmissionOnly = false;
  }
  get feeStructureTotal() {
    return this.feeStructureComponents.reduce((sum, component) => sum + (Number(component.amount) || 0), 0);
  }
  feeCycleLabel(value) {
    return this.feeFrequencyOptions.find((opt) => opt.value === value)?.label || "Monthly";
  }
  saveFeeStructure() {
    if (!this.can("fees", "create")) {
      this.toast.error("You do not have permission to configure fee structures");
      return;
    }
    if (!this.feeStructureYear || !this.feeStructureClassName) {
      this.toast.error("Select an academic year and class first");
      return;
    }
    const components = this.feeStructureComponents.map((component) => ({
      key: component.key,
      label: (component.label || "").trim(),
      amount: Math.max(Number(component.amount) || 0, 0),
      frequency: component.frequency,
      newAdmissionOnly: component.frequency === "one_time" ? !!component.newAdmissionOnly : false
    })).filter((component) => component.label);
    this.feeStructureSaving = true;
    this.api.saveFeeStructure({
      academicYear: this.feeStructureYear,
      className: this.feeStructureClassName,
      components
    }).subscribe({
      next: (structure) => {
        this.feeStructureId = structure?._id || null;
        this.feeStructureSaving = false;
        this.toast.success(`Fee structure saved for Class ${this.feeStructureClassName}. It will apply to all sections.`);
        if (this.can("classes", "view"))
          this.loadListing("classes");
      },
      error: (error) => {
        this.feeStructureSaving = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  deleteFeeStructure() {
    if (!this.feeStructureId) {
      this.feeStructureComponents = [];
      return;
    }
    if (!confirm("Delete this fee structure? Existing demands will not change."))
      return;
    this.api.deleteFeeStructure(this.feeStructureId).subscribe({
      next: () => {
        this.feeStructureComponents = [];
        this.feeStructureId = null;
        this.toast.success("Fee structure deleted");
      },
      error: (error) => this.toast.error(extractApiMessage(error))
    });
  }
  // ── Fee Demands view + collapsible filters ──
  invoiceView = "card";
  showInvoiceFilters = false;
  showFeeHistoryFilters = false;
  setInvoiceView(view) {
    this.invoiceView = view;
  }
  toggleInvoiceFilters() {
    this.showInvoiceFilters = !this.showInvoiceFilters;
  }
  toggleFeeHistoryFilters() {
    this.showFeeHistoryFilters = !this.showFeeHistoryFilters;
  }
  resetInvoiceFilters() {
    ["invoiceSearch", "invoiceStatus", "invoiceYear", "invoiceClass", "invoiceMonth"].forEach((key) => this.updateListFilter("invoices", key, ""));
  }
  // ── Fee collection: student-search workflow ──
  collectAcademicYear = "";
  collectClassRoom = "";
  collectStudentQuery = "";
  collectStudentResults = [];
  collectSearching = false;
  collectSelectedStudent = null;
  collectStudentInvoices = [];
  collectInvoicesLoading = false;
  collectSearchTimer = null;
  onCollectStudentQuery(term) {
    this.collectStudentQuery = term;
    this.collectSelectedStudent = null;
    if (this.collectSearchTimer)
      clearTimeout(this.collectSearchTimer);
    if (term.trim().length < 2) {
      this.collectStudentResults = [];
      return;
    }
    this.collectSearchTimer = setTimeout(() => this.searchCollectStudents(), 300);
  }
  searchCollectStudents() {
    this.collectSearching = true;
    const params = {
      search: this.collectStudentQuery.trim(),
      status: "active",
      page: 1,
      pageSize: 12
    };
    if (this.collectAcademicYear)
      params["academicYear"] = this.collectAcademicYear;
    if (this.collectClassRoom)
      params["classRoom"] = this.collectClassRoom;
    this.api.students(params).subscribe({
      next: (res) => {
        this.collectStudentResults = res.data;
        this.collectSearching = false;
      },
      error: () => {
        this.collectStudentResults = [];
        this.collectSearching = false;
      }
    });
  }
  selectCollectStudent(student) {
    this.collectSelectedStudent = student;
    this.collectStudentResults = [];
    this.collectStudentQuery = `${this.studentName(student)} (${student.admissionNumber})`;
    this.paymentForm.patchValue({ invoiceId: "" });
    this.loadStudentPendingInvoices(student._id);
  }
  clearCollectStudent() {
    this.collectSelectedStudent = null;
    this.collectStudentInvoices = [];
    this.collectStudentResults = [];
    this.collectStudentQuery = "";
    this.paymentForm.reset({
      invoiceId: "",
      amount: 0,
      mode: PAYMENT_MODES.CASH,
      referenceNumber: "",
      discount: 0,
      fine: 0,
      otherCharges: 0
    });
  }
  loadStudentPendingInvoices(studentId) {
    this.collectInvoicesLoading = true;
    this.api.invoices({ student: studentId, page: 1, pageSize: 100 }).subscribe({
      next: (res) => {
        this.collectStudentInvoices = res.data.filter((invoice) => invoice.status !== "cancelled");
        this.collectInvoicesLoading = false;
      },
      error: () => {
        this.collectStudentInvoices = [];
        this.collectInvoicesLoading = false;
      }
    });
  }
  get collectPendingInvoices() {
    return this.collectStudentInvoices.filter((invoice) => invoice.balanceAmount > 0);
  }
  get collectTotalDue() {
    return this.collectStudentInvoices.reduce((sum, invoice) => sum + (invoice.balanceAmount || 0), 0);
  }
  get collectStudentClassLabel() {
    const student = this.collectSelectedStudent;
    if (!student)
      return "";
    const enrollment = student.enrollments?.find((e) => e.status === "studying") || student.enrollments?.[0];
    const room = enrollment?.classRoom;
    if (room && typeof room !== "string")
      return `${room.name}-${room.section}`;
    return "";
  }
  get collectStudentRoll() {
    const student = this.collectSelectedStudent;
    if (!student)
      return "";
    const enrollment = student.enrollments?.find((e) => e.status === "studying") || student.enrollments?.[0];
    return enrollment?.rollNumber || "";
  }
  collectIncludeAdmissionFees = true;
  selectCollectInvoice(invoice) {
    this.collectIncludeAdmissionFees = true;
    this.paymentForm.patchValue({
      invoiceId: invoice._id,
      amount: invoice.balanceAmount || 0,
      discount: invoice.discount || 0,
      fine: invoice.fine || 0,
      otherCharges: invoice.otherCharges || 0
    });
    this.onCollectAdjustmentChange();
  }
  // Admission + registration are one-time fees; the cashier can waive them at collection.
  get collectOneTimeFeesTotal() {
    const invoice = this.collectSelectedInvoice;
    if (!invoice?.feeComponents)
      return 0;
    return invoice.feeComponents.filter((c) => c.key === "admission" || c.key === "registration").reduce((sum, c) => sum + (Number(c.amount) || 0), 0);
  }
  get collectHasOneTimeFees() {
    return this.collectOneTimeFeesTotal > 0;
  }
  onToggleAdmissionFees() {
    const invoice = this.collectSelectedInvoice;
    if (!invoice)
      return;
    const baseOther = invoice.otherCharges || 0;
    const oneTime = this.collectOneTimeFeesTotal;
    const newOther = this.collectIncludeAdmissionFees ? baseOther : Math.max(baseOther - oneTime, 0);
    this.paymentForm.patchValue({ otherCharges: newOther });
    this.onCollectAdjustmentChange();
  }
  // When the cashier edits discount/fine/other charges, keep "Amount paying" in sync
  // with the recalculated net payable. Without this the server rejects the payment
  // ("Payment exceeds balance due") because a discount lowers the balance after the fact.
  onCollectAdjustmentChange() {
    const netPayable = this.paymentBreakdown.netPayable;
    this.paymentForm.patchValue({ amount: netPayable }, { emitEvent: false });
  }
  get collectSelectedInvoice() {
    const id = this.paymentForm.get("invoiceId")?.value;
    if (!id)
      return void 0;
    return this.collectStudentInvoices.find((invoice) => invoice._id === id) || this.invoices.find((invoice) => invoice._id === id);
  }
  // Live payment breakdown that recalculates as the cashier edits discount/fine/other.
  get paymentBreakdown() {
    const invoice = this.collectSelectedInvoice;
    const value = this.paymentForm.getRawValue();
    const discount = Number(value.discount) || 0;
    const fine = Number(value.fine) || 0;
    const other = Number(value.otherCharges) || 0;
    const amount = Number(value.amount) || 0;
    if (!invoice) {
      return { total: 0, discount, fine, other, netPayable: 0, amount, remaining: 0 };
    }
    const baseComponents = (invoice.tuitionFee || 0) + (invoice.busFee || 0) + (invoice.previousPending || 0);
    const adjustedTotal = baseComponents + other + fine - discount;
    const netPayable = Math.max(adjustedTotal - (invoice.paidAmount || 0), 0);
    const remaining = Math.max(netPayable - amount, 0);
    return { total: Math.max(adjustedTotal, 0), discount, fine, other, netPayable, amount, remaining };
  }
  listingKeysForRole() {
    if (this.isAdmin)
      return this.serverPagedKeys;
    if (this.currentUser?.role === "accountant") {
      return this.operationalPagedKeys.filter((key) => this.canAccessOperationalList(key));
    }
    if (this.isTeacher)
      return ["students", "classes"];
    return [];
  }
  withFilteredExportRows(key, fallbackRows, exporter) {
    if (!this.isServerPaged(key)) {
      exporter(fallbackRows);
      return;
    }
    const total = this.listingTotals[key] ?? fallbackRows.length;
    const query = __spreadProps(__spreadValues({}, this.buildListQuery(key)), {
      page: 1,
      pageSize: Math.min(Math.max(total, 1), 1e4)
    });
    const request = this.getListRequest(key, query);
    if (!request) {
      exporter(fallbackRows);
      return;
    }
    request.subscribe({
      next: (response) => exporter(response.data),
      error: (error) => this.toast.error(extractApiMessage(error))
    });
  }
  loadListing(key) {
    if (!this.currentUser || !this.isServerPaged(key))
      return;
    const query = this.buildListQuery(key);
    const request = this.getListRequest(key, query);
    if (!request)
      return;
    this.listingLoading[key] = true;
    request.subscribe({
      next: (response) => {
        this.listingRows[key] = response.data;
        this.listingTotals[key] = response.pagination?.totalItems ?? response.data.length;
        if (key === "invoices")
          this.invoices = response.data;
        if (key === "feeHistory")
          this.feeHistory = response.data;
        if (key === "payroll")
          this.payrolls = response.data;
        if (key === "busRoutes")
          this.busRoutes = response.data;
        if (key === "busRegistrations")
          this.busRegistrations = response.data;
        if (key === "attendance")
          this.attendance = response.data;
        if (key === "exams")
          this.exams = response.data;
        this.listingLoading[key] = false;
      },
      error: (error) => {
        this.listingLoading[key] = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  getListRequest(key, query) {
    switch (key) {
      case "students":
        return this.can("students", "view") ? this.api.students(query) : null;
      case "classes":
        return this.can("classes", "view") ? this.api.classes(query) : null;
      case "years":
        return this.can("academic_year", "view") ? this.api.academicYears(query) : null;
      case "teachers":
        return this.can("teachers", "view") ? this.api.teachers(query) : null;
      case "users":
        return this.can("users", "view") ? this.api.listUsers(query) : null;
      case "invoices":
        return this.can("fees", "view") ? this.api.invoices(query) : null;
      case "feeHistory":
        return this.can("fees", "view") ? this.api.feeHistory(query) : null;
      case "payroll":
        return this.can("payroll", "view") ? this.api.payroll(query) : null;
      case "busRoutes":
        return this.can("transport", "view") ? this.api.busRoutes(query) : null;
      case "busRegistrations":
        return this.can("transport", "view") ? this.api.busRegistrations(query) : null;
      case "attendance":
        return this.can("attendance", "view") ? this.api.attendance(query) : null;
      case "exams":
        return this.can("exams", "view") ? this.api.exams(query) : null;
      default:
        return null;
    }
  }
  buildListQuery(key) {
    const query = {
      page: this.pages[key] || 1,
      pageSize: this.getListPageSize(key)
    };
    const sort = this.listSort[key];
    if (sort?.field) {
      query.sortField = this.mapSortField(key, sort.field);
      query.sortDir = sort.dir || "asc";
    }
    if (key === "students") {
      if (this.filters.studentSearch)
        query.search = this.filters.studentSearch;
      if (this.filters.studentClass)
        query.classRoom = this.filters.studentClass;
      if (this.filters.studentYear)
        query.academicYear = this.filters.studentYear;
      if (this.filters.studentSection)
        query.section = this.filters.studentSection;
      if (this.filters.studentStatus)
        query.status = this.filters.studentStatus;
      if (this.filters.studentAdmissionFrom)
        query.admissionFrom = this.filters.studentAdmissionFrom;
      if (this.filters.studentAdmissionTo)
        query.admissionTo = this.filters.studentAdmissionTo;
    }
    if (key === "classes") {
      if (this.filters.classSearch)
        query.search = this.filters.classSearch;
      if (this.filters.classYear)
        query.academicYear = this.filters.classYear;
      if (this.filters.classStatus)
        query.status = this.filters.classStatus;
    }
    if (key === "years") {
      if (this.filters.yearSearch)
        query.search = this.filters.yearSearch;
      if (this.filters.yearStatus)
        query.status = this.filters.yearStatus;
    }
    if (key === "teachers") {
      if (this.filters.teacherSearch)
        query.search = this.filters.teacherSearch;
      if (this.filters.teacherStatus)
        query.status = this.filters.teacherStatus;
    }
    if (key === "users") {
      if (this.filters.userSearch)
        query.search = this.filters.userSearch;
      if (this.filters.userRole)
        query.role = this.filters.userRole;
      if (this.filters.userStatus)
        query.status = this.filters.userStatus;
    }
    if (key === "invoices") {
      if (this.filters.invoiceSearch)
        query.search = this.filters.invoiceSearch;
      if (this.filters.invoiceStatus)
        query.status = this.filters.invoiceStatus;
      if (this.filters.invoiceYear)
        query.academicYear = this.filters.invoiceYear;
      if (this.filters.invoiceClass)
        query.classRoom = this.filters.invoiceClass;
      if (this.filters.invoiceMonth)
        query.feeMonth = this.filters.invoiceMonth;
    }
    if (key === "feeHistory") {
      if (this.filters.feeHistorySearch)
        query.search = this.filters.feeHistorySearch;
      if (this.filters.feeHistoryStatus)
        query.paymentStatus = this.filters.feeHistoryStatus;
      if (this.filters.feeHistoryClass)
        query.classRoom = this.filters.feeHistoryClass;
    }
    if (key === "payroll") {
      if (this.filters.payrollSearch)
        query.search = this.filters.payrollSearch;
      if (this.filters.payrollStatus)
        query.status = this.filters.payrollStatus;
    }
    if (key === "busRoutes") {
      if (this.filters.busRouteSearch)
        query.search = this.filters.busRouteSearch;
      if (this.filters.busRouteStatus)
        query.status = this.filters.busRouteStatus;
    }
    if (key === "busRegistrations") {
      if (this.filters.busRegYear)
        query.academicYear = this.filters.busRegYear;
      if (this.filters.busRegRoute)
        query.route = this.filters.busRegRoute;
      if (this.filters.busRegClass)
        query.classRoom = this.filters.busRegClass;
      if (this.filters.busRegStatus)
        query.status = this.filters.busRegStatus;
      if (this.filters.busRegSearch)
        query.search = this.filters.busRegSearch;
    }
    if (key === "attendance") {
      if (this.filters.attendanceSearch)
        query.search = this.filters.attendanceSearch;
      if (this.filters.attendanceStatus)
        query.status = this.filters.attendanceStatus;
      if (this.filters.attendanceClass)
        query.classRoom = this.filters.attendanceClass;
      if (this.filters.attendanceYear)
        query.academicYear = this.filters.attendanceYear;
    }
    if (key === "exams") {
      if (this.filters.examSearch)
        query.search = this.filters.examSearch;
      if (this.filters.examStatus)
        query.status = this.filters.examStatus;
    }
    return query;
  }
  mapSortField(key, field) {
    const maps = {
      students: { name: "firstName", class: "firstName" },
      teachers: { name: "firstName" },
      classes: { class: "name", academicYear: "name", teacher: "name" },
      users: { status: "createdAt" },
      invoices: { studentName: "dueDate", period: "feeYear" },
      feeHistory: { studentName: "paymentDate", period: "paymentDate" },
      payroll: { teacherName: "year", period: "year" },
      busRoutes: { route: "routeName" },
      busRegistrations: { studentName: "updatedAt" },
      attendance: { studentName: "date", className: "date" },
      exams: { title: "title", subject: "subject", status: "status" }
    };
    return maps[key]?.[field] || field;
  }
  reloadListing(key) {
    if (this.isServerPaged(key))
      this.loadListing(key);
  }
  getListPageSize(key) {
    return this.pageSizes[key] ?? this.pageSize;
  }
  setListPageSize(key, size) {
    this.pageSizes[key] = size;
    this.pages[key] = 1;
    this.persistListState(key);
    this.reloadListing(key);
  }
  toggleListSort(key, field) {
    const current = this.listSort[key];
    this.listSort[key] = current?.field === field ? { field, dir: current.dir === "asc" ? "desc" : "asc" } : { field, dir: "asc" };
    this.pages[key] = 1;
    this.persistListState(key);
    this.reloadListing(key);
  }
  listSortIndicator(key, field) {
    const sort = this.listSort[key];
    if (sort?.field !== field)
      return "";
    return sort.dir === "asc" ? " \u2191" : " \u2193";
  }
  updateListSearch(key, filterKey, value) {
    this.filters[filterKey] = value;
    this.resetPage(key);
    this.persistListState(key);
    this.reloadListing(key);
  }
  updateListFilter(key, filterKey, value) {
    this.filters[filterKey] = value;
    this.resetPage(key);
    this.persistListState(key);
    this.reloadListing(key);
  }
  persistListState(key) {
    const filterKeys = LIST_FILTER_KEYS[key];
    const filters = {};
    if (filterKeys) {
      for (const filterKey of filterKeys) {
        filters[filterKey] = String(this.filters[filterKey] || "");
      }
    }
    this.listingState.save(key, {
      page: this.pages[key],
      pageSize: this.getListPageSize(key),
      sortField: this.listSort[key]?.field,
      sortDir: this.listSort[key]?.dir,
      filters
    });
    this.persistWorkspaceContext();
  }
  persistWorkspaceContext() {
    this.sessionContext.patch({
      academicYearId: this.filters.studentYear || this.filters.attendanceYear || this.filters.invoiceYear || this.filters.busRegYear || void 0,
      classId: this.filters.studentClass || this.filters.attendanceClass || void 0,
      section: this.filters.studentSection || void 0,
      promotionWizardStep: this.promotionWizardStep,
      promotionFromYear: this.promotionForm.get("fromAcademicYear")?.value || void 0,
      promotionToYear: this.promotionForm.get("toAcademicYear")?.value || void 0,
      promotionFromClass: this.promotionForm.get("fromClassRoom")?.value || void 0,
      promotionToClass: this.promotionForm.get("toClassRoom")?.value || void 0,
      promotionRollMode: this.promotionRollMode
    });
  }
  restoreWorkspaceContext() {
    const ctx = this.sessionContext.load();
    const yearId = ctx.academicYearId;
    if (yearId) {
      if (!this.filters.studentYear)
        this.filters.studentYear = yearId;
      if (!this.filters.attendanceYear)
        this.filters.attendanceYear = yearId;
      if (!this.filters.invoiceYear)
        this.filters.invoiceYear = yearId;
      if (!this.filters.busRegYear)
        this.filters.busRegYear = yearId;
      if (!this.filters.reportYear)
        this.filters.reportYear = yearId;
    }
    if (ctx.classId) {
      if (!this.filters.studentClass)
        this.filters.studentClass = ctx.classId;
      if (!this.filters.attendanceClass)
        this.filters.attendanceClass = ctx.classId;
    }
    if (ctx.section && !this.filters.studentSection) {
      this.filters.studentSection = ctx.section;
    }
    if (ctx.promotionWizardStep)
      this.promotionWizardStep = ctx.promotionWizardStep;
    if (ctx.promotionRollMode)
      this.promotionRollMode = ctx.promotionRollMode;
    const promotionPatch = {};
    if (ctx.promotionFromYear)
      promotionPatch.fromAcademicYear = ctx.promotionFromYear;
    if (ctx.promotionToYear)
      promotionPatch.toAcademicYear = ctx.promotionToYear;
    if (ctx.promotionFromClass)
      promotionPatch.fromClassRoom = ctx.promotionFromClass;
    if (ctx.promotionToClass)
      promotionPatch.toClassRoom = ctx.promotionToClass;
    if (Object.keys(promotionPatch).length)
      this.promotionForm.patchValue(promotionPatch);
  }
  restoreAllListingStates() {
    Object.keys(LIST_FILTER_KEYS).forEach((key) => this.restoreListState(key));
  }
  restoreListState(key) {
    const stored = this.listingState.load(key);
    if (!stored)
      return;
    if (stored.page)
      this.pages[key] = stored.page;
    if (stored.pageSize)
      this.pageSizes[key] = stored.pageSize;
    if (stored.sortField) {
      this.listSort[key] = { field: stored.sortField, dir: stored.sortDir || "asc" };
    }
    if (stored.filters) {
      for (const [filterKey, value] of Object.entries(stored.filters)) {
        if (filterKey in this.filters) {
          this.filters[filterKey] = value;
        }
      }
    }
  }
  downloadStudentDocument(doc) {
    if (!this.selectedStudentId || !doc._id)
      return;
    this.openProtectedFile(this.api.studentDocumentFileUrl(this.selectedStudentId, doc._id, true), { download: true, fileName: doc.title || "document" });
  }
  replaceStudentDocument(documentId, event) {
    const input = event.target;
    const file = input.files?.item(0);
    if (!this.selectedStudentId || !file || !documentId)
      return;
    const formData = new FormData();
    formData.append("document", file);
    this.api.replaceStudentDocument(this.selectedStudentId, documentId, formData).subscribe({
      next: () => {
        this.message = "Document replaced";
        this.loadStudentDocuments(this.selectedStudentId);
      },
      error: (err) => {
        this.message = err.error?.message || "Replace failed";
      }
    });
  }
  deleteStudentDocument(documentId) {
    return __async(this, null, function* () {
      if (!this.selectedStudentId || !documentId)
        return;
      const confirmed = yield this.confirmAction({
        title: "Remove document",
        message: "Remove this document from the vault?",
        danger: true,
        confirmLabel: "Remove"
      });
      if (!confirmed)
        return;
      this.api.deleteStudentDocument(this.selectedStudentId, documentId).subscribe({
        next: () => {
          this.toast.success("Document removed");
          this.loadStudentDocuments(this.selectedStudentId);
        },
        error: (err) => this.toast.error(extractApiMessage(err, "Delete failed"))
      });
    });
  }
  deleteStudent(id) {
    this.deactivateStudent(id);
  }
  onFeeClassChange() {
  }
  get selectedCollectionInvoice() {
    const id = this.paymentForm.get("invoiceId")?.value;
    return this.invoices.find((invoice) => invoice._id === id);
  }
  onPaymentInvoiceChange() {
    const invoice = this.selectedCollectionInvoice;
    if (!invoice)
      return;
    this.paymentForm.patchValue({
      amount: invoice.balanceAmount || 0,
      discount: invoice.discount || 0,
      fine: invoice.fine || 0,
      otherCharges: invoice.otherCharges || 0
    });
  }
  // ── Generate demands: optional single-student targeting ──
  genStudentQuery = "";
  genStudentResults = [];
  genSearching = false;
  genSelectedStudent = null;
  genSearchTimer = null;
  onGenStudentQuery(term) {
    this.genStudentQuery = term;
    this.genSelectedStudent = null;
    if (this.genSearchTimer)
      clearTimeout(this.genSearchTimer);
    if (term.trim().length < 2) {
      this.genStudentResults = [];
      return;
    }
    this.genSearchTimer = setTimeout(() => this.searchGenStudents(), 300);
  }
  searchGenStudents() {
    this.genSearching = true;
    const params = {
      search: this.genStudentQuery.trim(),
      status: "active",
      page: 1,
      pageSize: 12
    };
    const ay = this.feeDemandForm.get("academicYear")?.value;
    const cls = this.feeDemandForm.get("classRoom")?.value;
    if (ay)
      params["academicYear"] = String(ay);
    if (cls)
      params["classRoom"] = String(cls);
    this.api.students(params).subscribe({
      next: (res) => {
        this.genStudentResults = res.data;
        this.genSearching = false;
      },
      error: () => {
        this.genStudentResults = [];
        this.genSearching = false;
      }
    });
  }
  selectGenStudent(student) {
    this.genSelectedStudent = student;
    this.genStudentResults = [];
    this.genStudentQuery = `${this.studentName(student)} (${student.admissionNumber})`;
    const enrollment = student.enrollments?.find((e) => e.status === "studying") || student.enrollments?.[0];
    if (enrollment) {
      const ayId = typeof enrollment.academicYear === "string" ? enrollment.academicYear : enrollment.academicYear?._id;
      const clsId = typeof enrollment.classRoom === "string" ? enrollment.classRoom : enrollment.classRoom?._id;
      const patch = {};
      if (ayId)
        patch["academicYear"] = ayId;
      if (clsId)
        patch["classRoom"] = clsId;
      if (Object.keys(patch).length) {
        this.feeDemandForm.patchValue(patch);
        this.loadFeeSummary();
      }
    }
  }
  clearGenStudent() {
    this.genSelectedStudent = null;
    this.genStudentResults = [];
    this.genStudentQuery = "";
  }
  generateFeeDemands() {
    if (!this.can("fees", "create")) {
      this.message = "You do not have permission to generate fee demands";
      return;
    }
    const value = this.feeDemandForm.getRawValue();
    const payload = {
      academicYear: value.academicYear,
      cycle: value.cycle,
      month: value.month,
      year: value.year
    };
    if (value.classRoom)
      payload["classRoom"] = value.classRoom;
    if (this.genSelectedStudent)
      payload["student"] = this.genSelectedStudent._id;
    const cycleLabel = this.feeFrequencyOptions.find((opt) => opt.value === value.cycle)?.label || "Monthly";
    const targetLabel = this.genSelectedStudent ? ` for ${this.studentName(this.genSelectedStudent)}` : "";
    this.submit(this.api.generateFeeDemands(payload), `${cycleLabel} fee demands generated`, void 0, (response) => {
      const result = response;
      this.feeGenConfirmation = `Generated ${result?.created ?? 0} ${cycleLabel.toLowerCase()} demand(s)${targetLabel}` + (result?.skipped ? `, skipped ${result.skipped} existing.` : ".");
      this.loadFeeSummary();
      this.loadCollectableInvoices();
    });
  }
  feeGenConfirmation = "";
  savePayment() {
    if (!this.can("fees", "edit")) {
      this.message = "You do not have permission to collect fees";
      return;
    }
    const value = this.paymentForm.getRawValue();
    const studentId = this.collectSelectedStudent?._id;
    this.submit(this.api.addPayment(value.invoiceId || "", {
      amount: value.amount,
      mode: value.mode,
      referenceNumber: value.referenceNumber,
      discount: value.discount,
      fine: value.fine,
      otherCharges: value.otherCharges
    }), "Payment recorded and receipt generated", void 0, () => {
      this.paymentForm.reset({
        invoiceId: "",
        amount: 0,
        mode: PAYMENT_MODES.CASH,
        referenceNumber: "",
        discount: 0,
        fine: 0,
        otherCharges: 0
      });
      this.loadFeeSummary();
      this.loadCollectableInvoices();
      if (studentId)
        this.loadStudentPendingInvoices(studentId);
    });
  }
  openReceiptPdf(invoiceId, paymentId) {
    this.openProtectedPdf(this.api.receiptPdfUrl(invoiceId, paymentId));
  }
  voidFeeReceipt(invoiceId, paymentId, receiptNumber) {
    if (!this.can("fees", "edit"))
      return;
    void this.confirmAction({
      title: "Void receipt",
      message: `Void receipt ${receiptNumber || ""}? This will restore the pending balance for the fee month.`,
      danger: true,
      confirmLabel: "Void receipt"
    }).then((confirmed) => {
      if (!confirmed)
        return;
      this.submit(this.api.voidFeePayment(invoiceId, paymentId), "Receipt voided");
    });
  }
  unlockFeeReceipt(invoiceId, paymentId, receiptNumber) {
    if (!this.can("fees", "unlock"))
      return;
    void this.confirmAction({
      title: "Unlock receipt",
      message: `Unlock finalized receipt ${receiptNumber || ""}? Only use this when a correction is required.`,
      confirmLabel: "Unlock"
    }).then((confirmed) => {
      if (!confirmed)
        return;
      this.submit(this.api.unlockFeePayment(invoiceId, paymentId), "Receipt unlocked");
    });
  }
  feePeriodLabel(month, year) {
    if (!month || !year)
      return "";
    return `${this.getMonthName(month)} ${year}`;
  }
  collectableInvoices() {
    if (this.collectableInvoiceOptions.length)
      return this.collectableInvoiceOptions;
    return this.invoices.filter((invoice) => invoice.status !== "paid" && invoice.status !== "cancelled" && invoice.balanceAmount > 0);
  }
  addBusRouteStop() {
    this.busRouteStops = [
      ...this.busRouteStops,
      { name: "", sequence: this.busRouteStops.length + 1, distance: 0, monthlyFee: 0 }
    ];
  }
  removeBusRouteStop(index) {
    this.busRouteStops = this.busRouteStops.filter((_, i) => i !== index);
  }
  // ── Bus route create/edit modal ──
  showBusRouteForm = false;
  openBusRouteForm() {
    this.resetBusRouteForm();
    this.message = "";
    this.showBusRouteForm = true;
  }
  closeBusRouteForm() {
    this.showBusRouteForm = false;
    this.resetBusRouteForm();
  }
  resetBusRouteForm() {
    this.editingBusRouteId = "";
    this.busRouteStops = [];
    this.busRouteForm.reset({
      capacity: 40,
      feeType: "stop_based",
      fixedMonthlyFee: 0,
      status: "active"
    });
  }
  saveBusRoute() {
    if (!this.can("transport", "create") && !this.can("transport", "edit"))
      return;
    const value = this.busRouteForm.getRawValue();
    const payload = __spreadProps(__spreadValues({}, value), {
      stops: this.busRouteStops.map((stop, index) => __spreadProps(__spreadValues({}, stop), {
        sequence: stop.sequence || index + 1
      }))
    });
    const request = this.editingBusRouteId ? this.api.updateBusRoute(this.editingBusRouteId, payload) : this.api.createBusRoute(payload);
    this.submit(request, this.editingBusRouteId ? "Bus route updated" : "Bus route created", void 0, () => this.closeBusRouteForm());
  }
  editBusRoute(route) {
    this.editingBusRouteId = route._id;
    this.busRouteStops = route.stops?.map((stop) => __spreadValues({}, stop)) || [];
    this.busRouteForm.patchValue({
      routeName: route.routeName,
      routeCode: route.routeCode,
      vehicle: typeof route.vehicle === "string" ? route.vehicle : route.vehicle?._id || "",
      vehicleNumber: route.vehicleNumber,
      driverName: route.driverName,
      driverMobile: route.driverMobile,
      capacity: route.capacity,
      feeType: route.feeType,
      fixedMonthlyFee: route.fixedMonthlyFee,
      status: route.status
    });
    this.message = `Editing ${route.routeCode}`;
    this.showBusRouteForm = true;
  }
  toggleBusRouteStatus(id) {
    if (!this.can("transport", "edit"))
      return;
    this.submit(this.api.toggleBusRouteStatus(id), "Route status updated");
  }
  onRouteVehicleChange(vehicleId) {
    this.busRouteForm.patchValue({ vehicle: vehicleId });
    if (!vehicleId)
      return;
    const vehicle = this.vehicles.find((v) => v._id === vehicleId);
    if (!vehicle)
      return;
    this.busRouteForm.patchValue({
      vehicleNumber: vehicle.vehicleNumber || "",
      driverName: vehicle.driverName || "",
      driverMobile: vehicle.driverMobile || "",
      capacity: vehicle.capacity || this.busRouteForm.get("capacity")?.value || 40
    });
  }
  // ── Vehicles & drivers ──
  showVehicleForm = false;
  editingVehicleId = "";
  editingVehicle = null;
  vehicleDocTypes = [
    { key: "driverPhoto", label: "Driver photo" },
    { key: "driverAadhaar", label: "Driver Aadhaar card" },
    { key: "driverLicensePhoto", label: "Driver license photo" }
  ];
  vehicleDocFiles = {
    driverPhoto: null,
    driverAadhaar: null,
    driverLicensePhoto: null
  };
  onVehicleDocSelected(docType, event) {
    const input = event.target;
    this.vehicleDocFiles[docType] = input.files?.[0] || null;
  }
  vehicleDocSelectedName(docType) {
    return this.vehicleDocFiles[docType]?.name || "";
  }
  editingVehicleHasDoc(docType) {
    return !!this.editingVehicle?.documents?.[docType]?.url;
  }
  vehicleDocImageUrl(vehicleId, docType) {
    return this.api.vehicleDocumentImageUrl(vehicleId, docType);
  }
  openVehicleDoc(vehicleId, docType) {
    window.open(this.api.vehicleDocumentFileUrl(vehicleId, docType), "_blank");
  }
  loadVehicles() {
    if (!this.can("drivers", "view"))
      return;
    this.safeRefresh(this.api.vehicles({ page: 1, pageSize: 200 }).pipe(map((r) => r.data)), []).subscribe((rows) => {
      this.vehicles = rows;
    });
  }
  get activeVehicles() {
    return this.vehicles.filter((v) => v.status === "active");
  }
  /** Tomorrow as YYYY-MM-DD — expiry date inputs must not allow today or past. */
  get minExpiryDate() {
    const tomorrow = /* @__PURE__ */ new Date();
    tomorrow.setHours(0, 0, 0, 0);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }
  openVehicleForm() {
    this.resetVehicleForm();
    this.message = "";
    this.showVehicleForm = true;
  }
  closeVehicleForm() {
    this.showVehicleForm = false;
    this.resetVehicleForm();
  }
  resetVehicleForm() {
    this.editingVehicleId = "";
    this.editingVehicle = null;
    this.vehicleDocFiles = { driverPhoto: null, driverAadhaar: null, driverLicensePhoto: null };
    this.vehicleForm.reset({
      type: "bus",
      capacity: 40,
      driverSalary: 0,
      status: "active"
    });
  }
  saveVehicle() {
    if (!this.can("drivers", "create") && !this.can("drivers", "edit"))
      return;
    if (this.vehicleForm.invalid) {
      this.vehicleForm.markAllAsTouched();
      return;
    }
    const missing = this.vehicleDocTypes.filter((doc) => !this.vehicleDocFiles[doc.key] && !this.editingVehicleHasDoc(doc.key));
    if (missing.length) {
      this.toast.error(`${missing.map((d) => d.label).join(", ")} ${missing.length > 1 ? "are" : "is"} required`);
      return;
    }
    const value = this.vehicleForm.getRawValue();
    const expiryFields = ["registrationExpiry", "insuranceExpiry", "pollutionExpiry", "fitnessExpiry", "licenseExpiry"];
    const minExpiry = this.minExpiryDate;
    const invalidExpiry = expiryFields.find((field) => {
      const raw = value[field];
      return raw && String(raw) < minExpiry;
    });
    if (invalidExpiry) {
      this.toast.error("Expiry dates must be a future date (today or past dates are not allowed)");
      return;
    }
    const formData = new FormData();
    Object.entries(value).forEach(([field, fieldValue]) => {
      if (fieldValue !== null && fieldValue !== void 0)
        formData.append(field, String(fieldValue));
    });
    this.vehicleDocTypes.forEach((doc) => {
      const file = this.vehicleDocFiles[doc.key];
      if (file)
        formData.append(doc.key, file);
    });
    const request = this.editingVehicleId ? this.api.updateVehicle(this.editingVehicleId, formData) : this.api.createVehicle(formData);
    this.submit(request, this.editingVehicleId ? "Vehicle updated" : "Vehicle registered", void 0, () => {
      this.closeVehicleForm();
      this.loadVehicles();
      if (this.can("transport", "view"))
        this.loadListing("busRoutes");
    });
  }
  editVehicle(vehicle) {
    this.editingVehicleId = vehicle._id;
    this.editingVehicle = vehicle;
    this.vehicleDocFiles = { driverPhoto: null, driverAadhaar: null, driverLicensePhoto: null };
    const dateOnly = (value) => value ? String(value).slice(0, 10) : "";
    this.vehicleForm.reset({
      vehicleNumber: vehicle.vehicleNumber || "",
      model: vehicle.model || "",
      type: vehicle.type || "bus",
      capacity: vehicle.capacity || 40,
      registrationExpiry: dateOnly(vehicle.registrationExpiry),
      insuranceExpiry: dateOnly(vehicle.insuranceExpiry),
      pollutionExpiry: dateOnly(vehicle.pollutionExpiry),
      fitnessExpiry: dateOnly(vehicle.fitnessExpiry),
      driverName: vehicle.driverName || "",
      driverMobile: vehicle.driverMobile || "",
      driverAddress: vehicle.driverAddress || "",
      licenseNumber: vehicle.licenseNumber || "",
      licenseExpiry: dateOnly(vehicle.licenseExpiry),
      driverSalary: vehicle.driverSalary || 0,
      joiningDate: dateOnly(vehicle.joiningDate),
      notes: vehicle.notes || "",
      status: vehicle.status || "active"
    });
    this.message = `Editing ${vehicle.vehicleNumber}`;
    this.showVehicleForm = true;
  }
  toggleVehicleStatus(id) {
    if (!this.can("drivers", "edit"))
      return;
    this.submit(this.api.toggleVehicleStatus(id), "Vehicle status updated", void 0, () => this.loadVehicles());
  }
  deleteVehicle(vehicle) {
    return __async(this, null, function* () {
      if (!this.can("drivers", "deactivate"))
        return;
      const ok = yield this.confirmAction({
        message: `Remove vehicle ${vehicle.vehicleNumber}? It will no longer be selectable for routes.`,
        title: "Remove vehicle",
        danger: true,
        confirmLabel: "Remove"
      });
      if (!ok)
        return;
      this.submit(this.api.deleteVehicle(vehicle._id), "Vehicle removed", void 0, () => this.loadVehicles());
    });
  }
  vehicleExpiryStatus(date) {
    if (!date)
      return "none";
    const target = new Date(date).getTime();
    if (Number.isNaN(target))
      return "none";
    const now = Date.now();
    const days = Math.floor((target - now) / (1e3 * 60 * 60 * 24));
    if (days < 0)
      return "expired";
    if (days <= 30)
      return "soon";
    return "ok";
  }
  vehicleHasExpiryAlert(vehicle) {
    return [vehicle.registrationExpiry, vehicle.insuranceExpiry, vehicle.pollutionExpiry, vehicle.fitnessExpiry, vehicle.licenseExpiry].some((date) => {
      const status = this.vehicleExpiryStatus(date);
      return status === "expired" || status === "soon";
    });
  }
  // ── View vehicle & driver details ──
  viewingVehicle = null;
  openVehicleView(vehicle) {
    this.viewingVehicle = vehicle;
  }
  closeVehicleView() {
    this.viewingVehicle = null;
  }
  vehicleHasDoc(vehicle, docType) {
    return !!vehicle?.documents?.[docType]?.url;
  }
  // ── Driver salary tracking ──
  driverSalaryRegister = null;
  driverSalaryMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
  driverSalaryYear = (/* @__PURE__ */ new Date()).getFullYear();
  showDriverSalaryForm = false;
  driverSalaryTarget = null;
  loadDriverSalaries() {
    if (!this.can("drivers", "view"))
      return;
    this.api.driverSalaryRegister(this.driverSalaryMonth, this.driverSalaryYear).subscribe({
      next: (register) => this.driverSalaryRegister = register,
      error: () => this.driverSalaryRegister = null
    });
  }
  openDriverSalaryForm(row) {
    if (!this.can("drivers", "edit"))
      return;
    this.driverSalaryTarget = row;
    this.driverSalaryForm.reset({
      amount: row.salaryAmount || 0,
      mode: "cash",
      referenceNumber: "",
      paidOn: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      notes: ""
    });
    this.showDriverSalaryForm = true;
  }
  closeDriverSalaryForm() {
    this.showDriverSalaryForm = false;
    this.driverSalaryTarget = null;
  }
  saveDriverSalary() {
    if (!this.driverSalaryTarget || this.driverSalaryForm.invalid) {
      this.driverSalaryForm.markAllAsTouched();
      return;
    }
    const value = this.driverSalaryForm.getRawValue();
    const payload = __spreadValues({
      vehicle: this.driverSalaryTarget.vehicle,
      month: this.driverSalaryMonth,
      year: this.driverSalaryYear
    }, value);
    this.submit(this.api.payDriverSalary(payload), "Salary payment recorded", void 0, () => {
      this.closeDriverSalaryForm();
      this.loadDriverSalaries();
    });
  }
  revertDriverSalary(row) {
    return __async(this, null, function* () {
      if (!this.can("drivers", "edit") || !row.payment?._id)
        return;
      const ok = yield this.confirmAction({
        message: `Revert the recorded salary for ${row.driverName || row.vehicleNumber} (${this.driverSalaryMonth}/${this.driverSalaryYear})?`,
        title: "Revert salary payment",
        danger: true,
        confirmLabel: "Revert"
      });
      if (!ok)
        return;
      this.submit(this.api.revertDriverSalary(row.payment._id), "Salary payment reverted", void 0, () => this.loadDriverSalaries());
    });
  }
  get driverSalaryMonthOptions() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
  get driverSalaryYearOptions() {
    const current = (/* @__PURE__ */ new Date()).getFullYear();
    return [current + 1, current, current - 1, current - 2];
  }
  // ── Bus registration create/edit modal ──
  showBusRegForm = false;
  openBusRegForm() {
    this.resetBusRegistrationForm();
    this.message = "";
    this.showBusRegForm = true;
  }
  closeBusRegForm() {
    this.showBusRegForm = false;
    this.resetBusRegistrationForm();
  }
  resetBusRegistrationForm() {
    this.editingBusRegistrationId = "";
    this.busRegistrationForm.reset({
      academicYear: this.activeAcademicYear?._id || "",
      serviceStartDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      busService: true,
      status: "active",
      monthlyFee: 0
    });
  }
  activeBusRoutes() {
    return this.busRoutes.filter((route) => route.status === "active");
  }
  selectedBusRouteStops() {
    const routeId = this.busRegistrationForm.get("route")?.value;
    const route = this.busRoutes.find((item) => item._id === routeId);
    return route?.stops || [];
  }
  onBusRegRouteChange() {
    this.busRegistrationForm.patchValue({ stopSequence: "", monthlyFee: 0 });
  }
  onBusRegStopChange() {
    const routeId = this.busRegistrationForm.get("route")?.value;
    const sequence = Number(this.busRegistrationForm.get("stopSequence")?.value);
    const route = this.busRoutes.find((item) => item._id === routeId);
    if (!route)
      return;
    const stop = route.stops.find((item) => item.sequence === sequence);
    const fee = route.feeType === "fixed" ? route.fixedMonthlyFee : stop?.monthlyFee || 0;
    this.busRegistrationForm.patchValue({ monthlyFee: fee });
  }
  onBusRegClassChange() {
    this.busRegistrationForm.patchValue({ student: "" });
  }
  filteredActiveStudentsForBus() {
    const yearId = this.busRegistrationForm.get("academicYear")?.value || this.filters.busRegYear;
    const classId = this.busRegistrationForm.get("classRoom")?.value;
    return this.students.filter((student) => {
      if (student.status !== "active")
        return false;
      const enrollment = student.enrollments?.find((item) => (typeof item.academicYear === "string" ? item.academicYear : item.academicYear?._id) === yearId && item.status === "studying");
      if (!enrollment)
        return false;
      if (!classId)
        return true;
      const roomId = typeof enrollment.classRoom === "string" ? enrollment.classRoom : enrollment.classRoom?._id;
      return roomId === classId;
    });
  }
  saveBusRegistration() {
    if (!this.can("transport", "create") && !this.can("transport", "edit"))
      return;
    const value = this.busRegistrationForm.getRawValue();
    if (this.isEndBeforeStart(value.serviceStartDate, value.serviceEndDate)) {
      this.toast.error("Service end date cannot be earlier than the start date.");
      return;
    }
    const route = this.busRoutes.find((item) => item._id === value.route);
    const stop = route?.stops.find((item) => item.sequence === Number(value.stopSequence));
    const payload = {
      student: value.student,
      academicYear: value.academicYear,
      route: value.route,
      stopName: stop?.name,
      stopSequence: Number(value.stopSequence),
      monthlyFee: value.monthlyFee,
      busService: value.busService,
      serviceStartDate: value.serviceStartDate,
      serviceEndDate: value.serviceEndDate || void 0,
      status: value.status
    };
    const request = this.editingBusRegistrationId ? this.api.updateBusRegistration(this.editingBusRegistrationId, payload) : this.api.createBusRegistration(payload);
    this.submit(request, this.editingBusRegistrationId ? "Bus registration updated" : "Student registered for bus service", void 0, () => this.closeBusRegForm());
  }
  editBusRegistration(reg) {
    this.editingBusRegistrationId = reg._id;
    this.showBusRegForm = true;
    const studentId = typeof reg.student === "string" ? reg.student : reg.student?._id;
    const yearId = typeof reg.academicYear === "string" ? reg.academicYear : reg.academicYear?._id;
    const routeId = typeof reg.route === "string" ? reg.route : reg.route?._id;
    this.busRegistrationForm.patchValue({
      academicYear: yearId,
      student: studentId,
      route: routeId,
      stopSequence: String(reg.stopSequence),
      monthlyFee: reg.monthlyFee,
      serviceStartDate: reg.serviceStartDate ? new Date(reg.serviceStartDate).toISOString().slice(0, 10) : "",
      serviceEndDate: reg.serviceEndDate ? new Date(reg.serviceEndDate).toISOString().slice(0, 10) : "",
      busService: reg.busService,
      status: reg.status
    });
  }
  deactivateBusRegistration(id) {
    if (!this.can("transport", "edit"))
      return;
    void this.confirmAction({
      title: "Deactivate bus service",
      message: "Deactivate this bus registration? Bus fee will be removed from open fee demands automatically.",
      danger: true,
      confirmLabel: "Deactivate"
    }).then((confirmed) => {
      if (!confirmed)
        return;
      this.submit(this.api.deactivateBusRegistration(id), "Bus service deactivated");
    });
  }
  busRouteLabel(route) {
    if (!route)
      return "\u2014";
    if (typeof route === "string") {
      const found = this.busRoutes.find((item) => item._id === route);
      return found ? `${found.routeCode} \u2014 ${found.routeName}` : route;
    }
    return `${route.routeCode} \u2014 ${route.routeName}`;
  }
  studentAdmission(student) {
    if (!student || typeof student === "string")
      return "";
    return student.admissionNumber || "";
  }
  loadBusReport() {
    if (!this.can("transport", "view"))
      return;
    const params = {};
    if (this.filters.busReportYear)
      params["academicYear"] = this.filters.busReportYear;
    this.api.busReport(this.transportReportType, params).subscribe({
      next: (response) => {
        this.busReportRows = response.rows || [];
      },
      error: () => {
        this.busReportRows = [];
      }
    });
  }
  exportBusReportCsv() {
    const rows = this.busReportRows;
    if (this.transportReportType === "fee-collection") {
      exportRowsToCsv(`bus-fee-collection-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`, ["Student", "Month", "Bus Fee", "Paid", "Receipt"], rows.map((row) => [
        row.studentName || "",
        row.feeMonth || "",
        String(row.busFee || 0),
        String(row.paidAmount || 0),
        row.receiptNumber || ""
      ]));
      return;
    }
    exportRowsToCsv(`bus-report-${this.transportReportType}.csv`, ["Student", "Class", "Route", "Stop", "Fee", "Status"], rows.map((row) => [
      row.studentName || "",
      row.className || "",
      row.routeName || "",
      row.stopName || "",
      String(row.monthlyFee || 0),
      row.busService && row.status === "active" ? "active" : "inactive"
    ]));
  }
  exportBusReportPdf() {
    const rows = this.busReportRows;
    if (this.transportReportType === "fee-collection") {
      exportRowsToPdf("Bus Fee Collection", ["Student", "Month", "Bus Fee", "Paid", "Receipt"], rows.map((row) => [
        row.studentName || "",
        row.feeMonth || "",
        String(row.busFee || 0),
        String(row.paidAmount || 0),
        row.receiptNumber || "\u2014"
      ]));
      return;
    }
    exportRowsToPdf(`Bus Report \u2014 ${this.transportReportType}`, ["Student", "Class", "Route", "Stop", "Fee", "Status"], rows.map((row) => [
      row.studentName || "",
      row.className || "",
      row.routeName || "",
      row.stopName || "",
      String(row.monthlyFee || 0),
      row.busService && row.status === "active" ? "active" : "inactive"
    ]));
  }
  openBusReportServerPdf() {
    const params = {};
    if (this.filters.busReportYear)
      params["academicYear"] = this.filters.busReportYear;
    this.openProtectedPdf(this.api.busReportPdfUrl(this.transportReportType, params));
  }
  savePayroll() {
    const request = this.editingPayrollId ? this.api.updatePayroll(this.editingPayrollId, this.payrollForm.getRawValue()) : this.api.createPayroll(this.payrollForm.getRawValue());
    this.submit(request, this.editingPayrollId ? "Payroll updated" : "Payroll record created", this.payrollForm);
    this.editingPayrollId = "";
  }
  editPayroll(payroll) {
    this.editingPayrollId = payroll._id;
    this.payrollForm.patchValue({
      teacher: typeof payroll.teacher === "string" ? payroll.teacher : payroll.teacher?._id || "",
      month: payroll.month,
      year: payroll.year,
      basicSalary: payroll.basicSalary,
      allowances: payroll.allowances,
      deductions: payroll.deductions
    });
    this.message = `Editing payroll for ${this.payrollTeacherName(payroll.teacher)}`;
  }
  deletePayroll(id) {
    this.submit(this.api.deletePayroll(id), "Payroll deleted");
  }
  markPayrollPaid(id) {
    this.api.markPayrollPaid(id).subscribe({
      next: () => {
        this.message = "Payroll marked as paid";
        this.refresh();
      },
      error: (err) => {
        this.message = err.error?.message || "Could not mark payroll as paid";
      }
    });
  }
  viewRecord(label) {
    this.message = label;
  }
  viewingInvoice = null;
  openInvoiceDetail(invoice) {
    this.viewingInvoice = invoice;
  }
  closeInvoiceDetail() {
    this.viewingInvoice = null;
  }
  // ── UPI / QR online payment (portal users) ──
  payingInvoice = null;
  openUpiPayment(invoice) {
    this.payingInvoice = invoice;
  }
  closeUpiPayment() {
    this.payingInvoice = null;
  }
  get upiPayeeName() {
    return environment.upi?.payeeName || "School";
  }
  get upiVpa() {
    return environment.upi?.vpa || "";
  }
  /** Builds a standard UPI deep link (upi://pay) for the given invoice balance. */
  upiPaymentLink(invoice) {
    if (!invoice)
      return "";
    const amount = Math.max(0, Number(invoice.balanceAmount) || 0).toFixed(2);
    const note = `Fee ${invoice.invoiceNumber || ""}`.trim();
    const params = new URLSearchParams({
      pa: this.upiVpa,
      pn: this.upiPayeeName,
      am: amount,
      cu: "INR",
      tn: note
    });
    return `upi://pay?${params.toString()}`;
  }
  /** QR image URL that encodes the UPI deep link so it can be scanned by any UPI app. */
  upiQrUrl(invoice) {
    const link = this.upiPaymentLink(invoice);
    if (!link)
      return "";
    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(link)}`;
  }
  openInvoicePdf(invoiceId) {
    this.openProtectedPdf(this.api.invoicePdfUrl(invoiceId));
  }
  openPayrollPdf(payrollId) {
    this.openProtectedPdf(this.api.payrollPdfUrl(payrollId));
  }
  toggleParentChild(studentId) {
    if (this.parentLinkedStudentIds.has(studentId)) {
      this.parentLinkedStudentIds.delete(studentId);
    } else {
      this.parentLinkedStudentIds.add(studentId);
    }
  }
  saveUser() {
    if (!this.can("users", "create")) {
      this.message = "You do not have permission to create user accounts";
      return;
    }
    const payload = __spreadValues({}, this.userForm.getRawValue());
    if (payload["useTemporaryPassword"]) {
      delete payload["password"];
    }
    if (payload["role"] === "parent" && this.parentLinkedStudentIds.size) {
      payload["linkedStudents"] = [...this.parentLinkedStudentIds];
      if (!payload["linkedStudent"])
        payload["linkedStudent"] = [...this.parentLinkedStudentIds][0];
    }
    this.api.createUser(payload).subscribe({
      next: (response) => {
        const result = response;
        if (result["temporaryPassword"]) {
          this.toast.success(`Temporary password: ${result["temporaryPassword"]}`);
        } else {
          this.toast.success("User account created");
        }
        this.userForm.reset({ role: "teacher", useTemporaryPassword: false });
        this.parentLinkedStudentIds.clear();
        this.refresh();
      },
      error: (err) => this.toast.error(extractApiMessage(err, "Could not create user"))
    });
  }
  deactivateUserAccount(id) {
    if (!this.can("users", "deactivate"))
      return;
    void this.confirmAction({
      title: "Deactivate user",
      message: "Deactivate this user account? The user will no longer be able to sign in.",
      danger: true,
      confirmLabel: "Deactivate"
    }).then((confirmed) => {
      if (!confirmed)
        return;
      this.submit(this.api.deactivateUser(id), "User account deactivated");
    });
  }
  deleteUserAccount(id) {
    return __async(this, null, function* () {
      if (!this.isSuperAdmin) {
        this.toast.warning("Only Super Admin can permanently delete users");
        return;
      }
      const confirmed = yield this.confirmAction({
        title: "Delete user account",
        message: "Permanently delete this user account? This cannot be undone.",
        danger: true,
        confirmLabel: "Delete permanently"
      });
      if (!confirmed)
        return;
      this.api.deleteUser(id).subscribe({
        next: () => {
          this.toast.success("User permanently deleted");
          this.refresh();
        },
        error: (err) => this.toast.error(extractApiMessage(err, "Delete failed"))
      });
    });
  }
  roleLabelFor(role) {
    const labels = {
      super_admin: "Super Admin",
      admin: "Admin",
      principal: "Principal",
      teacher: "Teacher",
      reception: "Reception",
      receptionist: "Receptionist",
      accountant: "Accountant",
      transport_manager: "Transport Manager",
      parent: "Parent",
      student: "Student"
    };
    return labels[role] || this.roles.find((item) => item.slug === role)?.name || role;
  }
  selectRoleForEdit(slug) {
    this.selectedRoleSlug = slug;
    const role = this.roles.find((r) => r.slug === slug);
    this.editablePermissions = JSON.parse(JSON.stringify(role?.permissions || {}));
  }
  toggleRolePermission(module, action) {
    if (!this.isSuperAdmin)
      return;
    if (!this.editablePermissions[module])
      this.editablePermissions[module] = {};
    this.editablePermissions[module][action] = !this.editablePermissions[module][action];
  }
  saveRolePermissions() {
    if (!this.isSuperAdmin || !this.selectedRoleSlug)
      return;
    this.api.updateRolePermissions(this.selectedRoleSlug, this.editablePermissions).subscribe({
      next: () => {
        this.message = "Role permissions updated";
        this.api.me().subscribe({
          next: (user) => {
            this.currentUser = user;
            this.permissionService.setPermissions(user.permissions);
            localStorage.setItem(APP_CONSTANTS.LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
          }
        });
        this.refresh();
      },
      error: (err) => {
        this.message = err.error?.message || "Permission update failed";
      }
    });
  }
  createRole() {
    if (!this.isSuperAdmin)
      return;
    const value = this.roleForm.getRawValue();
    this.api.createRole(value).subscribe({
      next: () => {
        this.message = "Role created";
        this.roleForm.reset();
        this.refresh();
      },
      error: (err) => {
        this.message = err.error?.message || "Role creation failed";
      }
    });
  }
  deleteRole(slug) {
    return __async(this, null, function* () {
      if (!this.isSuperAdmin)
        return;
      if (this.isSystemRole(slug)) {
        this.toast.warning("System roles cannot be deleted");
        return;
      }
      const confirmed = yield this.confirmAction({
        title: "Delete role",
        message: `Delete role ${slug}?`,
        danger: true,
        confirmLabel: "Delete role"
      });
      if (!confirmed)
        return;
      this.api.deleteRole(slug).subscribe({
        next: () => {
          this.toast.success("Role deleted");
          this.selectedRoleSlug = "";
          this.refresh();
        },
        error: (err) => this.toast.error(extractApiMessage(err, "Role delete failed"))
      });
    });
  }
  isSystemRole(slug) {
    return !!this.roles.find((r) => r.slug === slug)?.isSystem;
  }
  saveAttendance() {
    this.saveAttendanceRegisterDraft();
  }
  loadAttendanceRegister() {
    if (!this.can("attendance", "view"))
      return;
    const value = this.attendanceForm.getRawValue();
    if (!value.academicYear || !value.classRoom || !value.date)
      return;
    if (value.date > (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)) {
      this.toast.error("Attendance cannot be entered for future dates");
      return;
    }
    this.api.attendanceRegister({
      academicYear: value.academicYear,
      classRoom: value.classRoom,
      date: value.date
    }).subscribe({
      next: (sheet) => {
        this.attendanceRegisterWorkflow = sheet.register.workflowStatus || "draft";
        this.attendanceRegisterSummary = sheet.summary;
        this.attendanceRegisterHoliday = sheet.holiday || null;
        this.attendanceRegisterSunday = !!sheet.isSunday;
        this.attendanceRegisterRows = sheet.rows.map((row) => ({
          studentId: row.student._id,
          studentName: this.studentName(row.student),
          admissionNumber: row.student.admissionNumber,
          status: row.status,
          remarks: row.remarks || ""
        }));
      },
      error: (err) => this.toast.error(extractApiMessage(err, "Could not load attendance register"))
    });
  }
  setAttendanceRegisterRowStatus(studentId, status) {
    const row = this.attendanceRegisterRows.find((item) => item.studentId === studentId);
    if (row)
      row.status = status;
  }
  markAllAttendancePresent() {
    const defaultStatus = this.attendanceRegisterHoliday ? ATTENDANCE_STATUS.HOLIDAY : ATTENDANCE_STATUS.PRESENT;
    this.attendanceRegisterRows = this.attendanceRegisterRows.map((row) => __spreadProps(__spreadValues({}, row), { status: defaultStatus }));
  }
  get attendanceRegisterEditable() {
    return this.attendanceRegisterWorkflow === "draft";
  }
  attendanceRegisterPayload() {
    const value = this.attendanceForm.getRawValue();
    if (!value.academicYear || !value.classRoom || !value.date)
      return null;
    return {
      academicYear: value.academicYear,
      classRoom: value.classRoom,
      date: value.date,
      records: this.attendanceRegisterRows.map((row) => ({
        student: row.studentId,
        status: row.status,
        remarks: row.remarks
      }))
    };
  }
  saveAttendanceRegisterDraft() {
    if (!this.can("attendance", "create"))
      return;
    const payload = this.attendanceRegisterPayload();
    if (!payload)
      return;
    if (!this.attendanceRegisterEditable) {
      this.toast.error("Attendance can only be edited while in draft status");
      return;
    }
    this.submit(this.api.saveAttendanceRegister(payload), "Attendance draft saved");
  }
  submitAttendanceRegister() {
    if (!this.can("attendance", "edit"))
      return;
    const payload = this.attendanceRegisterPayload();
    if (!payload)
      return;
    void this.confirmAction({
      title: "Submit attendance",
      message: "Submit attendance for review? You will not be able to edit it afterwards unless an administrator unlocks it.",
      confirmLabel: "Submit"
    }).then((confirmed) => {
      if (!confirmed)
        return;
      this.api.saveAttendanceRegister(payload).subscribe({
        next: () => {
          this.api.submitAttendanceRegister({
            academicYear: payload["academicYear"],
            classRoom: payload["classRoom"],
            date: payload["date"]
          }).subscribe({
            next: () => {
              this.toast.success("Attendance submitted");
              this.loadAttendanceRegister();
              this.refresh();
            },
            error: (err) => this.toast.error(extractApiMessage(err, "Submit failed"))
          });
        },
        error: (err) => this.toast.error(extractApiMessage(err, "Save failed"))
      });
    });
  }
  lockAttendanceRegister() {
    if (!this.isAdmin)
      return;
    const payload = this.attendanceRegisterPayload();
    if (!payload)
      return;
    this.submit(this.api.lockAttendanceRegister({
      academicYear: payload["academicYear"],
      classRoom: payload["classRoom"],
      date: payload["date"]
    }), "Attendance locked");
  }
  unlockAttendanceRegister() {
    if (!this.can("attendance", "unlock"))
      return;
    const payload = this.attendanceRegisterPayload();
    if (!payload)
      return;
    void this.confirmAction({
      title: "Unlock attendance",
      message: "Unlock this attendance register for editing?",
      confirmLabel: "Unlock"
    }).then((confirmed) => {
      if (!confirmed)
        return;
      this.submit(this.api.unlockAttendanceRegister({
        academicYear: payload["academicYear"],
        classRoom: payload["classRoom"],
        date: payload["date"]
      }), "Attendance unlocked");
    });
  }
  loadAttendanceReport() {
    if (!this.can("attendance", "view"))
      return;
    const params = {};
    if (this.filters.attendanceYear)
      params["academicYear"] = this.filters.attendanceYear;
    if (this.filters.attendanceClass)
      params["classRoom"] = this.filters.attendanceClass;
    if (this.attendanceReportType === "daily" && this.attendanceForm.get("date")?.value) {
      params["date"] = this.attendanceForm.get("date")?.value || "";
    }
    if (this.attendanceReportType === "monthly") {
      params["month"] = this.filters.attendanceReportMonth;
      params["year"] = this.filters.attendanceReportYear;
    }
    this.api.attendanceReport(this.attendanceReportType, params).subscribe({
      next: (response) => {
        this.attendanceReportRows = response.rows || [];
      },
      error: () => {
        this.attendanceReportRows = [];
      }
    });
  }
  exportAttendanceReportCsv() {
    const rows = this.attendanceReportRows;
    if (this.attendanceReportType === "daily") {
      exportRowsToCsv(`attendance-daily.csv`, ["Date", "Student", "Class", "Status"], rows.map((row) => [
        row.date ? new Date(row.date).toLocaleDateString() : "",
        row.studentName || "",
        row.className || "",
        row.status || ""
      ]));
      return;
    }
    if (this.attendanceReportType === "class-summary") {
      exportRowsToCsv(`attendance-class-summary.csv`, ["Class", "Students", "Present", "Absent", "Leave", "%"], rows.map((row) => [
        row.className || "",
        String(row.studentCount || 0),
        String(row.present || 0),
        String(row.absent || 0),
        String(row.leave || 0),
        String(row.percentage || 0)
      ]));
      return;
    }
    exportRowsToCsv(`attendance-report.csv`, ["Student", "Class", "Month", "Present", "Absent", "Leave", "%"], rows.map((row) => [
      row.studentName || "",
      row.className || "",
      row.month || "",
      String(row.present || 0),
      String(row.absent || 0),
      String(row.leave || 0),
      String(row.percentage || 0)
    ]));
  }
  exportAttendanceReportPdf() {
    const rows = this.attendanceReportRows;
    if (this.attendanceReportType === "daily") {
      exportRowsToPdf("Daily Attendance", ["Date", "Student", "Class", "Status"], rows.map((row) => [
        row.date ? new Date(row.date).toLocaleDateString() : "",
        row.studentName || "",
        row.className || "",
        row.status || ""
      ]));
      return;
    }
    exportRowsToPdf(`Attendance Report`, ["Student", "Class", "Present", "Absent", "Leave", "%"], rows.map((row) => [
      row.studentName || row.className || "",
      row.className || "",
      String(row.present || 0),
      String(row.absent || 0),
      String(row.leave || 0),
      String(row.percentage || 0)
    ]));
  }
  openAttendanceReportServerPdf() {
    const params = {};
    if (this.filters.attendanceYear)
      params["academicYear"] = this.filters.attendanceYear;
    if (this.filters.attendanceClass)
      params["classRoom"] = this.filters.attendanceClass;
    if (this.attendanceReportType === "monthly") {
      params["month"] = this.filters.attendanceReportMonth;
      params["year"] = this.filters.attendanceReportYear;
    }
    this.openProtectedPdf(this.api.attendanceReportPdfUrl(this.attendanceReportType, params));
  }
  reportColumnMap = {
    students: {
      register: [
        { key: "admissionNumber", label: "Adm No" },
        { key: "studentName", label: "Name" },
        { key: "className", label: "Class" },
        { key: "section", label: "Section" },
        { key: "status", label: "Status" },
        { key: "admissionDate", label: "Admission Date" }
      ],
      "admission-register": [
        { key: "admissionNumber", label: "Adm No" },
        { key: "studentName", label: "Name" },
        { key: "classSection", label: "Class" },
        { key: "admissionDate", label: "Admission Date" },
        { key: "status", label: "Status" }
      ],
      "class-wise": [
        { key: "className", label: "Class" },
        { key: "totalStudents", label: "Total" },
        { key: "activeStudents", label: "Active" },
        { key: "inactiveStudents", label: "Inactive" }
      ],
      "section-wise": [
        { key: "classSection", label: "Class-Section" },
        { key: "totalStudents", label: "Total" },
        { key: "activeStudents", label: "Active" }
      ],
      status: [
        { key: "status", label: "Status" },
        { key: "totalStudents", label: "Total Students" }
      ],
      "class-register": [
        { key: "admissionNumber", label: "Adm No" },
        { key: "studentName", label: "Name" },
        { key: "classSection", label: "Class" },
        { key: "rollNumber", label: "Roll" },
        { key: "status", label: "Status" }
      ],
      "inactive-students": [
        { key: "admissionNumber", label: "Adm No" },
        { key: "studentName", label: "Name" },
        { key: "classSection", label: "Class" },
        { key: "status", label: "Status" },
        { key: "admissionDate", label: "Admission Date" }
      ]
    },
    academic: {
      "student-progress": [
        { key: "admissionNumber", label: "Adm No" },
        { key: "studentName", label: "Name" },
        { key: "attempts", label: "Attempts" },
        { key: "averageScore", label: "Average" },
        { key: "latestScore", label: "Latest Score" },
        { key: "latestSubject", label: "Latest Subject" }
      ],
      "performance-summary": [
        { key: "admissionNumber", label: "Adm No" },
        { key: "studentName", label: "Name" },
        { key: "performanceScore", label: "Score" },
        { key: "performanceCategory", label: "Band" },
        { key: "riskLevel", label: "Risk" },
        { key: "attendancePercentage", label: "Attendance %" },
        { key: "examAverage", label: "Exam Avg" }
      ],
      "top-performers": [
        { key: "admissionNumber", label: "Adm No" },
        { key: "studentName", label: "Name" },
        { key: "performanceScore", label: "Score" },
        { key: "performanceCategory", label: "Band" }
      ],
      "weak-students": [
        { key: "admissionNumber", label: "Adm No" },
        { key: "studentName", label: "Name" },
        { key: "performanceScore", label: "Score" },
        { key: "riskLevel", label: "Risk" },
        { key: "examAverage", label: "Exam Avg" }
      ]
    },
    fees: {
      "monthly-collection": [
        { key: "studentName", label: "Student" },
        { key: "className", label: "Class" },
        { key: "feeMonth", label: "Month" },
        { key: "paidAmount", label: "Paid" },
        { key: "receiptNumber", label: "Receipt" },
        { key: "status", label: "Status" }
      ],
      pending: [
        { key: "studentName", label: "Student" },
        { key: "className", label: "Class" },
        { key: "feeMonth", label: "Month" },
        { key: "dueDate", label: "Due Date" },
        { key: "pendingAmount", label: "Pending" },
        { key: "status", label: "Status" }
      ],
      "student-ledger": [
        { key: "date", label: "Date" },
        { key: "studentName", label: "Student" },
        { key: "entryType", label: "Type" },
        { key: "description", label: "Description" },
        { key: "debit", label: "Debit" },
        { key: "credit", label: "Credit" }
      ],
      "bus-fee-collection": [
        { key: "studentName", label: "Student" },
        { key: "feeMonth", label: "Month" },
        { key: "busFee", label: "Bus Fee" },
        { key: "paidAmount", label: "Paid" },
        { key: "receiptNumber", label: "Receipt" },
        { key: "paymentDate", label: "Date" }
      ],
      outstanding: [
        { key: "studentName", label: "Student" },
        { key: "className", label: "Class" },
        { key: "feeMonth", label: "Month" },
        { key: "pendingAmount", label: "Outstanding" },
        { key: "status", label: "Status" }
      ],
      "discount-report": [
        { key: "studentName", label: "Student" },
        { key: "className", label: "Class" },
        { key: "feeMonth", label: "Month" },
        { key: "discountAmount", label: "Discount" },
        { key: "totalAmount", label: "Total" }
      ],
      "fine-collection": [
        { key: "studentName", label: "Student" },
        { key: "className", label: "Class" },
        { key: "feeMonth", label: "Month" },
        { key: "fineAmount", label: "Fine" },
        { key: "totalAmount", label: "Total" }
      ]
    },
    attendance: {
      daily: [
        { key: "date", label: "Date" },
        { key: "studentName", label: "Student" },
        { key: "className", label: "Class" },
        { key: "status", label: "Status" },
        { key: "remarks", label: "Remarks" }
      ],
      monthly: [
        { key: "studentName", label: "Student" },
        { key: "className", label: "Class" },
        { key: "month", label: "Month" },
        { key: "present", label: "Present" },
        { key: "absent", label: "Absent" },
        { key: "leave", label: "Leave" },
        { key: "percentage", label: "%" }
      ],
      "student-summary": [
        { key: "studentName", label: "Student" },
        { key: "className", label: "Class" },
        { key: "present", label: "Present" },
        { key: "absent", label: "Absent" },
        { key: "leave", label: "Leave" },
        { key: "percentage", label: "%" }
      ],
      "class-summary": [
        { key: "className", label: "Class" },
        { key: "studentCount", label: "Students" },
        { key: "present", label: "Present" },
        { key: "absent", label: "Absent" },
        { key: "leave", label: "Leave" },
        { key: "percentage", label: "%" }
      ],
      yearly: [
        { key: "month", label: "Month" },
        { key: "present", label: "Present" },
        { key: "absent", label: "Absent" },
        { key: "leave", label: "Leave" },
        { key: "percentage", label: "%" }
      ],
      "teacher-wise": [
        { key: "teacherName", label: "Teacher" },
        { key: "employeeCode", label: "Code" },
        { key: "classes", label: "Classes" },
        { key: "present", label: "Present" },
        { key: "absent", label: "Absent" },
        { key: "percentage", label: "%" }
      ]
    },
    payroll: {
      summary: [
        { key: "payrollMonth", label: "Month" },
        { key: "employeeCount", label: "Employees" },
        { key: "paidCount", label: "Paid" },
        { key: "pendingCount", label: "Pending" },
        { key: "totalNet", label: "Net Total" }
      ],
      "salary-summary": [
        { key: "teacherName", label: "Employee" },
        { key: "designation", label: "Designation" },
        { key: "basicSalary", label: "Basic" },
        { key: "allowances", label: "Allowances" },
        { key: "deductions", label: "Deductions" },
        { key: "netSalary", label: "Net" },
        { key: "status", label: "Status" }
      ],
      "payment-status": [
        { key: "teacherName", label: "Employee" },
        { key: "payrollMonth", label: "Month" },
        { key: "netSalary", label: "Net Salary" },
        { key: "status", label: "Status" },
        { key: "paidAt", label: "Paid On" }
      ]
    },
    transport: {
      "route-wise": [
        { key: "studentName", label: "Student" },
        { key: "className", label: "Class" },
        { key: "routeName", label: "Route" },
        { key: "stopName", label: "Stop" },
        { key: "monthlyFee", label: "Fee" },
        { key: "status", label: "Status" }
      ],
      "stop-wise": [
        { key: "studentName", label: "Student" },
        { key: "className", label: "Class" },
        { key: "routeName", label: "Route" },
        { key: "stopName", label: "Stop" },
        { key: "monthlyFee", label: "Fee" },
        { key: "status", label: "Status" }
      ],
      "bus-strength": [
        { key: "routeName", label: "Route" },
        { key: "vehicleNumber", label: "Vehicle" },
        { key: "capacity", label: "Capacity" },
        { key: "activeStudents", label: "Students" },
        { key: "availableSeats", label: "Available" },
        { key: "occupancy", label: "Occupancy %" }
      ],
      "fee-collection": [
        { key: "studentName", label: "Student" },
        { key: "feeMonth", label: "Month" },
        { key: "busFee", label: "Bus Fee" },
        { key: "paidAmount", label: "Paid" },
        { key: "receiptNumber", label: "Receipt" },
        { key: "paymentDate", label: "Date" }
      ]
    },
    promotions: {
      "promotion-report": [
        { key: "admissionNumber", label: "Adm No" },
        { key: "studentName", label: "Name" },
        { key: "fromYear", label: "From Year" },
        { key: "toYear", label: "To Year" },
        { key: "fromClass", label: "From Class" },
        { key: "toClass", label: "To Class" }
      ],
      promoted: [
        { key: "admissionNumber", label: "Adm No" },
        { key: "studentName", label: "Name" },
        { key: "fromYear", label: "From Year" },
        { key: "toYear", label: "To Year" },
        { key: "fromClass", label: "From Class" },
        { key: "toClass", label: "To Class" },
        { key: "rollNumber", label: "Roll No" },
        { key: "monthlyFee", label: "Fee" }
      ],
      detained: [
        { key: "admissionNumber", label: "Adm No" },
        { key: "studentName", label: "Name" },
        { key: "classSection", label: "Class" },
        { key: "rollNumber", label: "Roll No" },
        { key: "status", label: "Status" }
      ],
      "left-school": [
        { key: "admissionNumber", label: "Adm No" },
        { key: "studentName", label: "Name" },
        { key: "status", label: "Status" },
        { key: "admissionDate", label: "Admission Date" }
      ],
      "tc-issued": [
        { key: "admissionNumber", label: "Adm No" },
        { key: "studentName", label: "Name" },
        { key: "status", label: "Status" },
        { key: "admissionDate", label: "Admission Date" }
      ],
      "class-strength-comparison": [
        { key: "classSection", label: "Class" },
        { key: "fromYearCount", label: "From Year" },
        { key: "toYearCount", label: "To Year" },
        { key: "difference", label: "Difference" }
      ]
    },
    operations: {
      "teacher-register": [
        { key: "employeeCode", label: "Code" },
        { key: "teacherName", label: "Name" },
        { key: "phone", label: "Phone" },
        { key: "designation", label: "Designation" },
        { key: "status", label: "Status" }
      ],
      "bus-allocation": [
        { key: "studentName", label: "Student" },
        { key: "className", label: "Class" },
        { key: "routeName", label: "Route" },
        { key: "stopName", label: "Stop" },
        { key: "status", label: "Status" }
      ],
      "route-strength": [
        { key: "routeName", label: "Route" },
        { key: "vehicleNumber", label: "Vehicle" },
        { key: "capacity", label: "Capacity" },
        { key: "activeStudents", label: "Students" },
        { key: "occupancy", label: "Occupancy %" }
      ],
      "inactive-students": [
        { key: "admissionNumber", label: "Adm No" },
        { key: "studentName", label: "Name" },
        { key: "classSection", label: "Class" },
        { key: "status", label: "Status" }
      ],
      "user-activity": [
        { key: "performedAt", label: "When" },
        { key: "module", label: "Module" },
        { key: "action", label: "Action" },
        { key: "description", label: "Description" },
        { key: "performedBy", label: "User" }
      ],
      "audit-summary": [
        { key: "module", label: "Module" },
        { key: "action", label: "Action" },
        { key: "count", label: "Count" }
      ]
    }
  };
  setReportDomain(domain) {
    this.reportDomain = domain;
    const types = this.reportColumnMap[domain];
    this.reportType = Object.keys(types)[0] || "register";
    this.loadReport();
  }
  setReportType(type) {
    this.reportType = type;
    this.loadReport();
  }
  reportColumns() {
    return this.reportColumnMap[this.reportDomain]?.[this.reportType] || [];
  }
  reportCell(row, key) {
    const value = row[key];
    if (value == null || value === "")
      return "\u2014";
    if (key === "status" && typeof value === "string")
      return this.studentStatusLabel(value) || value;
    if (typeof value === "number" && ["paidAmount", "pendingAmount", "totalAmount", "debit", "credit", "busFee", "basicSalary", "allowances", "deductions", "netSalary", "totalNet", "monthlyFee", "paidAmount"].includes(key)) {
      return value.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
    }
    if (value instanceof Date || typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value) && ["date", "admissionDate", "dueDate", "paidAt", "paymentDate"].includes(key)) {
      return new Date(value).toLocaleDateString();
    }
    return String(value);
  }
  buildReportParams() {
    const params = {};
    if (this.filters.reportYear)
      params["academicYear"] = this.filters.reportYear;
    if (this.filters.reportClass)
      params["classRoom"] = this.filters.reportClass;
    if (this.filters.reportSection)
      params["section"] = this.filters.reportSection;
    if (this.filters.reportStatus)
      params["status"] = this.filters.reportStatus;
    if (this.filters.reportAdmissionFrom)
      params["admissionFrom"] = this.filters.reportAdmissionFrom;
    if (this.filters.reportAdmissionTo)
      params["admissionTo"] = this.filters.reportAdmissionTo;
    if (this.filters.reportMonth)
      params["month"] = this.filters.reportMonth;
    if (this.filters.reportYearNum)
      params["year"] = this.filters.reportYearNum;
    if (this.filters.reportDate)
      params["date"] = this.filters.reportDate;
    if (this.filters.reportPaymentStatus)
      params["paymentStatus"] = this.filters.reportPaymentStatus;
    if (this.filters.reportStudent)
      params["student"] = this.filters.reportStudent;
    if (this.filters.reportDepartment)
      params["department"] = this.filters.reportDepartment;
    if (this.filters.reportDesignation)
      params["designation"] = this.filters.reportDesignation;
    if (this.filters.reportPayrollStatus)
      params["payrollStatus"] = this.filters.reportPayrollStatus;
    if (this.filters.reportRoute)
      params["route"] = this.filters.reportRoute;
    if (this.filters.reportStop)
      params["stop"] = this.filters.reportStop;
    if (this.filters.reportBusStatus)
      params["busServiceStatus"] = this.filters.reportBusStatus;
    if (this.filters.reportPerformanceCategory)
      params["performanceCategory"] = this.filters.reportPerformanceCategory;
    if (this.filters.reportTeacher)
      params["teacher"] = this.filters.reportTeacher;
    return params;
  }
  loadReport() {
    if (!this.can("reports", "view"))
      return;
    this.reportLoading = true;
    this.api.report(this.reportDomain, this.reportType, this.buildReportParams()).subscribe({
      next: (response) => {
        this.reportRows = response.rows || [];
        this.reportLoading = false;
      },
      error: () => {
        this.reportRows = [];
        this.reportLoading = false;
      }
    });
  }
  exportReportCsv() {
    const columns = this.reportColumns();
    if (!columns.length || !this.reportRows.length)
      return;
    exportRowsToCsv(`${this.reportDomain}-${this.reportType}.csv`, columns.map((col) => col.label), this.reportRows.map((row) => columns.map((col) => this.reportCell(row, col.key))));
  }
  exportReportPdf() {
    const columns = this.reportColumns();
    if (!columns.length || !this.reportRows.length)
      return;
    exportRowsToPdf(`${this.reportDomain} ${this.reportType}`, columns.map((col) => col.label), this.reportRows.map((row) => columns.map((col) => this.reportCell(row, col.key))));
  }
  printReport() {
    if (!this.can("reports", "print"))
      return;
    this.exportReportPdf();
  }
  openReportServerPdf() {
    this.openProtectedPdf(this.api.reportPdfUrl(this.reportDomain, this.reportType, this.buildReportParams()));
  }
  loadSelfAttendanceStatus() {
    if (!this.isTeacher)
      return;
    this.api.selfAttendanceStatus().subscribe({
      next: (res) => {
        this.selfAttendanceMarked = res.marked;
        this.selfAttendanceStatus = res.status;
      },
      error: () => {
      }
    });
  }
  loadHolidays() {
    if (!this.can("attendance", "view") || this.holidaysLoaded)
      return;
    this.api.holidays().subscribe({
      next: (rows) => {
        this.holidays = rows;
        this.holidaysLoaded = true;
      },
      error: () => {
      }
    });
  }
  markSelfAttendance() {
    this.selfAttendanceLoading = true;
    this.api.selfMarkAttendance("present").subscribe({
      next: () => {
        this.selfAttendanceMarked = true;
        this.selfAttendanceStatus = "present";
        this.selfAttendanceLoading = false;
        this.message = "Your attendance has been marked for today!";
        this.refresh();
      },
      error: (err) => {
        this.selfAttendanceLoading = false;
        this.message = err.error?.message || "Could not mark attendance";
      }
    });
  }
  holidayForm = { date: "", name: "", description: "" };
  saveHoliday() {
    if (!this.holidayForm.date || !this.holidayForm.name)
      return;
    this.api.createHoliday(this.holidayForm).subscribe({
      next: () => {
        this.message = `Holiday "${this.holidayForm.name}" added`;
        this.holidayForm = { date: "", name: "", description: "" };
        this.refresh();
      },
      error: (err) => {
        this.message = err.error?.message || "Could not add holiday";
      }
    });
  }
  deleteHoliday(id) {
    this.api.deleteHoliday(id).subscribe({
      next: () => {
        this.message = "Holiday removed";
        this.refresh();
      },
      error: (err) => {
        this.message = err.error?.message || "Could not remove holiday";
      }
    });
  }
  isHoliday(dateStr) {
    const d = new Date(dateStr);
    d.setHours(0, 0, 0, 0);
    const match2 = this.holidays.find((h) => {
      const hd = new Date(h.date);
      hd.setHours(0, 0, 0, 0);
      return hd.getTime() === d.getTime();
    });
    return match2 ? { is: true, name: match2.name } : { is: false };
  }
  isSunday(dateStr) {
    return new Date(dateStr).getDay() === 0;
  }
  viewStudentExamResult(result) {
    this.viewingExamResult = result;
  }
  closeExamResultView() {
    this.viewingExamResult = null;
  }
  getExamResultForChild(examId) {
    const childId = this.isStudent ? this.currentUser?.student : this.effectiveChildId;
    if (!childId)
      return void 0;
    return this.examResults.find((r) => {
      const eid = typeof r.exam === "string" ? r.exam : r.exam._id;
      const sid = typeof r.student === "string" ? r.student : r.student._id;
      return eid === examId && sid === childId;
    });
  }
  get timetableClassPool() {
    if (this.isAdmin) {
      return this.classes.filter((room) => room.status !== "inactive");
    }
    const map2 = /* @__PURE__ */ new Map();
    for (const row of this.timetable) {
      const cr = row.classRoom;
      if (cr && typeof cr === "object")
        map2.set(cr._id, cr);
    }
    return [...map2.values()];
  }
  get timetableClassNames() {
    const names = [...new Set(this.timetableClassPool.map((room) => room.name))];
    return names.sort((a, b) => a.localeCompare(b, void 0, { numeric: true }));
  }
  timetableSectionsFor(name) {
    return this.timetableClassPool.filter((room) => room.name === name).sort((a, b) => (a.section || "").localeCompare(b.section || ""));
  }
  get timetableSelectedClassRoom() {
    return this.timetableClassPool.find((room) => room._id === this.timetableClassId) || null;
  }
  get timetableSelectedRow() {
    if (!this.timetableClassId)
      return null;
    return this.timetable.find((row) => this.entityRefId(row.classRoom) === this.timetableClassId && row.dayOfWeek === this.timetableSelectedDay) || null;
  }
  get timetableSelectedPeriods() {
    const row = this.timetableSelectedRow;
    if (!row?.periods?.length)
      return [];
    return [...row.periods].sort((a, b) => String(a.startTime).localeCompare(String(b.startTime)));
  }
  timetableDayHasPeriods(day) {
    if (!this.timetableClassId)
      return false;
    const row = this.timetable.find((item) => this.entityRefId(item.classRoom) === this.timetableClassId && item.dayOfWeek === day);
    return !!row?.periods?.length;
  }
  onTimetableClassNameChange(name) {
    this.timetableClassName = name;
    const sections = this.timetableSectionsFor(name);
    this.timetableClassId = sections.length === 1 ? sections[0]._id : "";
  }
  selectTimetableSection(classId) {
    this.timetableClassId = classId;
  }
  selectTimetableDay(day) {
    this.timetableSelectedDay = day;
  }
  ensureTimetableSelection() {
    const pool = this.timetableClassPool;
    if (this.timetableClassId && pool.some((room) => room._id === this.timetableClassId)) {
      const current = pool.find((room) => room._id === this.timetableClassId);
      if (current)
        this.timetableClassName = current.name;
      return;
    }
    if (!this.isAdmin && pool.length) {
      const first2 = pool[0];
      this.timetableClassName = first2.name;
      const sections = this.timetableSectionsFor(first2.name);
      this.timetableClassId = sections.length ? sections[0]._id : first2._id;
    }
  }
  openTimetableForm() {
    if (!this.isAdmin)
      return;
    const cls = this.timetableSelectedClassRoom;
    this.timetableForm.reset({
      classRoom: this.timetableClassId || "",
      academicYear: cls ? this.entityRefId(cls.academicYear) : "",
      dayOfWeek: this.timetableSelectedDay,
      startTime: "09:00",
      endTime: "09:45",
      subject: "",
      teacher: "",
      room: ""
    });
    this.showTimetableForm = true;
  }
  closeTimetableForm() {
    this.showTimetableForm = false;
  }
  saveTimetable() {
    const value = this.timetableForm.getRawValue();
    if (value.startTime && value.endTime && value.endTime <= value.startTime) {
      this.toast.error("End time must be after the start time.");
      return;
    }
    this.submit(this.api.saveTimetable({
      classRoom: value.classRoom,
      academicYear: value.academicYear,
      dayOfWeek: value.dayOfWeek,
      periods: [
        {
          startTime: value.startTime,
          endTime: value.endTime,
          subject: value.subject,
          teacher: value.teacher,
          room: value.room
        }
      ]
    }), "Period added to timetable", void 0, () => {
      if (value.classRoom)
        this.timetableClassId = value.classRoom;
      const cls = this.timetableClassPool.find((room) => room._id === this.timetableClassId);
      if (cls)
        this.timetableClassName = cls.name;
      if (value.dayOfWeek)
        this.timetableSelectedDay = value.dayOfWeek;
      this.showTimetableForm = false;
    });
  }
  deleteTimetablePeriod(row, periodId) {
    if (!this.isAdmin || !row?._id || !periodId)
      return;
    void this.confirmAction({
      title: "Remove period",
      message: "Remove this period from the timetable?",
      danger: true,
      confirmLabel: "Remove"
    }).then((confirmed) => {
      if (!confirmed)
        return;
      this.api.deleteTimetablePeriod(row._id, periodId).subscribe({
        next: () => {
          this.toast.success("Period removed");
          this.refresh();
        },
        error: (error) => this.toast.error(extractApiMessage(error, "Could not remove period"))
      });
    });
  }
  generateExamPaper() {
    this.generatingExam = true;
    this.message = "";
    this.api.generateExam(this.examForm.getRawValue()).subscribe({
      next: (exam) => {
        this.generatingExam = false;
        this.message = `AI exam "${exam.title}" created with ${exam.questions.length} questions`;
        this.examForm.reset({ difficulty: "medium", questionCount: APP_CONSTANTS.DEFAULT_EXAM_QUESTION_COUNT, durationMinutes: APP_CONSTANTS.DEFAULT_EXAM_DURATION });
        this.refresh();
      },
      error: (error) => {
        this.generatingExam = false;
        this.message = error.error?.message || "Could not generate exam";
      }
    });
  }
  onExamPdfFile(event) {
    const input = event.target;
    this.examPdfFile = input.files?.item(0) || null;
  }
  generateExamFromPdf() {
    if (!this.examPdfFile)
      return;
    this.generatingExam = true;
    this.message = "";
    const formData = new FormData();
    formData.append("chapterPdf", this.examPdfFile);
    const values = this.examForm.getRawValue();
    for (const [key, value] of Object.entries(values)) {
      if (value != null && value !== "")
        formData.append(key, String(value));
    }
    this.api.generateExamFromPdf(formData).subscribe({
      next: (exam) => {
        this.generatingExam = false;
        this.message = `AI exam "${exam.title}" created from PDF with ${exam.questions.length} questions`;
        this.examForm.reset({ difficulty: "medium", questionCount: APP_CONSTANTS.DEFAULT_EXAM_QUESTION_COUNT, durationMinutes: APP_CONSTANTS.DEFAULT_EXAM_DURATION });
        this.examPdfFile = null;
        this.refresh();
      },
      error: (error) => {
        this.generatingExam = false;
        this.message = error.error?.message || "Could not generate exam from PDF";
      }
    });
  }
  publishExamPaper(examId) {
    this.submit(this.api.publishExam(examId), "Exam published for students");
  }
  closeExamPaper(examId) {
    this.submit(this.api.closeExam(examId), "Exam closed");
  }
  deleteExamPaper(examId) {
    this.submit(this.api.deleteExam(examId), "Exam deleted");
  }
  viewExamReport(examId) {
    this.api.examClassReport(examId).subscribe({
      next: (report) => {
        this.examReport = report;
        this.message = `Report loaded for ${report.exam.title}`;
      },
      error: (error) => {
        this.message = error.error?.message || "Could not load exam report";
      }
    });
  }
  startExam(examId) {
    this.api.startExamAttempt(examId).subscribe({
      next: ({ exam, submission }) => {
        this.activeExamAttempt = { exam, submission };
        const controls = {};
        exam.questions.forEach((question) => {
          if (question._id)
            controls[`q_${question._id}`] = [""];
        });
        this.examAttemptForm = this.fb.group(controls);
        this.message = `Exam started: ${exam.title}`;
      },
      error: (error) => {
        this.message = error.error?.message || "Could not start exam";
      }
    });
  }
  submitExam() {
    if (!this.activeExamAttempt)
      return;
    const answers = this.activeExamAttempt.exam.questions.filter((q) => q._id).map((q) => ({
      questionId: q._id,
      answer: String(this.examAttemptForm.get(`q_${q._id}`)?.value || "")
    }));
    this.api.submitExamAttempt(this.activeExamAttempt.exam._id, answers).subscribe({
      next: (submission) => {
        this.message = `Exam submitted. Score: ${submission.score}/${submission.maxScore} (${submission.percentage}%) \u2014 Grade ${submission.grade}`;
        this.activeExamAttempt = null;
        this.refresh();
      },
      error: (error) => {
        this.message = error.error?.message || "Could not submit exam";
      }
    });
  }
  examTitle(exam) {
    if (!exam || typeof exam === "string")
      return "";
    return exam.title;
  }
  toggleStudent(studentId, checked) {
    if (checked)
      this.selectedStudentIds.add(studentId);
    else
      this.selectedStudentIds.delete(studentId);
  }
  get selectedStudentCount() {
    return this.selectedStudentIds.size;
  }
  allStudentsSelectedOnPage() {
    const page = this.paged("students", this.sortedStudents);
    return page.length > 0 && page.every((student) => this.selectedStudentIds.has(student._id));
  }
  toggleAllStudentsOnPage(checked) {
    const page = this.paged("students", this.sortedStudents);
    page.forEach((student) => this.toggleStudent(student._id, checked));
  }
  clearStudentSelection() {
    this.selectedStudentIds.clear();
  }
  bulkBusStops() {
    const route = this.busRoutes.find((entry) => entry._id === this.bulkBusRouteTarget);
    return route?.stops || [];
  }
  loadWorkflowNotifications() {
    if (!this.currentUser || !this.can("dashboard", "view"))
      return;
    this.workflowNotificationsLoading = true;
    this.api.workflowNotifications().subscribe({
      next: (response) => {
        this.workflowNotifications = response.items || [];
        this.workflowNotificationsLoading = false;
      },
      error: () => {
        this.workflowNotifications = [];
        this.workflowNotificationsLoading = false;
      }
    });
  }
  get workflowNotificationCount() {
    return this.workflowNotifications.length;
  }
  canViewSensitivePii(module) {
    return this.permissionService.canViewSensitivePii(module, this.currentUser?.role);
  }
  toggleNotificationMenu() {
    this.isNotificationMenuOpen = !this.isNotificationMenuOpen;
    if (this.isNotificationMenuOpen) {
      this.globalSearchOpen = false;
      this.loadWorkflowNotifications();
    }
  }
  closeNotificationMenu() {
    this.isNotificationMenuOpen = false;
  }
  dismissWorkflowNotification(key, event) {
    event?.stopPropagation();
    this.api.dismissWorkflowNotification(key).subscribe({
      next: () => {
        this.workflowNotifications = this.workflowNotifications.filter((entry) => entry.key !== key);
      }
    });
  }
  openWorkflowNotification(notification) {
    this.isNotificationMenuOpen = false;
    const tab = notification.tab;
    if (this.tabs.some((item) => item.key === tab)) {
      this.setTab(tab);
    }
  }
  onGlobalSearchInput() {
    if (this.globalSearchTimer)
      clearTimeout(this.globalSearchTimer);
    const query = this.globalSearchQuery.trim();
    this.globalSearchActiveIndex = -1;
    if (query.length < 2) {
      this.globalSearchResults = [];
      this.globalSearchOpen = false;
      this.globalSearchLoading = false;
      return;
    }
    this.globalSearchOpen = true;
    this.globalSearchLoading = true;
    this.globalSearchTimer = setTimeout(() => {
      this.api.globalSearch(query).subscribe({
        next: (response) => {
          this.globalSearchResults = response.results || [];
          this.globalSearchLoading = false;
          this.globalSearchActiveIndex = this.globalSearchResults.length ? 0 : -1;
        },
        error: () => {
          this.globalSearchResults = [];
          this.globalSearchLoading = false;
          this.globalSearchActiveIndex = -1;
        }
      });
    }, 300);
  }
  openGlobalSearchResult(result) {
    this.globalSearchOpen = false;
    this.globalSearchQuery = "";
    this.globalSearchResults = [];
    const tab = result.tab;
    if (this.tabs.some((item) => item.key === tab)) {
      this.setTab(tab);
    }
    if (result.type === "student") {
      this.openStudentProfile(result.id);
      return;
    }
    if (result.type === "receipt") {
      this.filters.invoiceSearch = result.label;
      this.updateListSearch("invoices", "invoiceSearch", result.label);
      return;
    }
    if (result.type === "teacher") {
      this.filters.teacherSearch = result.subtitle || result.label;
      this.updateListSearch("teachers", "teacherSearch", this.filters.teacherSearch);
      return;
    }
    if (result.type === "payroll") {
      this.filters.payrollSearch = result.subtitle || result.label;
      this.updateListSearch("payroll", "payrollSearch", this.filters.payrollSearch);
      return;
    }
    if (result.type === "route") {
      this.filters.busRouteSearch = result.label;
      this.updateListSearch("busRoutes", "busRouteSearch", result.label);
      return;
    }
    if (result.type === "user") {
      this.filters.userSearch = result.label;
      this.updateListSearch("users", "userSearch", result.label);
    }
  }
  clearGlobalSearch() {
    this.globalSearchQuery = "";
    this.globalSearchResults = [];
    this.globalSearchOpen = false;
    this.globalSearchActiveIndex = -1;
  }
  executeBulkStatusUpdate() {
    return __async(this, null, function* () {
      if (!this.can("students", "edit") || !this.bulkStatusTarget || !this.selectedStudentIds.size)
        return;
      const confirmed = yield this.confirmAction({
        title: "Bulk status update",
        message: `Update status to "${this.bulkStatusTarget}" for ${this.selectedStudentIds.size} selected student(s)?`,
        confirmLabel: "Update"
      });
      if (!confirmed)
        return;
      this.api.workflowBulk("status-update", {
        entity: "students",
        ids: [...this.selectedStudentIds],
        status: this.bulkStatusTarget
      }).subscribe({
        next: () => {
          this.toast.success("Student statuses updated");
          this.clearStudentSelection();
          this.refresh();
        },
        error: (error) => this.toast.error(extractApiMessage(error, "Bulk status update failed"))
      });
    });
  }
  executeBulkClassAssignment() {
    return __async(this, null, function* () {
      const activeYear = this.activeAcademicYear?._id;
      if (!this.can("students", "edit") || !this.bulkClassTarget || !activeYear || !this.selectedStudentIds.size)
        return;
      const confirmed = yield this.confirmAction({
        title: "Bulk class assignment",
        message: `Assign ${this.selectedStudentIds.size} student(s) to the selected class?`,
        confirmLabel: "Assign"
      });
      if (!confirmed)
        return;
      this.api.workflowBulk("student-assignment", {
        studentIds: [...this.selectedStudentIds],
        classRoomId: this.bulkClassTarget,
        academicYearId: activeYear
      }).subscribe({
        next: () => {
          this.toast.success("Students assigned to class");
          this.clearStudentSelection();
          this.refresh();
        },
        error: (error) => this.toast.error(extractApiMessage(error, "Bulk class assignment failed"))
      });
    });
  }
  executeBulkBusAssignment() {
    return __async(this, null, function* () {
      const activeYear = this.activeAcademicYear?._id;
      const route = this.busRoutes.find((entry) => entry._id === this.bulkBusRouteTarget);
      const stop = route?.stops?.find((entry) => String(entry.sequence) === this.bulkBusStopSequence);
      if (!this.can("transport", "edit") || !route || !stop || !activeYear || !this.selectedStudentIds.size)
        return;
      const confirmed = yield this.confirmAction({
        title: "Bulk bus assignment",
        message: `Assign ${this.selectedStudentIds.size} student(s) to ${route.routeName} \xB7 ${stop.name}?`,
        confirmLabel: "Assign"
      });
      if (!confirmed)
        return;
      this.api.workflowBulk("bus-assignment", {
        studentIds: [...this.selectedStudentIds],
        routeId: route._id,
        stopName: stop.name,
        stopSequence: stop.sequence,
        academicYearId: activeYear,
        monthlyFee: stop.monthlyFee
      }).subscribe({
        next: () => {
          this.toast.success("Bus assignments updated");
          this.clearStudentSelection();
          this.refresh();
        },
        error: (error) => this.toast.error(extractApiMessage(error, "Bulk bus assignment failed"))
      });
    });
  }
  executeBulkNotification() {
    return __async(this, null, function* () {
      if (!this.can("students", "edit") || !this.bulkNotificationMessage.trim() || !this.selectedStudentIds.size)
        return;
      const confirmed = yield this.confirmAction({
        title: "Bulk notification",
        message: `Queue notification for ${this.selectedStudentIds.size} selected student(s)?`,
        confirmLabel: "Send"
      });
      if (!confirmed)
        return;
      this.api.workflowBulk("notifications", {
        studentIds: [...this.selectedStudentIds],
        message: this.bulkNotificationMessage.trim(),
        channel: "in_app"
      }).subscribe({
        next: () => {
          this.toast.success("Bulk notification queued");
          this.bulkNotificationMessage = "";
          this.clearStudentSelection();
        },
        error: (error) => this.toast.error(extractApiMessage(error, "Bulk notification failed"))
      });
    });
  }
  unlockPayroll(id) {
    if (!this.can("payroll", "unlock"))
      return;
    this.api.unlockPayroll(id).subscribe({
      next: () => {
        this.message = "Payroll record unlocked";
        this.refresh();
      },
      error: (err) => {
        this.message = err.error?.message || "Could not unlock payroll";
      }
    });
  }
  promotionClassesForYear(yearId) {
    if (!yearId)
      return this.classes;
    return this.classes.filter((room) => {
      const roomYear = typeof room.academicYear === "string" ? room.academicYear : room.academicYear?._id;
      return roomYear === yearId;
    });
  }
  get promotionEligibleSelectedRows() {
    return this.promotionEligibleRows.filter((row) => row.eligible && !this.promotionExcludedIds.has(row.studentId));
  }
  canPromotionStepContinue(step = this.promotionWizardStep) {
    const value = this.promotionForm.getRawValue();
    if (step === 1)
      return !!(value.fromAcademicYear && value.toAcademicYear && value.fromAcademicYear !== value.toAcademicYear);
    if (step === 2)
      return !!value.fromClassRoom;
    if (step === 3)
      return !!value.toClassRoom;
    if (step === 4)
      return this.promotionEligibleSelectedRows.length > 0;
    return true;
  }
  nextPromotionStep() {
    if (!this.canPromotionStepContinue())
      return;
    if (this.promotionWizardStep === 3) {
      this.loadPromotionEligible();
    }
    if (this.promotionWizardStep === 4) {
      this.loadPromotionPreview();
      this.promotionWizardStep = 5;
      return;
    }
    this.promotionWizardStep = Math.min(this.promotionWizardStep + 1, 5);
  }
  prevPromotionStep() {
    this.promotionWizardStep = Math.max(this.promotionWizardStep - 1, 1);
  }
  resetPromotionWizard() {
    this.promotionWizardStep = 1;
    this.promotionEligibleRows = [];
    this.promotionPreview = null;
    this.promotionBatch = null;
    this.promotionExcludedIds.clear();
    this.promotionSelectedIds.clear();
    this.promotionRollAssignments = {};
    this.promotionWarningsAcknowledged = false;
    this.promotionForm.reset();
  }
  loadPromotionEligible() {
    const value = this.promotionForm.getRawValue();
    this.promotionLoading = true;
    this.api.promotionEligible({
      fromAcademicYear: value.fromAcademicYear || "",
      toAcademicYear: value.toAcademicYear || "",
      fromClassRoom: value.fromClassRoom || ""
    }).subscribe({
      next: (response) => {
        this.promotionEligibleRows = response.rows;
        this.promotionSelectedIds = new Set(response.rows.filter((row) => row.eligible).map((row) => row.studentId));
        this.promotionExcludedIds.clear();
        this.promotionLoading = false;
      },
      error: (error) => {
        this.promotionLoading = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  togglePromotionExclude(studentId, excluded) {
    if (excluded)
      this.promotionExcludedIds.add(studentId);
    else
      this.promotionExcludedIds.delete(studentId);
  }
  togglePromotionStudent(studentId, checked) {
    if (checked) {
      this.promotionSelectedIds.add(studentId);
      this.promotionExcludedIds.delete(studentId);
    } else {
      this.promotionSelectedIds.delete(studentId);
      this.promotionExcludedIds.add(studentId);
    }
  }
  selectAllPromotionStudents(checked) {
    const eligibleIds = this.promotionEligibleRows.filter((row) => row.eligible).map((row) => row.studentId);
    if (checked) {
      eligibleIds.forEach((id) => this.promotionSelectedIds.add(id));
      this.promotionExcludedIds.clear();
    } else {
      eligibleIds.forEach((id) => {
        this.promotionSelectedIds.delete(id);
        this.promotionExcludedIds.add(id);
      });
    }
  }
  isPromotionStudentSelected(studentId) {
    return this.promotionSelectedIds.has(studentId) && !this.promotionExcludedIds.has(studentId);
  }
  promotionWarningSummary(row) {
    return row.warnings?.map((warning) => warning.message).join("; ") || "";
  }
  loadPromotionPreview() {
    const value = this.promotionForm.getRawValue();
    const studentIds = this.promotionEligibleRows.filter((row) => row.eligible && this.isPromotionStudentSelected(row.studentId)).map((row) => row.studentId);
    const excludedStudentIds = [...this.promotionExcludedIds];
    this.promotionLoading = true;
    this.api.promotionPreview(__spreadProps(__spreadValues({}, value), {
      studentIds,
      excludedStudentIds,
      rollMode: this.promotionRollMode,
      rollAssignments: this.promotionRollAssignments
    })).subscribe({
      next: (preview) => {
        this.promotionPreview = preview;
        this.promotionLoading = false;
      },
      error: (error) => {
        this.promotionLoading = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  executePromotionBatch() {
    if (!this.promotionPreview) {
      this.loadPromotionPreview();
      return;
    }
    const value = this.promotionForm.getRawValue();
    const studentIds = this.promotionPreview.rows.filter((row) => row.included && row.eligible).map((row) => row.studentId);
    this.submitting = true;
    this.api.promotionExecute(__spreadProps(__spreadValues({}, value), {
      studentIds,
      excludedStudentIds: [...this.promotionExcludedIds],
      rollMode: this.promotionRollMode,
      rollAssignments: this.promotionRollAssignments,
      warningsAcknowledged: this.promotionWarningsAcknowledged
    })).subscribe({
      next: (batch) => {
        this.promotionBatch = batch;
        this.submitting = false;
        this.toast.success(`Promotion draft created for ${batch.promotedCount} student(s). Review and finalize or rollback.`);
        this.refresh();
      },
      error: (error) => {
        this.submitting = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  rollbackPromotionBatch() {
    if (!this.promotionBatch?._id)
      return;
    this.submitting = true;
    this.api.promotionRollback(this.promotionBatch._id).subscribe({
      next: (batch) => {
        this.promotionBatch = batch;
        this.submitting = false;
        this.toast.warning("Promotion rolled back. Enrollment history restored.");
        this.refresh();
      },
      error: (error) => {
        this.submitting = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  finalizePromotionBatch() {
    if (!this.can("students", "approve")) {
      this.toast.warning("You do not have permission to finalize promotions");
      return;
    }
    if (!this.promotionBatch?._id)
      return;
    this.submitting = true;
    this.api.promotionFinalize(this.promotionBatch._id).subscribe({
      next: (batch) => {
        this.promotionBatch = batch;
        this.submitting = false;
        this.toast.success(`Promotion finalized and locked (${batch.promotedCount} student(s)).`);
        this.refresh();
      },
      error: (error) => {
        this.submitting = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  loadPromotionReport() {
    const value = this.promotionForm.getRawValue();
    this.promotionReportLoading = true;
    this.api.promotionReport(this.promotionReportType, {
      fromAcademicYear: value.fromAcademicYear || "",
      toAcademicYear: value.toAcademicYear || "",
      classRoom: value.fromClassRoom || ""
    }).subscribe({
      next: (response) => {
        this.promotionReportRows = response.rows;
        this.promotionReportLoading = false;
      },
      error: (error) => {
        this.promotionReportLoading = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }
  exportPromotionReportCsv() {
    const rows = this.promotionReportRows;
    if (!rows.length)
      return;
    const headers = Object.keys(rows[0]);
    exportRowsToCsv(`promotion-${this.promotionReportType}.csv`, headers, rows.map((row) => headers.map((key) => String(row[key] ?? ""))));
  }
  exportPromotionReportPdf() {
    const rows = this.promotionReportRows;
    if (!rows.length)
      return;
    const headers = Object.keys(rows[0]);
    exportRowsToPdf(`Promotion Report \u2014 ${this.promotionReportType}`, headers, rows.map((row) => headers.map((key) => String(row[key] ?? ""))));
  }
  promoteStudents() {
    this.executePromotionBatch();
  }
  teacherName(teacher) {
    if (!teacher || typeof teacher === "string")
      return "Not assigned";
    return [teacher.firstName, teacher.middleName, teacher.lastName].filter(Boolean).join(" ").trim();
  }
  className(classRoom) {
    if (!classRoom || typeof classRoom === "string")
      return "";
    return `${classRoom.name}-${classRoom.section}`;
  }
  classYearName(classRoom) {
    if (typeof classRoom.academicYear === "string") {
      return this.years.find((y) => y._id === classRoom.academicYear)?.name || "";
    }
    return classRoom.academicYear?.name || "";
  }
  enrollmentClassName(student) {
    const latest = student?.enrollments?.[student.enrollments.length - 1];
    if (!latest)
      return "Unassigned";
    return this.className(latest.classRoom);
  }
  entityRefId(value) {
    if (!value)
      return "";
    return typeof value === "string" ? value : value._id || "";
  }
  matchesPortalStudent(student) {
    if (!this.isPortalUser)
      return true;
    const portalId = this.portalStudentId;
    if (!portalId)
      return false;
    return this.entityRefId(student) === portalId;
  }
  studentName(student) {
    if (!student || typeof student === "string")
      return "";
    return [student.firstName, student.middleName, student.lastName].filter(Boolean).join(" ").trim();
  }
  payrollTeacherName(teacher) {
    return this.teacherName(teacher);
  }
  getMonthName(month) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month - 1] || "";
  }
  firstPeriod(row) {
    return row.periods[0];
  }
  get filteredStudents() {
    const search = this.filters.studentSearch.toLowerCase().trim();
    return this.students.filter((student) => {
      const guardian = student.guardians?.[0];
      const latest = student.enrollments?.[student.enrollments.length - 1];
      const rollNumber = latest?.rollNumber || "";
      const searchBlob = [
        student.admissionNumber,
        this.studentName(student),
        student.status,
        rollNumber,
        guardian?.name,
        guardian?.phone,
        student.aadhaarNumber,
        student.udisePenId
      ].filter(Boolean).join(" ").toLowerCase();
      const matchesSearch = !search || searchBlob.includes(search);
      const matchesClass = !this.filters.studentClass || student.enrollments?.some((enrollment) => {
        const classId = typeof enrollment.classRoom === "string" ? enrollment.classRoom : enrollment.classRoom?._id;
        return classId === this.filters.studentClass;
      });
      const matchesYear = !this.filters.studentYear || student.enrollments?.some((enrollment) => {
        const yearId = typeof enrollment.academicYear === "string" ? enrollment.academicYear : enrollment.academicYear?._id;
        return yearId === this.filters.studentYear;
      });
      const matchesSection = !this.filters.studentSection || student.enrollments?.some((enrollment) => {
        const room = enrollment.classRoom;
        const section = typeof room === "string" ? this.classes.find((c) => c._id === room)?.section : room?.section;
        return section === this.filters.studentSection;
      });
      const matchesStatus = !this.filters.studentStatus || student.status === this.filters.studentStatus;
      const admissionDate = student.admissionDate ? new Date(student.admissionDate) : null;
      const matchesAdmissionFrom = !this.filters.studentAdmissionFrom || admissionDate && admissionDate >= new Date(this.filters.studentAdmissionFrom);
      const matchesAdmissionTo = !this.filters.studentAdmissionTo || admissionDate && admissionDate <= /* @__PURE__ */ new Date(this.filters.studentAdmissionTo + "T23:59:59");
      return matchesSearch && matchesClass && matchesYear && matchesSection && matchesStatus && matchesAdmissionFrom && matchesAdmissionTo;
    });
  }
  get sortedStudents() {
    if (this.isServerPaged("students"))
      return this.listingRows.students || [];
    return sortItems(this.filteredStudents, this.listSort.students?.field, this.listSort.students?.dir, {
      admissionNumber: (student) => student.admissionNumber,
      name: (student) => this.studentName(student),
      class: (student) => this.enrollmentClassName(student),
      admissionDate: (student) => student.admissionDate || "",
      status: (student) => student.status
    });
  }
  get filteredClasses() {
    const search = this.filters.classSearch.toLowerCase().trim();
    return this.classes.filter((room) => {
      const matchesSearch = !search || `${room.name}-${room.section} ${this.teacherName(room.classTeacher)}`.toLowerCase().includes(search);
      const matchesYear = !this.filters.classYear || String(room.academicYear) === this.filters.classYear || typeof room.academicYear === "object" && room.academicYear?._id === this.filters.classYear;
      const matchesStatus = !this.filters.classStatus || (room.status || "active") === this.filters.classStatus;
      return matchesSearch && matchesYear && matchesStatus;
    });
  }
  get sortedClasses() {
    if (this.isServerPaged("classes"))
      return this.listingRows.classes || [];
    return sortItems(this.filteredClasses, this.listSort.classes?.field, this.listSort.classes?.dir, {
      class: (room) => `${room.name}-${room.section}`,
      academicYear: (room) => this.classYearName(room),
      teacher: (room) => this.teacherName(room.classTeacher),
      status: (room) => room.status || "active",
      monthlyFee: (room) => room.monthlyFee || 0
    });
  }
  get filteredYears() {
    const search = this.filters.yearSearch.toLowerCase().trim();
    return this.years.filter((year) => {
      const matchesSearch = !search || year.name.toLowerCase().includes(search);
      const matchesStatus = !this.filters.yearStatus || this.yearStatus(year) === this.filters.yearStatus;
      return matchesSearch && matchesStatus;
    });
  }
  get sortedYears() {
    if (this.isServerPaged("years"))
      return this.listingRows.years || [];
    return sortItems(this.filteredYears, this.listSort.years?.field, this.listSort.years?.dir, {
      name: (year) => year.name,
      startDate: (year) => year.startDate,
      endDate: (year) => year.endDate,
      status: (year) => this.yearStatus(year)
    });
  }
  get filteredTeachers() {
    const search = this.filters.teacherSearch.toLowerCase().trim();
    return this.teachers.filter((teacher) => {
      const matchesSearch = !search || `${teacher.employeeCode} ${this.teacherName(teacher)} ${teacher.phone} ${teacher.email || ""}`.toLowerCase().includes(search);
      const matchesStatus = !this.filters.teacherStatus || teacher.status === this.filters.teacherStatus;
      return matchesSearch && matchesStatus;
    });
  }
  get sortedTeachers() {
    if (this.isServerPaged("teachers"))
      return this.listingRows.teachers || [];
    return sortItems(this.filteredTeachers, this.listSort.teachers?.field, this.listSort.teachers?.dir, {
      name: (teacher) => this.teacherName(teacher),
      employeeCode: (teacher) => teacher.employeeCode,
      phone: (teacher) => teacher.phone,
      baseSalary: (teacher) => teacher.baseSalary,
      status: (teacher) => teacher.status
    });
  }
  get sortedInvoices() {
    if (this.isServerPaged("invoices"))
      return this.listingRows.invoices || [];
    return sortItems(this.filteredInvoices, this.listSort.invoices?.field, this.listSort.invoices?.dir, {
      invoiceNumber: (invoice) => invoice.invoiceNumber,
      studentName: (invoice) => this.studentName(invoice.student),
      dueDate: (invoice) => invoice.dueDate,
      status: (invoice) => invoice.status,
      totalAmount: (invoice) => invoice.totalAmount
    });
  }
  get sortedFeeHistory() {
    if (this.isServerPaged("feeHistory"))
      return this.listingRows.feeHistory || [];
    return sortItems(this.filteredFeeHistory, this.listSort.feeHistory?.field, this.listSort.feeHistory?.dir, {
      paymentDate: (row) => row.paymentDate,
      studentName: (row) => this.studentName(row.student),
      receiptNumber: (row) => row.receiptNumber || "",
      paidAmount: (row) => row.paidAmount
    });
  }
  get sortedPayrolls() {
    if (this.isServerPaged("payroll"))
      return this.listingRows.payroll || [];
    return sortItems(this.filteredPayrolls, this.listSort.payroll?.field, this.listSort.payroll?.dir, {
      teacherName: (payroll) => this.payrollTeacherName(payroll.teacher),
      period: (payroll) => `${payroll.year}-${String(payroll.month).padStart(2, "0")}`,
      netSalary: (payroll) => payroll.basicSalary + payroll.allowances - payroll.deductions,
      status: (payroll) => payroll.status
    });
  }
  get sortedBusRoutes() {
    if (this.isServerPaged("busRoutes"))
      return this.listingRows.busRoutes || [];
    return sortItems(this.filteredBusRoutes, this.listSort.busRoutes?.field, this.listSort.busRoutes?.dir, {
      routeCode: (route) => route.routeCode,
      routeName: (route) => route.routeName,
      vehicleNumber: (route) => route.vehicleNumber,
      status: (route) => route.status
    });
  }
  get sortedBusRegistrations() {
    if (this.isServerPaged("busRegistrations"))
      return this.listingRows.busRegistrations || [];
    return sortItems(this.filteredBusRegistrations, this.listSort.busRegistrations?.field, this.listSort.busRegistrations?.dir, {
      studentName: (reg) => this.studentName(reg.student),
      routeName: (reg) => this.busRouteLabel(reg.route),
      stopName: (reg) => reg.stopName,
      status: (reg) => reg.status
    });
  }
  get sortedAttendance() {
    if (this.isServerPaged("attendance"))
      return this.listingRows.attendance || [];
    return sortItems(this.filteredAttendance, this.listSort.attendance?.field, this.listSort.attendance?.dir, {
      date: (row) => row.date,
      studentName: (row) => this.studentName(row.student),
      className: (row) => this.className(row.classRoom),
      status: (row) => row.status
    });
  }
  get sortedDashboardAttendance() {
    return sortItems(this.filteredAttendance, this.listSort.attendance?.field || "date", this.listSort.attendance?.dir || "desc", {
      date: (row) => row.date,
      studentName: (row) => this.studentName(row.student),
      className: (row) => this.className(row.classRoom),
      status: (row) => row.status
    });
  }
  exportInvoicesCsv() {
    this.withFilteredExportRows("invoices", this.sortedInvoices, (rows) => {
      exportRowsToCsv("fee-demands.csv", ["Invoice", "Student", "Period", "Total", "Paid", "Balance", "Status"], rows.map((invoice) => [
        invoice.invoiceNumber,
        this.studentName(invoice.student),
        this.feePeriodLabel(invoice.feeMonth, invoice.feeYear),
        String(invoice.totalAmount),
        String(invoice.paidAmount),
        String(invoice.balanceAmount),
        invoice.status
      ]));
    });
  }
  exportInvoicesPdf() {
    this.withFilteredExportRows("invoices", this.sortedInvoices, (rows) => {
      exportRowsToPdf("Fee Demands", ["Invoice", "Student", "Period", "Total", "Balance", "Status"], rows.map((invoice) => [
        invoice.invoiceNumber,
        this.studentName(invoice.student),
        this.feePeriodLabel(invoice.feeMonth, invoice.feeYear),
        String(invoice.totalAmount),
        String(invoice.balanceAmount),
        invoice.status
      ]));
    });
  }
  exportFeeHistoryCsv() {
    this.withFilteredExportRows("feeHistory", this.sortedFeeHistory, (rows) => {
      exportRowsToCsv("fee-history.csv", ["Month", "Student", "Receipt", "Paid", "Pending", "Status"], rows.map((row) => [
        this.feePeriodLabel(row.feeMonth, row.feeYear),
        this.studentName(row.student),
        row.receiptNumber || "\u2014",
        String(row.paidAmount),
        String(row.pendingAmount),
        row.paymentStatus
      ]));
    });
  }
  exportFeeHistoryPdf() {
    this.withFilteredExportRows("feeHistory", this.sortedFeeHistory, (rows) => {
      exportRowsToPdf("Fee Payment History", ["Month", "Student", "Receipt", "Paid", "Pending", "Status"], rows.map((row) => [
        this.feePeriodLabel(row.feeMonth, row.feeYear),
        this.studentName(row.student),
        row.receiptNumber || "\u2014",
        String(row.paidAmount),
        String(row.pendingAmount),
        row.paymentStatus
      ]));
    });
  }
  exportPayrollsCsv() {
    this.withFilteredExportRows("payroll", this.sortedPayrolls, (rows) => {
      exportRowsToCsv("payroll.csv", ["Teacher", "Period", "Basic", "Allowances", "Deductions", "Net", "Status"], rows.map((payroll) => [
        this.payrollTeacherName(payroll.teacher),
        `${this.getMonthName(payroll.month)} ${payroll.year}`,
        String(payroll.basicSalary),
        String(payroll.allowances),
        String(payroll.deductions),
        String(payroll.basicSalary + payroll.allowances - payroll.deductions),
        payroll.status
      ]));
    });
  }
  exportPayrollsPdf() {
    this.withFilteredExportRows("payroll", this.sortedPayrolls, (rows) => {
      exportRowsToPdf("Payroll Records", ["Teacher", "Period", "Net", "Status"], rows.map((payroll) => [
        this.payrollTeacherName(payroll.teacher),
        `${this.getMonthName(payroll.month)} ${payroll.year}`,
        String(payroll.basicSalary + payroll.allowances - payroll.deductions),
        payroll.status
      ]));
    });
  }
  exportBusRoutesCsv() {
    this.withFilteredExportRows("busRoutes", this.sortedBusRoutes, (rows) => {
      exportRowsToCsv("bus-routes.csv", ["Code", "Route", "Vehicle", "Driver", "Stops", "Assigned", "Status"], rows.map((route) => [
        route.routeCode,
        route.routeName,
        route.vehicleNumber,
        route.driverName,
        String(route.stops?.length || 0),
        String(route.assignedCount || 0),
        route.status
      ]));
    });
  }
  exportBusRoutesPdf() {
    this.withFilteredExportRows("busRoutes", this.sortedBusRoutes, (rows) => {
      exportRowsToPdf("Bus Routes", ["Code", "Route", "Vehicle", "Stops", "Status"], rows.map((route) => [
        route.routeCode,
        route.routeName,
        route.vehicleNumber,
        String(route.stops?.length || 0),
        route.status
      ]));
    });
  }
  exportBusRegistrationsCsv() {
    this.withFilteredExportRows("busRegistrations", this.sortedBusRegistrations, (rows) => {
      exportRowsToCsv("bus-registrations.csv", ["Student", "Route", "Stop", "Fee", "Status"], rows.map((reg) => [
        this.studentName(reg.student),
        this.busRouteLabel(reg.route),
        reg.stopName,
        String(reg.monthlyFee),
        reg.status
      ]));
    });
  }
  exportBusRegistrationsPdf() {
    this.withFilteredExportRows("busRegistrations", this.sortedBusRegistrations, (rows) => {
      exportRowsToPdf("Bus Registrations", ["Student", "Route", "Stop", "Fee", "Status"], rows.map((reg) => [
        this.studentName(reg.student),
        this.busRouteLabel(reg.route),
        reg.stopName,
        String(reg.monthlyFee),
        reg.status
      ]));
    });
  }
  exportAttendanceListCsv() {
    this.withFilteredExportRows("attendance", this.sortedAttendance, (rows) => {
      exportRowsToCsv("attendance.csv", ["Date", "Student", "Class", "Status"], rows.map((row) => [
        row.date ? new Date(row.date).toLocaleDateString() : "",
        this.studentName(row.student),
        this.className(row.classRoom),
        row.status
      ]));
    });
  }
  exportAttendanceListPdf() {
    this.withFilteredExportRows("attendance", this.sortedAttendance, (rows) => {
      exportRowsToPdf("Attendance Records", ["Date", "Student", "Class", "Status"], rows.map((row) => [
        row.date ? new Date(row.date).toLocaleDateString() : "",
        this.studentName(row.student),
        this.className(row.classRoom),
        row.status
      ]));
    });
  }
  get filteredInvoices() {
    const search = this.filters.invoiceSearch.toLowerCase().trim();
    return this.invoices.filter((invoice) => {
      if (this.isPortalUser && !this.matchesPortalStudent(invoice.student))
        return false;
      const matchesSearch = !search || `${invoice.invoiceNumber} ${this.studentName(invoice.student)}`.toLowerCase().includes(search);
      const matchesStatus = !this.filters.invoiceStatus || invoice.status === this.filters.invoiceStatus;
      const matchesYear = !this.filters.invoiceYear || (typeof invoice.academicYear === "string" ? invoice.academicYear === this.filters.invoiceYear : invoice.academicYear?._id === this.filters.invoiceYear);
      const matchesClass = !this.filters.invoiceClass || (typeof invoice.classRoom === "string" ? invoice.classRoom === this.filters.invoiceClass : invoice.classRoom?._id === this.filters.invoiceClass);
      const matchesMonth = !this.filters.invoiceMonth || (invoice.feeMonth ? invoice.feeMonth === Number(this.filters.invoiceMonth) : invoice.dueDate && new Date(invoice.dueDate).getMonth() + 1 === Number(this.filters.invoiceMonth));
      return matchesSearch && matchesStatus && matchesYear && matchesClass && matchesMonth;
    });
  }
  get filteredFeeHistory() {
    const search = this.filters.feeHistorySearch.toLowerCase().trim();
    return this.feeHistory.filter((row) => {
      if (this.isPortalUser && !this.matchesPortalStudent(row.student))
        return false;
      const studentLabel = this.studentName(row.student).toLowerCase();
      const matchesSearch = !search || `${row.receiptNumber || ""} ${row.invoiceNumber} ${studentLabel}`.toLowerCase().includes(search);
      const matchesStatus = !this.filters.feeHistoryStatus || row.paymentStatus === this.filters.feeHistoryStatus;
      return matchesSearch && matchesStatus;
    });
  }
  get filteredBusRoutes() {
    const search = this.filters.busRouteSearch.toLowerCase().trim();
    return this.busRoutes.filter((route) => {
      const matchesSearch = !search || `${route.routeName} ${route.routeCode} ${route.vehicleNumber} ${route.driverName}`.toLowerCase().includes(search);
      const matchesStatus = !this.filters.busRouteStatus || route.status === this.filters.busRouteStatus;
      return matchesSearch && matchesStatus;
    });
  }
  get filteredBusRegistrations() {
    const search = (this.filters.busRegSearch || "").toLowerCase().trim();
    return this.busRegistrations.filter((reg) => {
      const yearId = typeof reg.academicYear === "string" ? reg.academicYear : reg.academicYear?._id;
      const routeId = typeof reg.route === "string" ? reg.route : reg.route?._id;
      const matchesYear = !this.filters.busRegYear || yearId === this.filters.busRegYear;
      const matchesRoute = !this.filters.busRegRoute || routeId === this.filters.busRegRoute;
      const matchesStatus = !this.filters.busRegStatus || reg.status === this.filters.busRegStatus;
      const matchesSearch = !search || `${this.studentName(reg.student)} ${this.busRouteLabel(reg.route)} ${reg.stopName}`.toLowerCase().includes(search);
      return matchesYear && matchesRoute && matchesStatus && matchesSearch;
    });
  }
  get filteredPayrolls() {
    const search = this.filters.payrollSearch.toLowerCase().trim();
    return this.payrolls.filter((payroll) => {
      const matchesSearch = !search || `${this.payrollTeacherName(payroll.teacher)} ${this.getMonthName(payroll.month)} ${payroll.year}`.toLowerCase().includes(search);
      const matchesStatus = !this.filters.payrollStatus || payroll.status === this.filters.payrollStatus;
      return matchesSearch && matchesStatus;
    });
  }
  get filteredAttendance() {
    const search = this.filters.attendanceSearch.toLowerCase().trim();
    return this.attendance.filter((row) => {
      if (this.isPortalUser && !this.matchesPortalStudent(row.student))
        return false;
      const matchesSearch = !search || `${this.studentName(row.student)} ${this.className(row.classRoom)} ${row.status}`.toLowerCase().includes(search);
      const matchesStatus = !this.filters.attendanceStatus || row.status === this.filters.attendanceStatus;
      const matchesClass = !this.filters.attendanceClass || (typeof row.classRoom === "string" ? row.classRoom : row.classRoom?._id) === this.filters.attendanceClass;
      const matchesYear = !this.filters.attendanceYear || (typeof row.academicYear === "string" ? row.academicYear : row.academicYear?._id) === this.filters.attendanceYear;
      const matchesStudent = !this.filters.attendanceStudent || (typeof row.student === "string" ? row.student : row.student?._id) === this.filters.attendanceStudent;
      return matchesSearch && matchesStatus && matchesClass && matchesYear && matchesStudent;
    });
  }
  get attendanceStudentOptions() {
    if (!this.filters.attendanceClass)
      return this.students;
    return this.students.filter((s) => s.enrollments?.some((e) => {
      const classId = typeof e.classRoom === "string" ? e.classRoom : e.classRoom?._id;
      return classId === this.filters.attendanceClass;
    }));
  }
  get filteredTimetable() {
    const search = this.filters.timetableSearch.toLowerCase().trim();
    return this.timetable.filter((row) => !search || `${row.dayOfWeek} ${this.className(row.classRoom)} ${(row.periods ?? []).map((period) => period.subject).join(" ")}`.toLowerCase().includes(search));
  }
  get filteredExams() {
    if (this.isServerPaged("exams"))
      return this.listingRows.exams || [];
    const search = this.filters.examSearch.toLowerCase().trim();
    return this.exams.filter((exam) => {
      const matchesSearch = !search || `${exam.title} ${exam.subject} ${exam.chapter}`.toLowerCase().includes(search);
      const matchesStatus = !this.filters.examStatus || exam.status === this.filters.examStatus;
      return matchesSearch && matchesStatus;
    });
  }
  get sortedExams() {
    if (this.isServerPaged("exams"))
      return this.filteredExams;
    return sortItems(this.filteredExams, this.listSort.exams?.field, this.listSort.exams?.dir, {
      title: (exam) => exam.title,
      subject: (exam) => exam.subject,
      status: (exam) => exam.status,
      createdAt: (exam) => exam.createdAt || ""
    });
  }
  get filteredUsers() {
    const search = this.filters.userSearch.toLowerCase().trim();
    return this.users.filter((user) => {
      const matchesSearch = !search || `${user.name} ${user.email} ${user.role}`.toLowerCase().includes(search);
      const matchesRole = !this.filters.userRole || user.role === this.filters.userRole;
      const status = user.isActive === false ? "inactive" : "active";
      const matchesStatus = !this.filters.userStatus || status === this.filters.userStatus;
      return matchesSearch && matchesRole && matchesStatus;
    });
  }
  get sortedUsers() {
    if (this.isServerPaged("users"))
      return this.listingRows.users || [];
    return sortItems(this.filteredUsers, this.listSort.users?.field, this.listSort.users?.dir, {
      name: (user) => user.name,
      email: (user) => user.email,
      role: (user) => user.role,
      status: (user) => user.isActive === false ? "inactive" : "active"
    });
  }
  get filteredExamResults() {
    const search = this.filters.examResultSearch.toLowerCase().trim();
    return this.examResults.filter((result) => {
      const studentLabel = this.studentName(result.student).toLowerCase();
      const examLabel = this.examTitle(result.exam).toLowerCase();
      const matchesSearch = !search || `${studentLabel} ${examLabel} ${result.grade || ""}`.toLowerCase().includes(search);
      const matchesGrade = !this.filters.examResultGrade || result.grade === this.filters.examResultGrade;
      return matchesSearch && matchesGrade;
    });
  }
  get profileStudentOptions() {
    const search = this.filters.profileSearch.toLowerCase().trim();
    return this.students.filter((s) => {
      const matchesSearch = !search || `${s.admissionNumber} ${this.studentName(s)}`.toLowerCase().includes(search);
      const matchesClass = !this.filters.profileClass || s.enrollments?.some((e) => {
        const classId = typeof e.classRoom === "string" ? e.classRoom : e.classRoom?._id;
        return classId === this.filters.profileClass;
      });
      return matchesSearch && matchesClass;
    });
  }
  get filteredProfileExams() {
    if (!this.studentProfile)
      return [];
    const search = this.filters.profileExamSearch.toLowerCase().trim();
    return this.studentProfile.academics.examResults.filter((e) => !search || `${e.title} ${e.subject} ${e.chapter}`.toLowerCase().includes(search));
  }
  get sortedProfileExams() {
    return sortItems(this.filteredProfileExams, this.listSort.profileExams?.field, this.listSort.profileExams?.dir, {
      title: (exam) => exam.title,
      subject: (exam) => exam.subject,
      submittedAt: (exam) => exam.submittedAt,
      percentage: (exam) => exam.percentage
    });
  }
  get filteredProfileFees() {
    if (!this.studentProfile)
      return [];
    const search = this.filters.profileFeeSearch.toLowerCase().trim();
    return this.studentProfile.fees.invoices.filter((inv) => {
      const matchesSearch = !search || inv.invoiceNumber.toLowerCase().includes(search);
      const matchesStatus = !this.filters.profileFeeStatus || inv.status === this.filters.profileFeeStatus;
      return matchesSearch && matchesStatus;
    });
  }
  get sortedProfileFees() {
    return sortItems(this.filteredProfileFees, this.listSort.profileFees?.field, this.listSort.profileFees?.dir, {
      invoiceNumber: (inv) => inv.invoiceNumber,
      dueDate: (inv) => inv.dueDate,
      totalAmount: (inv) => inv.totalAmount,
      balanceAmount: (inv) => inv.balanceAmount,
      status: (inv) => inv.status
    });
  }
  paged(key, items) {
    if (this.isServerPaged(key))
      return items;
    const size = this.getListPageSize(key);
    const page = Math.min(this.pages[key], this.pageCount(items, key));
    const start = (page - 1) * size;
    return items.slice(start, start + size);
  }
  pageCount(items, key) {
    const size = this.getListPageSize(key);
    const total = this.isServerPaged(key) ? this.listingTotals[key] ?? 0 : items.length;
    return Math.max(1, Math.ceil(total / size));
  }
  setPage(key, page, items) {
    const nextPage = Math.min(Math.max(page, 1), this.pageCount(items, key));
    this.pages[key] = nextPage;
    this.persistListState(key);
    this.reloadListing(key);
  }
  resetPage(key) {
    this.pages[key] = 1;
    this.persistListState(key);
    if (this.isServerPaged(key))
      this.reloadListing(key);
  }
  readStoredUser() {
    try {
      return JSON.parse(localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_USER_KEY) || "null");
    } catch {
      localStorage.removeItem(APP_CONSTANTS.LOCAL_STORAGE_USER_KEY);
      return null;
    }
  }
  persistSession(token, user) {
    localStorage.setItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY, token);
    localStorage.setItem(APP_CONSTANTS.LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
    this.token = token;
    this.currentUser = user;
    this.permissionService.setPermissions(user.permissions);
    this.sessionIdleMinutes = user.securityPolicy?.session?.idleTimeoutMinutes || APP_CONSTANTS.DEFAULT_SESSION_IDLE_MINUTES;
    this.loadedTabs.clear();
    this.holidaysLoaded = false;
    this.lastActivityAt = Date.now();
    sessionStorage.setItem(APP_CONSTANTS.SESSION_ACTIVITY_KEY, String(this.lastActivityAt));
    this.startSessionWatch();
    if (user.role === "parent") {
      this.parentSelectedChild = user.linkedStudents?.[0] || user.linkedStudent || "";
    }
  }
  clearSession() {
    localStorage.removeItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY);
    localStorage.removeItem(APP_CONSTANTS.LOCAL_STORAGE_USER_KEY);
    this.token = null;
    this.currentUser = null;
    this.permissionService.clear();
    this.loadedTabs.clear();
    this.holidaysLoaded = false;
    this.stopSessionWatch();
  }
  openProtectedPdf(url) {
    this.openProtectedFile(url);
  }
  openProtectedFile(url, options) {
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY);
    if (!token) {
      this.toast.error("Please sign in again");
      return;
    }
    fetch(url, { headers: { Authorization: `Bearer ${token}` } }).then((response) => __async(this, null, function* () {
      if (!response.ok) {
        const body = yield response.json().catch(() => ({}));
        throw new Error(body.message || "Unable to open document");
      }
      return response.blob();
    })).then((blob) => {
      const blobUrl = URL.createObjectURL(blob);
      if (options?.download) {
        const anchor = document.createElement("a");
        anchor.href = blobUrl;
        anchor.download = options.fileName || "document";
        anchor.click();
        setTimeout(() => URL.revokeObjectURL(blobUrl), 2e3);
        return;
      }
      window.open(blobUrl, "_blank", "noopener,noreferrer");
    }).catch((error) => this.toast.error(error.message || "Document unavailable"));
  }
  submit(request, successMessage, formToReset, onSuccess) {
    if (this.submitting)
      return;
    this.message = "";
    this.submitting = true;
    this.loading = true;
    request.subscribe({
      next: (response) => {
        this.toast.success(successMessage);
        if (formToReset)
          formToReset.reset();
        if (onSuccess)
          onSuccess(response);
        this.refresh();
      },
      error: (error) => {
        this.toast.error(extractApiMessage(error, "Could not save record"));
        this.submitting = false;
        this.loading = false;
      }
    });
  }
  confirmAction(options) {
    return __async(this, null, function* () {
      return this.confirmDialog.confirm(options);
    });
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mousemove", function AppComponent_mousemove_HostBindingHandler() {
        return ctx.onUserActivity();
      }, false, \u0275\u0275resolveDocument)("keydown", function AppComponent_keydown_HostBindingHandler($event) {
        return ctx.onGlobalSearchShortcut($event);
      }, false, \u0275\u0275resolveDocument)("click", function AppComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [[150, null], ["class", "login-shell", 4, "ngIf"], ["class", "app-shell", 4, "ngIf"], [1, "login-shell"], [1, "login-layout"], [1, "login-brand-panel"], [1, "login-brand-content"], [1, "eyebrow"], ["class", "login-school-logo", 3, "src", "alt", 4, "ngIf"], ["class", "login-copy", 4, "ngIf"], ["role", "listbox", "aria-label", "Select your role", 1, "role-grid"], ["type", "button", "class", "role-card", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "login-card"], [1, "login-card-header"], [1, "role-pill"], [1, "login-hint"], [3, "ngSubmit", "formGroup"], [1, "field-label"], ["type", "text", "formControlName", "email", "autocomplete", "username", 3, "placeholder"], ["type", "password", "formControlName", "password", "placeholder", "Enter your password", "autocomplete", "current-password"], [1, "forgot-password-container"], ["type", "button", 1, "forgot-link", 3, "click"], ["type", "submit", 1, "login-submit", 3, "disabled"], ["class", "status error", 4, "ngIf"], ["class", "verify-resend-box", 4, "ngIf"], ["class", "admission-overlay forgot-overlay", 3, "click", 4, "ngIf"], [1, "login-school-logo", 3, "src", "alt"], [1, "login-copy"], ["type", "button", 1, "role-card", 3, "click"], ["aria-hidden", "true", 1, "role-icon"], [1, "status", "error"], [1, "verify-resend-box"], [1, "verify-resend-copy"], ["type", "button", 1, "primary-btn", "compact-submit", 3, "click", "disabled"], ["class", "status ok", 4, "ngIf"], ["class", "dev-otp-hint", 4, "ngIf"], [1, "status", "ok"], [1, "dev-otp-hint"], ["target", "_blank", "rel", "noopener", 3, "href"], [1, "admission-overlay", "forgot-overlay", 3, "click"], [1, "admission-modal", "forgot-modal", 3, "click"], [1, "admission-modal-header"], ["type", "button", 1, "ghost", "small", 3, "click"], [1, "admission-modal-body"], [1, "dash-sub"], ["type", "password", "placeholder", "Leave blank to keep current password", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Confirm new password", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], [1, "admission-modal-footer"], ["type", "button", 1, "ghost", 3, "click"], ["type", "button", 1, "primary-btn", 3, "click", "disabled"], ["type", "button", "aria-label", "Close", 1, "modal-close-btn", 3, "click"], [1, "admission-modal-body", 3, "formGroup"], [4, "ngIf"], ["type", "button", "class", "primary-btn", 3, "disabled", "click", 4, "ngIf"], ["type", "email", "formControlName", "email", "placeholder", "you@example.com", "autocomplete", "email"], ["type", "text", "formControlName", "otp", "inputmode", "numeric", "maxlength", "6", "placeholder", "6-digit code", "autocomplete", "one-time-code"], ["type", "password", "formControlName", "newPassword", "placeholder", "Enter a new password", "autocomplete", "new-password"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Re-enter new password", "autocomplete", "new-password"], ["type", "button", 1, "link-btn", 3, "click", "disabled"], [1, "app-shell"], [1, "sidebar"], [1, "sidebar-header"], [1, "brand-block"], ["class", "nav-school-logo", "alt", "", 3, "src", 4, "ngIf"], [1, "brand-full"], [1, "brand-short"], ["type", "button", "aria-label", "Toggle sidebar", 1, "icon-button", "sidebar-toggle", 3, "click"], ["aria-hidden", "true"], [1, "sidebar-accent"], ["aria-label", "ERP modules", 1, "nav-list"], ["type", "button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "main-panel"], [1, "topbar"], [1, "topbar-title"], [1, "role-pill", "inline"], [1, "actions"], ["class", "global-search-wrap", 4, "ngIf"], ["class", "notification-menu-wrap", 3, "open", 4, "ngIf"], ["type", "button", 1, "ghost", "action-button", "refresh-button", 3, "click", "disabled"], ["class", "button-icon", "data-icon", "refresh", "aria-hidden", "true", 4, "ngIf"], ["class", "btn-spinner", 4, "ngIf"], [1, "button-label"], [1, "profile-menu-wrap"], ["type", "button", 1, "profile-trigger", 3, "click"], [1, "avatar"], [1, "profile-name"], ["aria-hidden", "true", 1, "chevron"], ["class", "profile-menu", 4, "ngIf"], ["class", "password-change-overlay", 4, "ngIf"], ["class", "child-selector-bar", 4, "ngIf"], ["class", "my-profile-overlay", 3, "click", 4, "ngIf"], ["alt", "", 1, "nav-school-logo", 3, "src"], ["type", "button", 3, "click"], ["aria-hidden", "true", 1, "nav-icon"], [1, "nav-label"], [1, "global-search-wrap"], ["type", "search", "placeholder", "Search students, teachers, receipts... (Ctrl+K)", "aria-label", "Global search", "autocomplete", "off", 1, "global-search-input", 3, "ngModelChange", "input", "focus", "ngModel"], ["class", "global-search-results", 4, "ngIf"], [1, "global-search-results"], ["class", "search-loading", 4, "ngIf"], ["type", "button", "class", "search-result", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "search-empty", 4, "ngIf"], [1, "search-loading"], ["type", "button", 1, "search-result", 3, "click"], [1, "search-result-type"], [1, "search-empty"], [1, "notification-menu-wrap"], ["class", "notification-backdrop", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Notifications", 1, "ghost", "action-button", "notification-button", 3, "click"], ["data-icon", "bell", "aria-hidden", "true", 1, "button-icon"], ["class", "notification-badge", 4, "ngIf"], ["class", "notification-menu", "role", "dialog", "aria-label", "Action required notifications", 4, "ngIf"], ["aria-hidden", "true", 1, "notification-backdrop", 3, "click"], [1, "notification-badge"], ["role", "dialog", "aria-label", "Action required notifications", 1, "notification-menu"], [1, "notification-menu-header"], [1, "notification-count"], ["class", "notification-loading", 4, "ngIf"], ["class", "notification-item", 4, "ngFor", "ngForOf"], ["class", "notification-empty", 4, "ngIf"], [1, "notification-loading"], [1, "notification-item"], ["type", "button", 1, "notification-item-main", 3, "click"], [1, "notification-item-head"], [1, "status-badge", 3, "ngClass"], [1, "notification-action"], ["type", "button", 1, "ghost", "small", "notification-dismiss", 3, "click"], [1, "notification-empty"], ["data-icon", "refresh", "aria-hidden", "true", 1, "button-icon"], [1, "btn-spinner"], [1, "spinner-ring"], [1, "profile-menu"], [1, "profile-menu-header"], [1, "role-pill", "small"], ["type", "button", 1, "menu-item", 3, "click"], ["type", "button", 1, "menu-item", "danger", 3, "click"], [1, "password-change-overlay"], [1, "panel", "password-change-panel", 3, "ngSubmit", "formGroup"], [1, "section-head"], ["class", "dash-sub", 4, "ngIf"], ["type", "password", "formControlName", "currentPassword"], ["type", "password", "formControlName", "newPassword"], ["type", "password", "formControlName", "confirmPassword"], [1, "form-actions"], ["type", "submit", 3, "disabled"], ["type", "button", "class", "ghost", 3, "click", 4, "ngIf"], [1, "child-selector-bar"], [1, "child-selector-label"], ["type", "button", "class", "child-chip", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "child-chip", 3, "click"], [1, "child-chip-avatar"], [1, "child-chip-name"], [1, "child-chip-class"], [3, "vm", 4, "ngIf"], [3, "vm"], [1, "my-profile-overlay", 3, "click"], [1, "my-profile-modal", 3, "click"], [1, "my-profile-header"], [1, "my-profile-avatar"], [1, "avatar", "large"], [1, "my-profile-name"], [1, "my-profile-grid"], [1, "my-profile-field"], [1, "my-profile-label"], [1, "my-profile-value"], [1, "my-profile-section-title"], ["type", "button", 1, "ghost", 2, "margin-top", "12px", 3, "click"], ["class", "parent-child-card", 4, "ngFor", "ngForOf"], [1, "parent-child-card"], ["type", "button", 1, "ghost", 2, "margin-top", "8px", 3, "click"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AppComponent_main_0_Template, 41, 17, "main", 1)(1, AppComponent_main_1_Template, 115, 46, "main", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.currentUser);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentUser);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    UpperCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    DatePipe,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MaxLengthValidator,
    NgModel,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    SpinnerComponent,
    ToastContainerComponent,
    ConfirmDialogComponent
  ], styles: [`/* src/app/app.component.css */
* {
  box-sizing: border-box;
}
@keyframes spin-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes pulse-fade {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}
.spinner-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 48px 24px;
  width: 100%;
  min-height: 200px;
}
.spinner-overlay.spinner-inline {
  min-height: auto;
  padding: 24px 16px;
}
.spinner-ring {
  width: 40px;
  height: 40px;
  border: 3.5px solid #e2e8f0;
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin-ring 0.8s linear infinite;
}
.spinner-inline .spinner-ring {
  width: 28px;
  height: 28px;
  border-width: 3px;
}
.spinner-text {
  font-size: 13px;
  font-weight: 600;
  color: #64748b;
  letter-spacing: 0.02em;
  animation: pulse-fade 1.6s ease-in-out infinite;
}
.page-spinner-wrap {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 320px;
}
.section-spinner-wrap {
  position: relative;
}
.section-spinner-wrap > .spinner-overlay {
  position: absolute;
  inset: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(2px);
  border-radius: var(--radius-lg);
  min-height: 100%;
}
.btn-spinner {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-spinner .spinner-ring {
  width: 16px;
  height: 16px;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
}
:root {
  --bg: #f4faf9;
  --surface: #ffffff;
  --surface-raised: #ffffff;
  --surface-soft: #f0fdfa;
  --surface-accent: #ecfdf5;
  --border: #d1e7e4;
  --border-soft: #ecfdf5;
  --text: #0f172a;
  --text-soft: #334155;
  --muted: #64748b;
  --primary: #0d9488;
  --primary-strong: #0f766e;
  --primary-bright: #14b8a6;
  --primary-soft: #f0fdfa;
  --primary-muted: #ccfbf1;
  --accent: #14b8a6;
  --accent-soft: #ecfdf5;
  --success: #10b981;
  --success-soft: #ecfdf5;
  --warning: #f59e0b;
  --warning-soft: #fffbeb;
  --danger: #ef4444;
  --danger-soft: #fef2f2;
  --shell-dark: #0a2a33;
  --shell-dark-deep: #05191d;
  --shell-dark-mid: #102a2e;
  --shadow-sm: 0 1px 2px rgba(5, 25, 29, 0.06);
  --shadow-md: 0 8px 30px rgba(5, 25, 29, 0.08);
  --shadow-lg: 0 20px 50px rgba(5, 25, 29, 0.14);
  --radius: 10px;
  --radius-lg: 16px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-8: 48px;
  --space-10: 64px;
  --font:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  --control-height: 48px;
  --button-height: 40px;
  --button-min-width: 120px;
  --bp-laptop: 1440px;
  --bp-tablet: 1024px;
  --bp-tablet-sm: 768px;
  --bp-mobile: 640px;
  --bp-mobile-sm: 560px;
}
html,
body {
  min-width: 320px;
}
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font);
  letter-spacing: 0;
}
button,
input,
select {
  font: inherit;
}
button {
  align-items: center;
  background:
    linear-gradient(
      180deg,
      var(--primary-bright),
      var(--primary));
  border: 1px solid var(--primary-strong);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-weight: 700;
  gap: var(--space-2);
  justify-content: center;
  min-height: 40px;
  min-width: 0;
  padding: 9px 16px;
  transition:
    background 160ms ease,
    border-color 160ms ease,
    box-shadow 160ms ease,
    color 160ms ease,
    transform 160ms ease;
  white-space: nowrap;
}
button:hover:not(:disabled) {
  background:
    linear-gradient(
      180deg,
      #2dd4bf,
      var(--primary-strong));
  box-shadow: 0 10px 24px rgba(13, 148, 136, 0.28);
  transform: translateY(-1px);
}
button:focus-visible,
input:focus-visible,
select:focus-visible,
a:focus-visible {
  outline: 3px solid rgba(13, 148, 136, 0.22);
  outline-offset: 2px;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}
.ghost {
  background: var(--surface);
  border-color: var(--border);
  box-shadow: none;
  color: var(--text-soft);
}
.ghost:hover:not(:disabled) {
  background: var(--surface-soft);
  border-color: #c8d5e2;
  box-shadow: var(--shadow-sm);
  color: var(--text);
}
.small {
  font-size: 12px;
  min-height: 32px;
  padding: 6px 10px;
}
.danger-btn,
.btn-destructive {
  background: var(--danger-soft);
  border-color: #fecdca;
  box-shadow: none;
  color: var(--danger);
}
.danger-btn:hover:not(:disabled),
.btn-destructive:hover:not(:disabled) {
  background: #ffd7d4;
  border-color: #fda29b;
  box-shadow: var(--shadow-sm);
}
.primary-btn,
.btn-primary {
  background:
    linear-gradient(
      180deg,
      var(--primary-bright),
      var(--primary));
  border-color: var(--primary-strong);
  color: #ffffff;
}
.icon-button {
  flex: 0 0 40px;
  min-width: 40px;
  padding: 0;
}
.button-icon,
.nav-icon::before {
  -webkit-mask-image: var(--icon-mask, none);
  background: currentColor;
  content: "";
  display: inline-block;
  height: 18px;
  mask-image: var(--icon-mask, none);
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  width: 18px;
}
.button-icon[data-icon=refresh] {
  --icon-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 12a9 9 0 0 1-9 9 9.8 9.8 0 0 1-6.7-2.7L3 16'/%3E%3Cpath d='M3 21v-5h5'/%3E%3Cpath d='M3 12a9 9 0 0 1 15.7-6.3L21 8'/%3E%3Cpath d='M16 8h5V3'/%3E%3C/svg%3E");
}
.button-icon[data-icon=bell] {
  --icon-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'/%3E%3Cpath d='M13.73 21a2 2 0 0 1-3.46 0'/%3E%3C/svg%3E");
}
.nav-icon[data-icon=dashboard]::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='7' height='8' rx='1.5'/%3E%3Crect x='14' y='3' width='7' height='5' rx='1.5'/%3E%3Crect x='14' y='12' width='7' height='9' rx='1.5'/%3E%3Crect x='3' y='15' width='7' height='6' rx='1.5'/%3E%3C/svg%3E");
}
.nav-icon[data-icon=students]::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='9' cy='7' r='4'/%3E%3Cpath d='M22 21v-2a4 4 0 0 0-3-3.9'/%3E%3Cpath d='M16 3.1a4 4 0 0 1 0 7.8'/%3E%3C/svg%3E");
}
.nav-icon[data-icon=classes]::before,
.nav-icon[data-icon=timetable]::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 19.5A2.5 2.5 0 0 1 6.5 17H21'/%3E%3Cpath d='M6.5 2H21v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z'/%3E%3Cpath d='M8 7h8'/%3E%3Cpath d='M8 11h6'/%3E%3C/svg%3E");
}
.nav-icon[data-icon=teachers]::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21a8 8 0 1 0-16 0'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3Cpath d='M12 11v4'/%3E%3Cpath d='M9 15h6'/%3E%3C/svg%3E");
}
.nav-icon[data-icon=reports]::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/%3E%3Cpath d='M14 2v6h6'/%3E%3Cpath d='M8 13h8'/%3E%3Cpath d='M8 17h5'/%3E%3Cpath d='M16 17h2'/%3E%3C/svg%3E");
}
.nav-icon[data-icon=fees]::before,
.nav-icon[data-icon=payroll]::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='5' width='18' height='14' rx='2'/%3E%3Cpath d='M3 10h18'/%3E%3Cpath d='M7 15h3'/%3E%3Cpath d='M14 15h3'/%3E%3C/svg%3E");
}
.nav-icon[data-icon=fee-prediction]::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 3v18h18'/%3E%3Cpath d='M7 14l4-4 3 3 5-6'/%3E%3C/svg%3E");
}
.nav-icon[data-icon=timetable-generator]::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2'/%3E%3Cpath d='M16 2v4'/%3E%3Cpath d='M8 2v4'/%3E%3Cpath d='M3 10h18'/%3E%3Cpath d='M8 14h.01'/%3E%3Cpath d='M12 14h.01'/%3E%3Cpath d='M16 14h.01'/%3E%3Cpath d='M8 18h.01'/%3E%3Cpath d='M12 18h.01'/%3E%3C/svg%3E");
}
.nav-icon[data-icon=transport]::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 6v6'/%3E%3Cpath d='M15 6v6'/%3E%3Cpath d='M2 12h19'/%3E%3Cpath d='M18 18h3v-3.37a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 0 17.89 12H6.11a2 2 0 0 0-1 1.55L3.11 16.4A2 2 0 0 0 2 18.11V21h3'/%3E%3Ccircle cx='7' cy='18' r='2'/%3E%3Ccircle cx='17' cy='18' r='2'/%3E%3C/svg%3E");
}
.nav-icon[data-icon=drivers]::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Ccircle cx='12' cy='12' r='2.5'/%3E%3Cpath d='M12 9.5V3'/%3E%3Cpath d='m10.2 13.8-4.6 4.4'/%3E%3Cpath d='m13.8 13.8 4.6 4.4'/%3E%3C/svg%3E");
}
.nav-icon[data-icon=attendance]::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 2v4'/%3E%3Cpath d='M16 2v4'/%3E%3Crect x='3' y='4' width='18' height='18' rx='2'/%3E%3Cpath d='M3 10h18'/%3E%3Cpath d='m9 16 2 2 4-4'/%3E%3C/svg%3E");
}
.nav-icon[data-icon=promotion]::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3v18'/%3E%3Cpath d='m18 9-6-6-6 6'/%3E%3Cpath d='M4 21h16'/%3E%3C/svg%3E");
}
.nav-icon[data-icon=users]::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='8.5' cy='7' r='4'/%3E%3Cpath d='m17 11 2 2 4-4'/%3E%3C/svg%3E");
}
.nav-icon[data-icon=exams]::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/%3E%3Cpath d='M14 2v6h6'/%3E%3Cpath d='M8 13h8'/%3E%3Cpath d='M8 17h5'/%3E%3Cpath d='M16 13l2 2 4-4'/%3E%3C/svg%3E");
}
.nav-icon[data-icon=profile]::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21a8 8 0 1 0-16 0'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3Cpath d='M12 11v2'/%3E%3Cpath d='M9 18h6'/%3E%3C/svg%3E");
}
.profile-hero {
  align-items: center;
  background:
    linear-gradient(
      135deg,
      #ffffff 0%,
      #f0f7ff 55%,
      #ecfdf5 100%);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-6);
  justify-content: space-between;
  padding: var(--space-6);
}
.profile-hero-left {
  align-items: center;
  display: flex;
  gap: var(--space-5);
}
.profile-avatar {
  align-items: center;
  background:
    linear-gradient(
      135deg,
      var(--primary-bright),
      var(--primary-strong));
  border-radius: 20px;
  color: #fff;
  display: flex;
  font-size: 28px;
  font-weight: 800;
  height: 88px;
  justify-content: center;
  overflow: hidden;
  width: 88px;
}
.profile-avatar img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}
.profile-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-2);
}
.meta-chip {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 10px;
}
.ai-rating-card {
  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--primary-strong));
  border-radius: 16px;
  color: #fff;
  display: grid;
  gap: var(--space-1);
  min-width: 180px;
  padding: var(--space-5);
  text-align: center;
}
.ai-rating-card .eyebrow {
  color: rgba(255, 255, 255, 0.8);
}
.ai-score {
  font-size: 42px;
  line-height: 1;
}
.ai-score small {
  font-size: 18px;
  opacity: 0.8;
}
.rating-label {
  background: rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  padding: 4px 10px;
}
.trend-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  margin: 16px 0;
}
.trend-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 12px;
  display: grid;
  gap: 4px;
  padding: 14px;
}
.trend-pill {
  border-radius: 999px;
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  padding: 3px 8px;
  width: fit-content;
}
.trend-pill.improved {
  background: #dcfce7;
  color: #166534;
}
.trend-pill.declined {
  background: #fee2e2;
  color: #991b1b;
}
.trend-pill.stable {
  background: #e2e8f0;
  color: #475569;
}
.password-change-overlay {
  align-items: center;
  background: rgba(15, 23, 42, 0.45);
  display: grid;
  inset: 0;
  justify-items: center;
  padding: 24px;
  position: fixed;
  z-index: 1200;
}
.password-change-panel {
  max-width: 420px;
  width: 100%;
}
.checkbox-row {
  align-items: center;
  display: flex;
  gap: 8px;
}
.metric-card small {
  color: var(--muted);
  font-size: 12px;
  font-weight: 500;
}
.metric-card.accent-blue::before {
  background:
    linear-gradient(
      180deg,
      var(--primary),
      #5eead4);
}
.metric-card.accent-teal::before {
  background:
    linear-gradient(
      180deg,
      #0f766e,
      #2dd4bf);
}
.metric-card.accent-purple::before {
  background:
    linear-gradient(
      180deg,
      #7c3aed,
      #c084fc);
}
.metric-card.accent-orange::before {
  background:
    linear-gradient(
      180deg,
      #ea580c,
      #fdba74);
}
.metric-card.accent-green::before {
  background:
    linear-gradient(
      180deg,
      #059669,
      #6ee7b7);
}
.summary-note {
  color: var(--text-soft);
  line-height: 1.6;
  margin-bottom: var(--space-4);
}
.field-hint {
  color: var(--muted);
  display: block;
  font-size: 12px;
  margin-top: 4px;
}
.password-change-overlay {
  align-items: center;
  background: rgba(15, 23, 42, 0.45);
  display: grid;
  inset: 0;
  justify-items: center;
  padding: 24px;
  position: fixed;
  z-index: 1200;
}
.password-change-panel {
  max-width: 420px;
  width: 100%;
}
.guardian-card {
  background: var(--surface-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  display: grid;
  gap: 4px;
  margin-bottom: var(--space-3);
  padding: var(--space-3);
}
.info-list {
  display: grid;
  gap: var(--space-2);
}
.info-list div {
  align-items: center;
  background: var(--surface-soft);
  border-radius: var(--radius);
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
}
.info-list span {
  color: var(--muted);
  font-size: 12px;
}
.score-card-grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  padding: var(--space-4) var(--space-6);
}
.score-card {
  background:
    linear-gradient(
      180deg,
      #ffffff,
      #f8fafc);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  display: grid;
  gap: var(--space-2);
  padding: var(--space-4);
  transition: transform 160ms ease, box-shadow 160ms ease;
}
.score-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
.score-card.pass {
  border-color: #86efac;
}
.score-card.fail {
  border-color: #fca5a5;
}
.score-card-top {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.subject-tag,
.student-tag {
  background: var(--primary-soft);
  border-radius: 999px;
  color: var(--primary-strong);
  font-size: 11px;
  font-weight: 800;
  padding: 4px 8px;
}
.grade-badge {
  background: #f1f5f9;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  padding: 4px 10px;
}
.grade-badge.high {
  background: var(--success-soft);
  color: var(--success);
}
.score-card h4 {
  font-size: 15px;
  line-height: 1.3;
  margin: 0;
}
.chapter-label {
  color: var(--muted);
  font-size: 12px;
  margin: 0;
}
.score-bar-wrap {
  background: #e2e8f0;
  border-radius: 999px;
  height: 8px;
  overflow: hidden;
}
.score-bar {
  background:
    linear-gradient(
      90deg,
      var(--primary-bright),
      var(--accent));
  border-radius: 999px;
  height: 100%;
  min-width: 4px;
}
.score-footer {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.percent-pill {
  background: var(--primary-soft);
  border-radius: 999px;
  color: var(--primary-strong);
  font-size: 12px;
  font-weight: 800;
  padding: 4px 8px;
}
.premium-empty {
  align-items: center;
  background:
    linear-gradient(
      180deg,
      #f8fafc,
      #ffffff);
  border: 1px dashed #cbd5e1;
  border-radius: 16px;
  display: grid;
  gap: var(--space-2);
  justify-items: center;
  padding: var(--space-8);
  text-align: center;
}
.premium-empty span {
  color: var(--muted);
  font-size: 13px;
}
.attendance-calendar {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: var(--space-4);
}
.att-day {
  align-items: center;
  border-radius: 8px;
  display: inline-flex;
  font-size: 11px;
  font-weight: 800;
  height: 28px;
  justify-content: center;
  width: 28px;
}
.att-day[data-status=present] {
  background: var(--success-soft);
  color: var(--success);
}
.att-day[data-status=absent] {
  background: var(--danger-soft);
  color: var(--danger);
}
.att-day[data-status=late],
.att-day[data-status=half_day] {
  background: var(--warning-soft);
  color: var(--warning);
}
.absent-date-chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-2);
}
.absent-date-chip {
  background: var(--danger-soft);
  border: 1px solid #fecaca;
  border-radius: 999px;
  color: var(--danger-strong, var(--danger));
  font-size: 12px;
  font-weight: 600;
  padding: 3px 10px;
}
.subject-bars {
  display: grid;
  gap: var(--space-3);
}
.subject-bar-row {
  align-items: center;
  display: grid;
  gap: var(--space-2);
  grid-template-columns: 80px 1fr 40px;
}
.bar-track {
  background: #e2e8f0;
  border-radius: 999px;
  height: 8px;
  overflow: hidden;
}
.bar-fill {
  background:
    linear-gradient(
      90deg,
      #7c3aed,
      var(--primary));
  height: 100%;
}
.results-section {
  background:
    linear-gradient(
      180deg,
      #ffffff,
      #f8fbff);
}
.form-card {
  background:
    linear-gradient(
      180deg,
      #ffffff,
      var(--surface-soft));
}
.sidebar {
  background: var(--surface-raised);
}
.topbar {
  background:
    linear-gradient(
      135deg,
      #ffffff,
      var(--surface-soft));
}
.login-shell {
  align-items: center;
  background:
    radial-gradient(
      circle at 85% 15%,
      rgba(20, 184, 166, 0.22),
      transparent 40%),
    radial-gradient(
      circle at 15% 85%,
      rgba(15, 118, 110, 0.18),
      transparent 35%),
    linear-gradient(
      135deg,
      #05191d 0%,
      #0a2a33 45%,
      #102a2e 100%);
  display: grid;
  min-height: 100vh;
  padding: var(--space-6);
  place-items: center;
}
.login-layout {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: minmax(280px, 1.1fr) minmax(320px, 420px);
  max-width: 1080px;
  width: 100%;
}
.login-brand-panel {
  align-content: center;
  color: #f8fafc;
  display: grid;
  gap: var(--space-6);
  padding: var(--space-4);
}
.login-brand-content h1 {
  font-size: clamp(32px, 5vw, 48px);
  line-height: 1.08;
  margin: var(--space-2) 0;
}
.login-school-logo {
  display: block;
  max-height: 56px;
  max-width: 180px;
  margin: 0 0 12px;
  object-fit: contain;
}
.nav-school-logo {
  display: block;
  max-height: 32px;
  max-width: 120px;
  margin-bottom: 4px;
  object-fit: contain;
}
.login-brand-content .login-copy,
.login-hint,
.login-footer-note {
  color: rgba(248, 250, 252, 0.78);
  line-height: 1.6;
}
.role-grid {
  display: grid;
  gap: var(--space-3);
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.role-card {
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: var(--radius-lg);
  box-shadow: none;
  color: #f8fafc;
  display: grid;
  gap: var(--space-1);
  justify-items: start;
  min-height: 108px;
  padding: var(--space-4);
  text-align: left;
  transform: none;
  transition:
    background 180ms ease,
    border-color 180ms ease,
    transform 180ms ease;
  white-space: normal;
  width: 100%;
}
.role-card strong {
  font-size: 15px;
}
.role-card span:last-child {
  color: rgba(248, 250, 252, 0.72);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.45;
}
.role-card:hover:not(:disabled),
.role-card.active {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.42);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
  color: #ffffff;
  transform: translateY(-2px);
}
.role-icon {
  align-items: center;
  background: rgba(255, 255, 255, 0.14);
  border-radius: 10px;
  display: inline-flex;
  font-size: 18px;
  height: 40px;
  justify-content: center;
  width: 40px;
}
.role-icon::before {
  content: "\\1f464";
}
.role-icon[data-role=admin]::before {
  content: "\\1f6e1\\fe0f";
}
.role-icon[data-role=teacher]::before {
  content: "\\1f4da";
}
.role-icon[data-role=student]::before {
  content: "\\1f393";
}
.role-icon[data-role=parent]::before {
  content: "\\1f468\\200d\\1f469\\200d\\1f467";
}
.login-card {
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
  display: grid;
  gap: var(--space-5);
  padding: var(--space-8);
}
.login-card-header {
  display: grid;
  gap: var(--space-2);
}
.login-card-header h2 {
  font-size: 28px;
  line-height: 1.15;
}
.login-submit {
  width: 100%;
}
.login-footer-note {
  font-size: 12px;
  margin: 0;
  text-align: center;
}
.role-pill {
  align-items: center;
  background: var(--primary-soft);
  border: 1px solid #99f6e4;
  border-radius: 999px;
  color: var(--primary-strong);
  display: inline-flex;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.04em;
  padding: 6px 12px;
  text-transform: capitalize;
  width: fit-content;
}
.role-pill.small {
  font-size: 11px;
  padding: 4px 10px;
}
.role-pill.inline {
  vertical-align: middle;
}
.role-pill[data-role=admin] {
  background: var(--primary-soft);
  border-color: #99f6e4;
  color: var(--primary-strong);
}
.role-pill[data-role=teacher] {
  background: #ecfdf5;
  border-color: #a7f3d0;
  color: #047857;
}
.role-pill[data-role=student] {
  background: #fff7ed;
  border-color: #fed7aa;
  color: #c2410c;
}
.role-pill[data-role=parent] {
  background: #fdf4ff;
  border-color: #f5d0fe;
  color: #a21caf;
}
.avatar[data-role=admin] {
  background:
    linear-gradient(
      135deg,
      var(--primary-bright),
      var(--primary-strong));
}
.avatar[data-role=teacher] {
  background:
    linear-gradient(
      135deg,
      #059669,
      #047857);
}
.avatar[data-role=student] {
  background:
    linear-gradient(
      135deg,
      #ea580c,
      #c2410c);
}
.avatar[data-role=parent] {
  background:
    linear-gradient(
      135deg,
      #c026d3,
      #a21caf);
}
.card-soft {
  background: var(--surface-soft);
}
.toast {
  border-radius: var(--radius-lg);
  font-weight: 600;
  padding: var(--space-3) var(--space-4);
}
.toast.success {
  background: var(--success-soft);
  border: 1px solid #abefc6;
  color: var(--success);
}
.toast.muted,
.toast.error,
.status.error {
  background: var(--surface-soft);
  border: 1px solid var(--border);
  color: var(--muted);
}
.status.error {
  background: var(--danger-soft);
  border-color: #fecdca;
  color: var(--danger);
}
.field-label span {
  color: var(--text-soft);
  font-size: 13px;
  font-weight: 650;
}
.search-box {
  align-items: center;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  display: flex;
  flex: 1 1 240px;
  gap: var(--space-2);
  min-height: 42px;
  padding: 0 12px;
  transition: border-color 160ms ease, box-shadow 160ms ease;
}
.search-box:focus-within {
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(13, 148, 136, 0.12);
}
.search-box::before {
  color: var(--muted);
  content: "\\2315";
  font-size: 16px;
  font-weight: 700;
}
.search-box input,
.search-box select {
  border: 0;
  box-shadow: none;
  min-height: 40px;
  padding: 0;
}
.search-box input:focus,
.search-box select:focus {
  box-shadow: none;
}
.filter-select {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  flex: 0 1 180px;
  min-height: 42px;
  padding: 10px 12px;
}
.data-card {
  background: var(--surface-raised);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  display: grid;
  gap: 0;
  min-width: 0;
  overflow: hidden;
}
.data-card .section-head {
  background:
    linear-gradient(
      180deg,
      #fbfdff,
      #ffffff);
  border-bottom: 1px solid var(--border-soft);
  margin-bottom: 0;
  padding: var(--space-5) var(--space-6);
}
.data-card .toolbar,
.data-card .listing-toolbar,
.data-card .table-wrap,
.data-card .pagination-bar {
  margin: 0;
}
.data-card .toolbar,
.data-card .listing-toolbar {
  border-bottom: 1px solid var(--border-soft);
  margin-bottom: 0;
  padding: var(--space-4) var(--space-6);
}
.data-card .table-wrap {
  border: 0;
  border-radius: 0;
}
.data-card .pagination-bar {
  background: var(--surface-soft);
  border-top: 1px solid var(--border-soft);
  padding: var(--space-4) var(--space-6);
}
.pagination-bar {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  justify-content: space-between;
}
.pagination-meta {
  color: var(--muted);
  font-size: 13px;
}
.pagination-controls {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}
.pagination-nav {
  align-items: center;
  display: inline-flex;
  gap: var(--space-2);
}
.pagination-nav-btn {
  gap: var(--space-1);
  min-height: 36px;
  min-width: 88px;
  padding-inline: 12px;
}
.pagination-nav-icon {
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
}
.pagination-page-nums {
  align-items: center;
  display: inline-flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}
.notification-menu-wrap {
  position: relative;
}
.notification-backdrop {
  background: rgba(15, 23, 42, 0.45);
  display: none;
  inset: 0;
  position: fixed;
  z-index: 250;
}
.notification-button {
  min-height: 42px;
  min-width: 42px;
  padding: 8px 10px;
  position: relative;
}
.notification-badge {
  align-items: center;
  background: var(--danger);
  border-radius: 999px;
  color: #fff;
  display: inline-flex;
  font-size: 10px;
  font-weight: 800;
  height: 18px;
  justify-content: center;
  min-width: 18px;
  padding: 0 4px;
  position: absolute;
  right: 4px;
  top: 4px;
}
.notification-menu {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  display: grid;
  gap: var(--space-2);
  max-height: min(420px, 70vh);
  max-width: min(360px, calc(100vw - 32px));
  min-width: 280px;
  overflow: auto;
  padding: var(--space-2);
  position: absolute;
  right: 0;
  top: calc(100% + var(--space-2));
  z-index: 300;
  width: min(360px, calc(100vw - 32px));
}
.notification-menu-header {
  align-items: center;
  border-bottom: 1px solid var(--border-soft);
  display: flex;
  gap: var(--space-2);
  justify-content: space-between;
  padding: var(--space-2) var(--space-1) var(--space-3);
}
.notification-count {
  color: var(--muted);
  font-size: 12px;
  white-space: nowrap;
}
.notification-loading,
.notification-empty {
  color: var(--muted);
  font-size: 13px;
  padding: var(--space-4) var(--space-2);
  text-align: center;
}
.notification-item {
  background: var(--surface-soft);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  display: grid;
  gap: var(--space-2);
  padding: var(--space-2);
}
.notification-item-main {
  background: transparent;
  border: 0;
  border-radius: var(--radius);
  box-shadow: none;
  color: inherit;
  display: grid;
  gap: var(--space-2);
  justify-content: stretch;
  min-height: 0;
  padding: var(--space-2);
  text-align: left;
  transform: none;
  width: 100%;
}
.notification-item-main:hover {
  background: var(--primary-soft);
  transform: none;
}
.notification-item-head {
  align-items: flex-start;
  display: flex;
  gap: var(--space-2);
  justify-content: space-between;
}
.notification-item p {
  color: var(--text-soft);
  font-size: 13px;
  line-height: 1.45;
}
.notification-action {
  color: var(--primary);
  font-size: 12px;
  font-weight: 700;
}
.notification-dismiss {
  justify-self: start;
  margin-top: var(--space-1);
}
.pagination-controls .page-num {
  min-width: 32px;
  height: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  border-radius: var(--radius);
}
.pagination-controls .page-num.active-page {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}
.pagination-pages {
  color: var(--text-soft);
  font-size: 13px;
  font-weight: 700;
  min-width: 96px;
  text-align: center;
}
textarea {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  font: inherit;
  min-height: 84px;
  padding: 10px 12px;
  resize: vertical;
  width: 100%;
}
textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(13, 148, 136, 0.12);
  outline: none;
}
.question-block {
  background: var(--surface-soft);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  display: grid;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
  padding: var(--space-4);
}
.option-row {
  align-items: center;
  display: flex;
  font-weight: 500;
  gap: var(--space-2);
}
.status-badge.draft {
  background: #f1f5f9;
  color: #475569;
}
.status-badge.published {
  background: var(--success-soft);
  color: var(--success);
}
.status-badge.closed {
  background: var(--danger-soft);
  color: var(--danger);
}
.status-badge.graded {
  background: var(--primary-soft);
  color: var(--primary-strong);
}
.module-card-grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: repeat(auto-fit, minmax(148px, 1fr));
}
.module-card {
  background:
    linear-gradient(
      180deg,
      #ffffff,
      var(--surface-soft));
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  color: var(--text);
  display: grid;
  gap: var(--space-2);
  justify-items: start;
  min-height: 96px;
  padding: var(--space-4);
  text-align: left;
  transform: none;
  white-space: normal;
  width: 100%;
}
.module-card:hover:not(:disabled) {
  border-color: #99f6e4;
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
.module-card strong {
  font-size: 15px;
}
.module-card span {
  color: var(--muted);
  font-size: 12px;
  font-weight: 500;
}
.login-card form,
form {
  display: grid;
  gap: var(--space-4);
}
.compact-submit {
  justify-self: start;
  width: auto;
}
.upi-modal {
  max-width: 380px;
}
.upi-body {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  text-align: center;
}
.upi-amount {
  color: var(--text-soft);
  font-size: var(--text-body);
}
.upi-amount strong {
  color: var(--text);
  display: block;
  font-size: 22px;
  margin-top: 2px;
}
.upi-qr-wrap {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-3);
}
.upi-qr {
  display: block;
  height: 220px;
  width: 220px;
}
.upi-details {
  display: grid;
  gap: var(--space-2);
  width: 100%;
}
.upi-detail {
  align-items: center;
  background: var(--surface-soft);
  border-radius: var(--radius);
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
}
.upi-detail span {
  color: var(--muted);
  font-size: 13px;
}
.upi-app-btn {
  text-align: center;
  text-decoration: none;
  width: 100%;
}
.upi-hint {
  font-size: 12px;
}
.app-shell {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: 288px minmax(0, 1fr);
  min-height: 100vh;
  padding: var(--space-6);
}
.sidebar {
  align-self: start;
  background: var(--surface-raised);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  max-height: calc(100vh - 48px);
  min-width: 0;
  overflow-y: auto;
  padding: var(--space-5);
  position: sticky;
  top: var(--space-6);
}
.sidebar.collapsed {
  width: 88px;
}
.sidebar.collapsed .brand-full,
.sidebar.collapsed .eyebrow,
.sidebar.collapsed .nav-label,
.sidebar.collapsed .sidebar-profile {
  display: none;
}
.sidebar.collapsed .brand-short {
  color: var(--primary-strong);
  display: inline-flex;
}
.sidebar-header,
.topbar,
.section-head,
.actions,
.toolbar,
.table-actions,
.pagination,
.quick-actions,
.segmented {
  align-items: center;
  display: flex;
  gap: var(--space-3);
}
.sidebar-header,
.topbar,
.section-head {
  justify-content: space-between;
}
.sidebar .eyebrow {
  color: var(--muted);
}
.sidebar-header {
  color: var(--text);
}
.brand-block {
  display: grid;
  gap: var(--space-1);
  min-width: 0;
}
.brand-full {
  color: var(--primary-strong);
  font-size: 24px;
  font-weight: 800;
  line-height: 1;
  margin: 0;
}
.brand-short {
  align-items: center;
  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--accent));
  border-radius: var(--radius);
  color: #ffffff;
  display: none;
  font-weight: 800;
  height: 40px;
  justify-content: center;
  width: 40px;
}
.sidebar-toggle {
  background: var(--surface-soft);
  border-color: var(--border);
  color: var(--text-soft);
  transition: background 160ms ease, color 160ms ease;
}
.sidebar-toggle:hover {
  background: var(--primary-soft);
  color: var(--primary);
}
.sidebar-accent {
  background:
    linear-gradient(
      90deg,
      var(--primary),
      var(--accent));
  border-radius: 2px;
  height: 3px;
  width: 100%;
}
.nav-list {
  display: grid;
  gap: var(--space-2);
}
.nav-list button {
  background: transparent;
  border: 1px solid transparent;
  border-left: 3px solid transparent;
  border-radius: var(--radius);
  box-shadow: none;
  color: var(--text-soft);
  justify-content: flex-start;
  min-width: 0;
  padding: var(--space-2);
  transition:
    background 160ms ease,
    color 160ms ease,
    border-color 160ms ease;
  width: 100%;
}
.nav-list button:hover,
.nav-list button.active {
  background: var(--primary-soft);
  border-left-color: var(--primary);
  box-shadow: none;
  color: var(--primary-strong);
}
.nav-icon {
  align-items: center;
  background: var(--surface-soft);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  color: #64748b;
  display: inline-flex;
  flex: 0 0 36px;
  height: 36px;
  justify-content: center;
  transition:
    background 160ms ease,
    color 160ms ease,
    border-color 160ms ease;
}
.nav-list button.active .nav-icon,
.nav-list button:hover .nav-icon {
  background: var(--primary);
  border-color: var(--primary);
  color: #ffffff;
}
.sidebar-profile,
.topbar,
.panel,
.metric-card,
.page-hero {
  background: var(--surface-raised);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}
.sidebar-profile {
  background: var(--surface-soft);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  display: grid;
  gap: var(--space-1);
  margin-top: auto;
  padding: var(--space-4);
}
.sidebar-profile strong {
  color: var(--text);
}
.sidebar-profile .eyebrow {
  color: var(--muted);
}
.sidebar-profile span {
  color: var(--muted);
}
.topbar p,
.login-copy,
.page-hero p,
.helper-text {
  color: var(--muted);
}
.main-panel {
  display: grid;
  gap: var(--space-5);
  min-width: 0;
}
.topbar {
  min-width: 0;
  padding: var(--space-5) var(--space-6);
}
.topbar-title {
  display: grid;
  gap: var(--space-1);
  min-width: 220px;
}
.topbar-title h2 {
  font-size: clamp(26px, 3vw, 36px);
  line-height: 1.08;
}
.topbar h2,
.page-hero h3,
.section-head h3,
h1,
h2,
h3,
p {
  margin: 0;
}
.profile-menu-wrap {
  position: relative;
}
.action-button,
.profile-trigger {
  min-height: 42px;
}
.profile-trigger {
  background: var(--surface);
  border-color: var(--border);
  box-shadow: none;
  color: var(--text);
  padding: 6px 10px 6px 6px;
}
.avatar {
  align-items: center;
  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--accent));
  border-radius: 999px;
  color: #ffffff;
  display: inline-flex;
  font-weight: 800;
  height: 32px;
  justify-content: center;
  width: 32px;
}
.chevron {
  color: var(--muted);
  font-size: 12px;
}
.profile-menu {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  display: grid;
  gap: var(--space-1);
  min-width: 232px;
  padding: var(--space-2);
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  z-index: 20;
}
.profile-menu-header {
  border-bottom: 1px solid var(--border-soft);
  display: grid;
  gap: var(--space-1);
  padding: var(--space-3);
}
.profile-menu-header span {
  color: var(--muted);
  font-size: 12px;
}
.menu-item {
  background: var(--surface);
  border-color: transparent;
  box-shadow: none;
  color: var(--text);
  justify-content: flex-start;
}
.menu-item.danger {
  color: var(--danger);
}
.my-profile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1250;
  padding: 24px;
}
.my-profile-modal {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  max-width: 520px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  padding: var(--space-6);
  display: grid;
  gap: var(--space-5);
}
.my-profile-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
}
.my-profile-header h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
}
.my-profile-avatar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: var(--surface-soft);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
}
.my-profile-avatar .avatar.large {
  width: 56px;
  height: 56px;
  font-size: 22px;
  font-weight: 700;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.my-profile-name {
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 4px;
}
.my-profile-section-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding-bottom: 6px;
  border-bottom: 2px solid var(--primary-soft);
}
.my-profile-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.my-profile-field {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 10px 14px;
  background: var(--surface-soft);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
}
.my-profile-label {
  font-size: 11px;
  font-weight: 700;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.my-profile-value {
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  word-break: break-word;
}
.class-chip {
  display: inline-block;
  padding: 3px 10px;
  background: var(--primary-soft);
  color: var(--primary);
  font-size: 12px;
  font-weight: 700;
  border-radius: 12px;
  margin-right: 6px;
  margin-bottom: 4px;
}
.subject-picker {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.subject-picker-row {
  align-items: center;
  display: flex;
  gap: var(--space-2);
}
.subject-picker-row select {
  flex: 1 1 auto;
}
.subject-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.subject-chips .class-chip {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  margin: 0;
}
.chip-remove {
  background: transparent;
  border: 0;
  box-shadow: none;
  color: inherit;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  min-height: 0;
  padding: 0 2px;
}
.teacher-docs-section {
  border-top: 1px solid var(--border-soft);
  padding-top: var(--space-4);
}
.teacher-docs-section h4 {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: var(--space-3);
  color: var(--text);
}
.doc-upload-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  cursor: pointer;
}
.my-profile-field {
  align-items: flex-start;
}
.my-profile-field .doc-upload-label {
  align-self: flex-start;
  justify-content: flex-start;
  text-align: left;
}
.doc-upload-label.compact {
  margin-top: 0;
  padding: 6px 12px;
  border: 1px dashed var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.doc-upload-label input[type=file] {
  display: none;
}
.doc-upload-label span {
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 700;
  background: var(--primary-soft);
  color: var(--primary);
  border-radius: var(--radius);
  transition: background 150ms ease;
}
.doc-upload-label.compact span {
  padding: 0;
  background: none;
  color: var(--text);
  font-weight: 500;
}
.doc-upload-label:hover span {
  background: var(--primary);
  color: #fff;
}
.doc-upload-label.compact:hover span {
  background: none;
  color: var(--primary);
}
.exp-edu-list {
  display: grid;
  gap: 8px;
  margin-bottom: 12px;
}
.exp-edu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: var(--surface-soft);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
}
.exp-edu-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.exp-edu-main strong {
  font-size: 13px;
}
.exp-edu-main .muted {
  font-size: 12px;
}
.exp-edu-dates {
  font-size: 11px;
  font-weight: 700;
  color: var(--primary);
  white-space: nowrap;
}
.exp-edu-form {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
.exp-edu-form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 8px;
  align-items: end;
}
.exp-edu-form-grid input,
.exp-edu-form input {
  padding: 8px 12px;
  font-size: 13px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  color: var(--text);
  min-width: 0;
}
.mandatory {
  color: var(--danger);
  font-weight: 700;
}
.reject-reason {
  font-size: 11px;
  color: var(--danger);
  font-weight: 600;
  margin-top: 4px;
}
.verify-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  margin-top: 8px;
}
.reject-input {
  flex: 1;
  min-width: 120px;
  padding: 6px 10px;
  font-size: 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  color: var(--text);
}
.doc-attached {
  font-size: 11px;
  color: var(--success);
}
.document-card-enhanced {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background:
    linear-gradient(
      180deg,
      #ffffff 0%,
      #f8fbfa 100%);
  margin-bottom: 10px;
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
  transition: transform 160ms ease, box-shadow 160ms ease;
}
.document-card-enhanced:hover {
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
  transform: translateY(-1px);
}
.document-card-enhanced.doc-approved {
  border-color: rgba(16, 185, 129, 0.35);
  background:
    linear-gradient(
      180deg,
      #f0fdf8 0%,
      #ffffff 100%);
}
.document-card-enhanced.doc-rejected {
  border-color: rgba(239, 68, 68, 0.35);
  background:
    linear-gradient(
      180deg,
      #fff7f7 0%,
      #ffffff 100%);
}
.document-card-enhanced.doc-pending {
  border-color: rgba(245, 158, 11, 0.3);
}
.document-vault-panel {
  background:
    linear-gradient(
      180deg,
      #ffffff 0%,
      #f6faf9 100%);
}
.vault-student-select select {
  width: 100%;
}
.doc-card-title-wrap {
  align-items: center;
  display: flex;
  gap: 10px;
  min-width: 0;
}
.doc-type-icon {
  align-items: center;
  background: var(--primary-soft);
  border-radius: 10px;
  display: inline-flex;
  font-size: 18px;
  height: 38px;
  justify-content: center;
  width: 38px;
}
.doc-approved-note {
  align-items: center;
  background: var(--success-soft);
  border-radius: var(--radius);
  color: var(--success);
  display: flex;
  font-size: 12px;
  font-weight: 600;
  gap: 6px;
  margin: 0;
  padding: 8px 10px;
}
.doc-approved-check {
  font-size: 14px;
  font-weight: 800;
}
.doc-primary-actions {
  gap: 8px;
}
.doc-view-btn,
.doc-download-btn {
  align-items: center;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  cursor: pointer;
  display: inline-flex;
  font-size: 12px;
  font-weight: 700;
  gap: 6px;
  padding: 8px 12px;
  transition: background 140ms ease, border-color 140ms ease;
}
.doc-view-btn {
  background: var(--primary-soft);
  border-color: rgba(15, 118, 110, 0.2);
  color: var(--primary);
}
.doc-view-btn:hover {
  background: rgba(15, 118, 110, 0.14);
}
.doc-download-btn {
  background: #fff;
  color: var(--text);
}
.doc-download-btn:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
}
.doc-admin-row {
  border-top: 1px dashed var(--border);
  padding-top: 8px;
}
.replace-doc-label {
  align-items: center;
  background: #fff;
  border: 1px dashed #cbd5e1;
  border-radius: var(--radius);
  cursor: pointer;
  display: inline-flex;
  font-size: 12px;
  font-weight: 600;
  gap: 8px;
  padding: 7px 10px;
}
.replace-doc-label input[type=file] {
  max-width: 180px;
}
.replace-doc-text {
  color: var(--muted);
}
.doc-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
}
.doc-card-header strong {
  font-size: 13px;
  color: var(--text);
  flex: 1;
  min-width: 0;
}
.status-badge.doc-status {
  flex-shrink: 0;
  font-size: 11px;
  font-weight: 700;
  line-height: 1.2;
  padding: 4px 10px;
  margin-left: 0;
  text-transform: capitalize;
  white-space: nowrap;
}
.doc-card-type {
  font-size: 11px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}
.doc-view-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;
  padding: 6px 12px;
  border: 1px solid var(--primary);
  border-radius: var(--radius);
  transition: all 150ms ease;
  width: fit-content;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
}
.doc-view-link:hover {
  background: var(--primary);
  color: #fff;
}
.doc-view-link.inline {
  display: inline-flex;
  margin-left: 8px;
  padding: 3px 10px;
  font-size: 11px;
  border: 1px solid var(--primary);
  background: var(--primary-soft);
  border-radius: 4px;
}
.doc-view-link.inline:hover {
  background: var(--primary);
  color: #fff;
}
.doc-view-icon {
  font-size: 14px;
}
.status-badge.small {
  font-size: 10px;
  padding: 2px 6px;
  margin-left: 6px;
}
.status-badge.approved {
  background: var(--success-soft);
  color: var(--success);
}
.status-badge.rejected {
  background: var(--danger-soft);
  color: var(--danger);
}
.span-2-field {
  grid-column: 1 / -1;
}
.chip-value {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
}
.teacher-docs-section .my-profile-value:not(.muted) {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}
.teacher-docs-section .my-profile-value .status-badge.small {
  margin-left: 0;
}
.doc-view-btn {
  margin-left: auto;
}
.teacher-docs-section .my-profile-field {
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  gap: 8px;
  padding: 14px 16px;
}
.teacher-docs-section .doc-upload-label {
  margin-top: auto;
}
.teacher-docs-section .doc-upload-label span {
  background: var(--surface-soft);
  border: 1px dashed var(--border);
  color: var(--text-soft);
  font-weight: 600;
}
.teacher-docs-section .doc-upload-label:hover span {
  background: var(--primary-soft);
  border-color: var(--primary);
  color: var(--primary);
}
.exp-edu-head {
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
}
.exp-edu-head h4 {
  margin: 0;
}
.exp-add-toggle {
  align-items: center;
  border-radius: 999px;
  display: inline-flex;
  font-size: 18px;
  font-weight: 700;
  height: 30px;
  justify-content: center;
  line-height: 1;
  min-width: 0;
  padding: 0;
  width: 30px;
}
.form-grid .field-hint.span-2 {
  grid-column: 1 / -1;
  margin: 0;
}
.teacher-avatar {
  overflow: hidden;
  position: relative;
}
.teacher-avatar.has-photo {
  background: var(--surface-soft) !important;
}
.teacher-avatar img {
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
}
.exp-edu-item {
  gap: 16px;
  padding: 12px 16px;
}
.exp-edu-main .doc-attached {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
}
.exp-edu-dates {
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: 999px;
  color: var(--text-soft);
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
}
@media (max-width: 560px) {
  .my-profile-modal {
    padding: var(--space-4);
    max-height: 90vh;
  }
  .my-profile-grid {
    grid-template-columns: 1fr;
  }
  .exp-edu-item {
    flex-wrap: wrap;
    gap: 8px;
  }
}
.self-attendance-card {
  border: 2px dashed var(--primary-soft);
  text-align: center;
  transition: border-color 0.3s, background 0.3s;
}
.self-attendance-card.marked {
  border-color: var(--success);
  background:
    linear-gradient(
      135deg,
      rgba(34, 197, 94, 0.04),
      rgba(34, 197, 94, 0.01));
  border-style: solid;
}
.self-attendance-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 12px 0 4px;
}
.self-attendance-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  background: var(--primary-soft);
  transition: background 0.3s;
}
.self-attendance-icon.done {
  background: var(--success-soft);
}
.self-attendance-date {
  font-size: 14px;
  font-weight: 600;
  color: var(--muted);
}
.self-attendance-status {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.self-mark-btn {
  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--primary-strong));
  color: #fff;
  border: none;
  border-radius: var(--radius);
  padding: 12px 32px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.25);
}
.self-mark-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.35);
}
.self-mark-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.attendance-calendar-section {
  min-height: 400px;
}
.view-toggle-bar {
  display: flex;
  gap: 4px;
  background: var(--surface-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 3px;
}
.view-toggle-btn {
  padding: 6px 14px;
  border: none;
  border-radius: calc(var(--radius) - 2px);
  background: transparent;
  font-size: 12px;
  font-weight: 700;
  color: var(--muted);
  cursor: pointer;
  transition: all 0.2s;
}
.view-toggle-btn.active {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 2px 6px rgba(99, 102, 241, 0.25);
}
.attendance-calendar {
  display: grid;
  gap: 16px;
  padding-top: 12px;
}
.calendar-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}
.calendar-nav {
  display: flex;
  align-items: center;
  gap: 8px;
}
.calendar-month-label {
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  min-width: 180px;
  text-align: center;
}
.today-btn {
  font-size: 11px !important;
  padding: 4px 10px !important;
}
.calendar-stats {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.cal-stat {
  font-size: 12px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
}
.cal-stat.present {
  background: var(--success-soft);
  color: var(--success);
}
.cal-stat.absent {
  background: var(--danger-soft);
  color: var(--danger);
}
.cal-stat.late {
  background: var(--warning-soft);
  color: var(--warning);
}
.cal-stat.total {
  background: var(--surface-soft);
  color: var(--text);
  border: 1px solid var(--border);
}
.calendar-legend {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--muted);
}
.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.legend-dot.present {
  background: var(--success);
}
.legend-dot.absent {
  background: var(--danger);
}
.legend-dot.late {
  background: var(--warning);
}
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--border);
}
.calendar-weekday {
  padding: 10px 4px;
  text-align: center;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--muted);
  background: var(--surface-soft);
}
.calendar-cell {
  position: relative;
  padding: 10px 8px;
  min-height: 60px;
  background: var(--surface);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  transition: background 0.15s;
}
.calendar-cell.other-month {
  background: var(--surface-soft);
  opacity: 0.4;
}
.calendar-cell.today {
  background: var(--primary-soft);
  box-shadow: inset 0 0 0 2px var(--primary);
}
.calendar-cell.has-record[data-status=present] {
  background: rgba(34, 197, 94, 0.06);
}
.calendar-cell.has-record[data-status=absent] {
  background: rgba(239, 68, 68, 0.06);
}
.calendar-cell.has-record[data-status=late],
.calendar-cell.has-record[data-status=half_day] {
  background: rgba(245, 158, 11, 0.06);
}
.calendar-cell.has-record[data-status=mixed] {
  background: rgba(99, 102, 241, 0.06);
}
.cell-day {
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
}
.cell-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.cell-indicator.present {
  background: var(--success);
}
.cell-indicator.absent {
  background: var(--danger);
}
.cell-indicator.late,
.cell-indicator.half_day {
  background: var(--warning);
}
.cell-indicator.mixed {
  background: var(--primary);
}
.cell-count {
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 800;
  background: var(--primary);
  color: #fff;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.calendar-cell.is-sunday {
  background: rgba(148, 163, 184, 0.08);
}
.calendar-cell.is-holiday {
  background: rgba(168, 85, 247, 0.08);
}
.cell-holiday-label {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 900;
  background: #a855f7;
  color: #fff;
}
.cell-sunday-label {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 900;
  background: #94a3b8;
  color: #fff;
}
.legend-dot.holiday {
  background: #a855f7;
}
.legend-dot.sunday {
  background: #94a3b8;
}
.holiday-card {
  display: grid;
  gap: var(--space-4);
}
.holiday-card label {
  display: grid;
  gap: 4px;
  font-size: 13px;
  font-weight: 600;
}
.holiday-card button {
  justify-self: start;
  margin-top: 4px;
}
.holiday-list {
  max-height: 200px;
  overflow-y: auto;
  display: grid;
  gap: 6px;
  margin-top: 8px;
}
.holiday-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: var(--surface-soft);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
}
.holiday-date {
  font-size: 12px;
  font-weight: 700;
  color: var(--primary);
  min-width: 80px;
}
.holiday-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  flex: 1;
}
@media (max-width: 768px) {
  .calendar-cell {
    min-height: 44px;
    padding: 6px 4px;
  }
  .cell-day {
    font-size: 12px;
  }
  .calendar-month-label {
    font-size: 15px;
    min-width: auto;
  }
  .calendar-stats {
    gap: 6px;
  }
  .calendar-toolbar {
    flex-direction: column;
    align-items: flex-start;
  }
}
.exam-result-modal {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  max-width: 580px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  padding: var(--space-6);
  display: grid;
  gap: var(--space-5);
}
.exam-result-summary {
  display: flex;
  gap: 24px;
  align-items: center;
}
.exam-result-score-ring {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 5px solid var(--border);
  background: var(--surface-soft);
  transition: border-color 0.3s;
}
.exam-result-score-ring.pass {
  border-color: var(--success);
  background: var(--success-soft);
}
.exam-result-score-ring.fail {
  border-color: var(--danger);
  background: var(--danger-soft);
}
.ring-percent {
  font-size: 24px;
  font-weight: 800;
  color: var(--text);
  line-height: 1;
}
.ring-label {
  font-size: 11px;
  font-weight: 700;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.exam-result-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  flex: 1;
}
.grade-big {
  font-size: 20px;
  font-weight: 800;
}
.grade-big.high {
  color: var(--success);
}
.exam-result-answers {
  display: grid;
  gap: 12px;
}
.answer-list {
  display: grid;
  gap: 8px;
}
.answer-card {
  padding: 12px 16px;
  border-radius: var(--radius);
  border-left: 4px solid var(--border);
  background: var(--surface-soft);
  display: grid;
  gap: 4px;
}
.answer-card.correct {
  border-left-color: var(--success);
  background: rgba(34, 197, 94, 0.04);
}
.answer-card.wrong {
  border-left-color: var(--danger);
  background: rgba(239, 68, 68, 0.04);
}
.answer-header {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
}
.answer-marks {
  color: var(--muted);
  font-weight: 600;
}
.answer-verdict {
  margin-left: auto;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.answer-card.correct .answer-verdict {
  color: var(--success);
}
.answer-card.wrong .answer-verdict {
  color: var(--danger);
}
.answer-text {
  font-size: 13px;
  color: var(--text);
}
.result-view-btn {
  color: var(--primary) !important;
  font-weight: 700 !important;
}
@media (max-width: 560px) {
  .exam-result-summary {
    flex-direction: column;
  }
  .exam-result-stats {
    grid-template-columns: 1fr;
  }
  .exam-result-modal {
    padding: var(--space-4);
  }
}
.eyebrow {
  color: var(--muted);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.child-selector-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background:
    linear-gradient(
      135deg,
      var(--primary-soft),
      rgba(99, 102, 241, 0.08));
  border: 1px solid var(--primary-soft);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-4);
  flex-wrap: wrap;
}
.child-selector-label {
  font-size: 13px;
  font-weight: 700;
  color: var(--primary-strong);
  white-space: nowrap;
}
.child-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px 6px 6px;
  border: 2px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
}
.child-chip:hover {
  border-color: var(--primary);
  background: var(--primary-soft);
}
.child-chip.active {
  border-color: var(--primary);
  background: var(--primary);
  color: #fff;
}
.child-chip-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 800;
  background: var(--primary-soft);
  color: var(--primary-strong);
}
.child-chip.active .child-chip-avatar {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}
.child-chip-name {
  font-weight: 700;
}
.child-chip-class {
  font-size: 11px;
  font-weight: 600;
  opacity: 0.7;
}
.parent-child-card {
  padding: 14px;
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  background: var(--surface-soft);
}
.multi-child-select {
  display: grid;
  gap: 6px;
}
.multi-label {
  font-size: 13px;
  font-weight: 700;
  color: var(--muted);
}
.multi-child-list {
  max-height: 160px;
  overflow-y: auto;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 6px;
  display: grid;
  gap: 2px;
}
.child-check-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.15s;
}
.child-check-row:hover {
  background: var(--surface-soft);
}
.clickable {
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}
.clickable:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
.status {
  background: var(--success-soft);
  border: 1px solid #abefc6;
  border-radius: var(--radius);
  color: var(--success);
  padding: var(--space-3) var(--space-4);
}
.status.muted,
.muted {
  background: var(--surface-soft);
  border-color: var(--border);
  color: var(--muted);
}
.workspace {
  display: grid;
  gap: var(--space-5);
  grid-template-columns: repeat(12, minmax(0, 1fr));
  min-width: 0;
}
.span-4 {
  grid-column: span 4;
}
.span-5 {
  grid-column: span 5;
}
.span-6 {
  grid-column: span 6;
}
.span-7 {
  grid-column: span 7;
}
.span-8 {
  grid-column: span 8;
}
.span-12,
.page-hero,
.metrics-grid {
  grid-column: 1 / -1;
}
.panel,
.page-hero {
  min-width: 0;
  overflow: hidden;
  padding: var(--space-6);
}
.panel {
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease,
    transform 160ms ease;
}
.panel:hover {
  border-color: #cfdae6;
  box-shadow: var(--shadow-md);
}
.page-hero {
  align-items: flex-start;
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.96),
      rgba(238, 247, 245, 0.96)),
    linear-gradient(
      90deg,
      rgba(13, 148, 136, 0.1),
      rgba(20, 184, 166, 0.08));
  display: flex;
  gap: var(--space-5);
  justify-content: space-between;
}
.page-hero > div {
  display: grid;
  gap: var(--space-2);
  min-width: 0;
}
.page-hero h3 {
  font-size: clamp(24px, 3vw, 34px);
  line-height: 1.12;
}
.dash-welcome {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-5);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  background:
    linear-gradient(
      135deg,
      #05191d 0%,
      var(--primary-strong) 50%,
      var(--primary-bright) 100%);
  box-shadow: var(--shadow-md);
  color: #fff;
  position: relative;
  overflow: hidden;
  min-width: 0;
}
.dash-welcome::before {
  content: "";
  position: absolute;
  top: -60px;
  right: -40px;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
}
.dash-welcome::after {
  content: "";
  position: absolute;
  bottom: -80px;
  right: 80px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
}
.dash-welcome-text {
  display: grid;
  gap: 6px;
  min-width: 0;
  position: relative;
  z-index: 1;
}
.dash-greeting {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.7;
}
.dash-headline {
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 800;
  line-height: 1.15;
  margin: 0;
}
.dash-sub {
  font-size: 14px;
  opacity: 0.75;
  line-height: 1.5;
  max-width: 480px;
}
.dash-welcome-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}
.active-year-pill {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  padding: 8px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(6px);
}
.active-year-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: rgba(255, 255, 255, 0.72);
  font-weight: 700;
}
.active-year-pill strong {
  color: #fff;
  font-size: 14px;
}
.dash-welcome-actions .segmented {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
}
.dash-welcome-actions .segmented button {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
}
.dash-welcome-actions .segmented button:hover:not(:disabled),
.dash-welcome-actions .segmented button.active {
  background: rgba(255, 255, 255, 0.95);
  color: var(--primary-strong);
  border-color: transparent;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
.dash-date {
  font-size: 12px;
  opacity: 0.6;
  font-weight: 500;
}
.dash-stats {
  grid-column: 1 / -1;
  display: grid;
  gap: var(--space-4);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.dash-stat-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 22px 24px;
  border-radius: var(--radius-lg);
  background: var(--surface-raised);
  border: 1px solid var(--border);
  transition: transform 200ms ease, box-shadow 200ms ease;
  position: relative;
  overflow: hidden;
}
.dash-stat-card.clickable {
  cursor: pointer;
}
.dash-stat-card.clickable:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}
.clickable-row {
  cursor: pointer;
  transition: background 150ms ease;
}
.clickable-row:hover {
  background: var(--surface-soft) !important;
}
.success-btn {
  color: var(--success) !important;
  border-color: var(--success) !important;
  font-weight: 700;
}
.dash-stat-card::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
  border-radius: 0 0 0 80px;
  opacity: 0.06;
}
.dash-stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}
.dash-stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.dash-stat-icon svg {
  width: 22px;
  height: 22px;
}
.dash-stat-info {
  display: grid;
  gap: 4px;
  min-width: 0;
}
.dash-stat-info span {
  font-size: 12px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.dash-stat-info strong {
  font-size: clamp(20px, 2.5vw, 26px);
  font-weight: 800;
  color: var(--text);
  line-height: 1.1;
  overflow-wrap: anywhere;
}
.dash-stat-blue .dash-stat-icon {
  background: var(--primary-muted);
  color: var(--primary);
}
.dash-stat-blue::after {
  background: var(--primary);
}
.dash-stat-purple .dash-stat-icon {
  background: #ede9fe;
  color: #7c3aed;
}
.dash-stat-purple::after {
  background: #7c3aed;
}
.dash-stat-green .dash-stat-icon {
  background: #dcfce7;
  color: #16a34a;
}
.dash-stat-green::after {
  background: #16a34a;
}
.dash-stat-orange .dash-stat-icon {
  background: #ffedd5;
  color: #ea580c;
}
.dash-stat-orange::after {
  background: #ea580c;
}
.dash-stat-red .dash-stat-icon {
  background: #fee2e2;
  color: #dc2626;
}
.dash-stat-red::after {
  background: #dc2626;
}
.dash-stat-teal .dash-stat-icon {
  background: #ccfbf1;
  color: #0f766e;
}
.dash-stat-teal::after {
  background: #0f766e;
}
.dash-stat-indigo .dash-stat-icon {
  background: #e0e7ff;
  color: #4338ca;
}
.dash-stat-indigo::after {
  background: #4338ca;
}
.dash-quick-section {
  background: var(--surface-raised);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}
.dash-modules {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
.dash-module {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px 16px 20px;
  border-radius: var(--radius-lg);
  background: var(--surface);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all 200ms ease;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.dash-module::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  opacity: 0;
  transition: opacity 200ms ease;
}
.dash-module:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: transparent;
}
.dash-module:hover::before {
  opacity: 1;
}
.dash-mod-icon {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 200ms ease;
}
.dash-module:hover .dash-mod-icon {
  transform: scale(1.1);
}
.dash-mod-icon svg {
  width: 22px;
  height: 22px;
}
.dash-module strong {
  font-size: 14px;
  color: var(--text);
}
.dash-module span {
  font-size: 12px;
  color: var(--muted);
  font-weight: 500;
}
.dash-mod-blue .dash-mod-icon {
  background: var(--primary-muted);
  color: var(--primary);
}
.dash-mod-blue:hover {
  background: var(--primary-soft);
}
.dash-mod-blue::before {
  background: var(--primary-bright);
}
.dash-mod-purple .dash-mod-icon {
  background: #ede9fe;
  color: #7c3aed;
}
.dash-mod-purple:hover {
  background: #f5f3ff;
}
.dash-mod-purple::before {
  background: #7c3aed;
}
.dash-mod-green .dash-mod-icon {
  background: #dcfce7;
  color: #16a34a;
}
.dash-mod-green:hover {
  background: #f0fdf4;
}
.dash-mod-green::before {
  background: #16a34a;
}
.dash-mod-orange .dash-mod-icon {
  background: #ffedd5;
  color: #ea580c;
}
.dash-mod-orange:hover {
  background: #fff7ed;
}
.dash-mod-orange::before {
  background: #ea580c;
}
.dash-mod-teal .dash-mod-icon {
  background: #ccfbf1;
  color: #0f766e;
}
.dash-mod-teal:hover {
  background: #f0fdfa;
}
.dash-mod-teal::before {
  background: #0f766e;
}
.dash-mod-indigo .dash-mod-icon {
  background: #e0e7ff;
  color: #4338ca;
}
.dash-mod-indigo:hover {
  background: #eef2ff;
}
.dash-mod-indigo::before {
  background: #4338ca;
}
.dash-mod-red .dash-mod-icon {
  background: #fee2e2;
  color: #dc2626;
}
.dash-mod-red:hover {
  background: #fef2f2;
}
.dash-mod-red::before {
  background: #dc2626;
}
.metrics-grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: repeat(auto-fit, minmax(184px, 1fr));
}
.metric-card {
  display: grid;
  gap: var(--space-2);
  min-width: 0;
  padding: var(--space-5);
  position: relative;
}
.metric-card::before {
  background:
    linear-gradient(
      180deg,
      var(--primary),
      var(--accent));
  border-radius: 999px;
  content: "";
  height: calc(100% - 32px);
  left: 0;
  position: absolute;
  top: 16px;
  width: 3px;
}
.metric-card span {
  color: var(--muted);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.metric-card strong {
  color: var(--text);
  font-size: clamp(24px, 3vw, 32px);
  line-height: 1.1;
  overflow-wrap: anywhere;
}
.section-head {
  margin-bottom: var(--space-5);
  min-width: 0;
  display: flex;
  align-items: center;
}
.view-all-link {
  font-size: 12px;
  font-weight: 700;
  color: var(--primary);
  white-space: nowrap;
}
.section-head > div {
  display: grid;
  gap: var(--space-1);
  min-width: 0;
}
.section-head h3 {
  font-size: 20px;
  line-height: 1.2;
}
.toolbar {
  flex-wrap: wrap;
  margin-bottom: var(--space-4);
}
.toolbar input,
.toolbar select {
  flex: 1 1 224px;
}
.segmented {
  background: #edf2f7;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  flex-wrap: wrap;
  padding: var(--space-1);
}
.segmented button {
  background: transparent;
  border-color: transparent;
  box-shadow: none;
  color: var(--muted);
  min-height: 34px;
  padding: 7px 12px;
}
.segmented button:hover:not(:disabled),
.segmented button.active {
  background: var(--surface);
  border-color: var(--border);
  box-shadow: var(--shadow-sm);
  color: var(--primary-strong);
  transform: none;
}
.form-grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: repeat(auto-fit, minmax(216px, 1fr));
  min-width: 0;
}
.form-grid.compact {
  grid-template-columns: repeat(auto-fit, minmax(184px, 1fr));
}
.form-actions {
  display: flex;
  justify-content: flex-start;
}
label {
  color: var(--text-soft);
  display: grid;
  font-size: 13px;
  font-weight: 650;
  gap: var(--space-2);
  min-width: 0;
}
.inline {
  align-items: center;
  display: flex;
}
input,
select {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  min-height: 42px;
  min-width: 0;
  padding: 10px 12px;
  transition:
    background 160ms ease,
    border-color 160ms ease,
    box-shadow 160ms ease;
  width: 100%;
}
input:hover,
select:hover {
  border-color: #c4d0dd;
}
input:focus,
select:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(13, 148, 136, 0.12);
  outline: none;
}
input[type=checkbox] {
  accent-color: var(--primary);
  min-height: auto;
  width: auto;
}
input[type=file] {
  padding: 0;
  font-size: 13px;
  color: var(--text-soft);
  cursor: pointer;
  align-self: center;
  width: 100%;
  min-height: 38px;
  display: flex;
  align-items: center;
}
input[type=file]::file-selector-button {
  background:
    linear-gradient(
      180deg,
      var(--primary),
      var(--primary-strong));
  border: none;
  border-radius: var(--radius);
  color: #ffffff;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  font-weight: 600;
  margin-right: 12px;
  padding: 8px 16px;
  transition: opacity 160ms ease, box-shadow 160ms ease;
}
input[type=file]::file-selector-button:hover {
  opacity: 0.9;
  box-shadow: 0 2px 8px rgba(13, 148, 136, 0.3);
}
select option:disabled {
  color: #94a3b8;
}
.listing-toolbar {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}
.vehicle-doc-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  max-width: 260px;
}
.doc-tag {
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  white-space: nowrap;
  background: rgba(15, 118, 110, 0.1);
  color: var(--primary, #0f766e);
}
.doc-tag.ok {
  background: rgba(22, 163, 74, 0.12);
  color: #15803d;
}
.doc-tag.soon {
  background: rgba(217, 119, 6, 0.14);
  color: #b45309;
}
.doc-tag.expired {
  background: rgba(220, 38, 38, 0.14);
  color: #b91c1c;
}
.collect-onetime-toggle {
  align-items: center;
  background: rgba(15, 118, 110, 0.05);
  border: 1px solid rgba(15, 118, 110, 0.2);
  border-radius: 8px;
  display: flex;
  font-size: 13px;
  font-weight: 600;
  gap: 8px;
  margin: var(--space-3, 12px) 0;
  padding: 8px 12px;
}
.collect-onetime-toggle input {
  width: auto;
}
.admission-fee-preview {
  background: rgba(15, 118, 110, 0.05);
  border: 1px solid rgba(15, 118, 110, 0.2);
  border-radius: 10px;
  padding: var(--space-3, 12px);
}
.admission-fee-preview .afp-head {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}
.admission-fee-preview .afp-title {
  color: var(--primary, #0f766e);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}
.admission-fee-preview .afp-total {
  font-weight: 700;
}
.admission-fee-preview .afp-rows {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.admission-fee-preview .afp-row {
  display: flex;
  font-size: 12px;
  justify-content: space-between;
}
.driver-cell {
  align-items: center;
  display: flex;
  gap: var(--space-2, 8px);
}
.driver-avatar {
  border-radius: 50%;
  flex: 0 0 auto;
  height: 34px;
  object-fit: cover;
  width: 34px;
}
.driver-avatar.placeholder {
  align-items: center;
  background: rgba(15, 118, 110, 0.12);
  color: var(--primary, #0f766e);
  display: flex;
  font-weight: 700;
  justify-content: center;
  text-transform: uppercase;
}
.vehicle-doc-grid {
  display: grid;
  gap: var(--space-3, 12px);
  grid-template-columns: repeat(3, 1fr);
}
.vehicle-doc-upload {
  border: 1px solid var(--border-soft, #e5e7eb);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: var(--space-3, 12px);
}
.vehicle-doc-title {
  font-size: 12px;
  font-weight: 600;
}
.req-star {
  color: #dc2626;
}
.req-note {
  color: #dc2626;
  font-weight: 600;
}
.vehicle-doc-upload .doc-upload-label {
  align-items: center;
  border: 1px dashed var(--border, #cbd5e1);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  gap: 6px;
  justify-content: center;
  padding: 8px;
  text-align: center;
}
.vehicle-doc-upload .doc-upload-label:hover {
  background: rgba(15, 118, 110, 0.05);
}
.vehicle-doc-status {
  align-items: center;
  display: flex;
  font-size: 11px;
  gap: 6px;
  min-height: 20px;
}
.vehicle-doc-thumb {
  border: 1px solid var(--border-soft, #e5e7eb);
  border-radius: 8px;
  height: 90px;
  object-fit: cover;
  width: 100%;
}
.detail-grid {
  display: grid;
  gap: var(--space-2, 8px) var(--space-4, 16px);
  grid-template-columns: repeat(2, 1fr);
}
.detail-grid > div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.detail-grid > div.span-2 {
  grid-column: 1 / -1;
}
.detail-grid span {
  color: var(--muted, #6b7280);
  font-size: 11px;
  text-transform: uppercase;
}
.detail-grid strong {
  font-size: 13px;
}
@media (max-width: 720px) {
  .vehicle-doc-grid {
    grid-template-columns: 1fr;
  }
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
.listing-search {
  flex: 1 1 220px;
  min-width: 220px;
}
.listing-filter-slot,
.listing-filters {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}
.salary-filters {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: var(--space-2);
}
.salary-filters .filter-select {
  flex: 0 0 auto;
  width: 96px;
  min-width: 0;
  min-height: 34px;
  padding: 4px 10px;
  font-size: 12px;
}
.listing-toolbar-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-left: auto;
}
.page-size-select {
  align-items: center;
  color: var(--muted);
  display: inline-flex;
  font-size: 13px;
  gap: var(--space-2);
}
.page-size-select select {
  min-width: 72px;
}
.toast-stack {
  top: 24px;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  pointer-events: none;
  position: fixed;
  right: 24px;
  z-index: 2000;
}
.toast-stack .toast {
  align-items: center;
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.15);
  display: flex;
  gap: var(--space-3);
  justify-content: space-between;
  max-width: 420px;
  min-width: 280px;
  padding: 12px 16px;
  pointer-events: auto;
}
.toast-stack .toast.success {
  background: #ecfdf5;
  border: 1px solid #86efac;
  color: #166534;
}
.toast-stack .toast.error {
  background: #fef2f2;
  border: 1px solid #fca5a5;
  color: #991b1b;
}
.toast-stack .toast.warning {
  background: #fffbeb;
  border: 1px solid #fcd34d;
  color: #92400e;
}
.toast-stack .toast.info {
  background: var(--primary-soft);
  border: 1px solid #99f6e4;
  color: var(--primary-strong);
}
.toast-close {
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  opacity: 0.7;
}
.confirm-overlay {
  align-items: center;
  background: rgba(15, 23, 42, 0.45);
  display: flex;
  inset: 0;
  justify-content: center;
  position: fixed;
  z-index: 1300;
}
.confirm-dialog {
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);
  max-width: 420px;
  padding: var(--space-6);
  width: calc(100% - 32px);
}
.confirm-dialog h3 {
  margin: 0 0 var(--space-3);
}
.confirm-dialog p {
  color: var(--muted);
  margin: 0 0 var(--space-5);
}
.confirm-actions {
  display: flex;
  gap: var(--space-3);
  justify-content: flex-end;
}
.field-error {
  color: #dc2626;
  display: block;
  font-size: 12px;
  margin-top: 4px;
}
label.required > .label-text::after,
.field-label.required > .label-text::after,
label.required > span:first-child::after,
.field-label.required > span:first-child::after {
  color: var(--danger);
  content: " *";
  font-size: 14px;
  font-weight: 700;
}
.primary-btn {
  background: var(--primary);
  border: 0;
  border-radius: var(--radius);
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  padding: 8px 16px;
}
.table-wrap {
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  max-width: 100%;
  overflow-x: auto;
}
.table-wrap.sticky-header {
  max-height: min(560px, 70vh);
  overflow: auto;
}
.table-wrap.sticky-header thead th {
  background: var(--surface-soft);
  box-shadow: 0 1px 0 var(--border);
  position: sticky;
  top: 0;
  z-index: 1;
}
.global-search-wrap {
  position: relative;
  width: min(360px, 42vw);
}
.global-search-input {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  min-height: 40px;
  padding: 8px 12px 8px 36px;
  width: 100%;
}
.global-search-wrap::before {
  color: var(--muted);
  content: "\\2315";
  font-size: 16px;
  left: 12px;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}
.global-search-results {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  left: 0;
  margin-top: var(--space-2);
  max-height: 320px;
  overflow: auto;
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 200;
}
.search-result {
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--border-soft);
  border-radius: 0;
  box-shadow: none;
  color: inherit;
  display: grid;
  gap: 2px;
  justify-content: start;
  min-height: 0;
  padding: 10px 14px;
  text-align: left;
  width: 100%;
}
.search-result:hover,
.search-result.active {
  background: var(--primary-soft);
  transform: none;
}
.search-result-type {
  color: var(--muted);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.search-loading,
.search-empty {
  color: var(--muted);
  font-size: 13px;
  padding: 12px 14px;
}
.card-skeleton-grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}
.card-skeleton-item {
  background: var(--surface-soft);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  display: grid;
  gap: var(--space-3);
  padding: var(--space-4);
}
.skeleton-line {
  animation: skeleton-shimmer 1.4s ease infinite;
  background:
    linear-gradient(
      90deg,
      #e8edf4 25%,
      #f4f7fb 50%,
      #e8edf4 75%);
  background-size: 200% 100%;
  border-radius: 6px;
  height: 12px;
}
.skeleton-line.skeleton-title {
  height: 18px;
  width: 72%;
}
.skeleton-line.skeleton-meta.short {
  width: 45%;
}
.skeleton-actions {
  display: flex;
  gap: var(--space-2);
  margin-top: var(--space-2);
}
.skeleton-pill {
  animation: skeleton-shimmer 1.4s ease infinite;
  background:
    linear-gradient(
      90deg,
      #e8edf4 25%,
      #f4f7fb 50%,
      #e8edf4 75%);
  background-size: 200% 100%;
  border-radius: 999px;
  height: 28px;
  width: 72px;
}
th.sortable {
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}
th.sortable:hover {
  color: var(--text);
}
table {
  border-collapse: collapse;
  min-width: 680px;
  width: 100%;
}
th,
td {
  border-bottom: 1px solid var(--border-soft);
  padding: 12px 16px;
  text-align: left;
  vertical-align: middle;
}
tr:last-child td {
  border-bottom: 0;
}
th {
  background: var(--surface-soft);
  color: var(--muted);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
tbody tr {
  transition: background 140ms ease;
}
tbody tr:hover {
  background: #fbfdff;
}
.empty-cell,
.empty-state {
  color: #8a9aab;
  text-align: center;
}
.empty-cell {
  padding: var(--space-6) var(--space-4);
}
.table-actions {
  flex-wrap: wrap;
}
.pagination {
  color: var(--muted);
  font-size: 13px;
  justify-content: flex-end;
  margin-top: var(--space-4);
}
.status-badge,
.period-chip {
  border-radius: 999px;
  display: inline-flex;
  font-size: 12px;
  font-weight: 800;
  line-height: 1;
  padding: 6px 10px;
  text-transform: capitalize;
  white-space: nowrap;
}
.status-badge.active,
.status-badge.present,
.status-badge.paid {
  background: var(--success-soft);
  color: var(--success);
}
.status-badge.inactive,
.status-badge.absent,
.status-badge.cancelled {
  background: var(--danger-soft);
  color: var(--danger);
}
.status-badge.closed {
  background: rgba(148, 163, 184, 0.15);
  color: #64748b;
  font-weight: 700;
}
.status-badge.pending,
.status-badge.partial,
.status-badge.unpaid,
.status-badge.late,
.status-badge.half_day {
  background: var(--warning-soft);
  color: var(--warning);
}
.status-badge.uploaded {
  background: var(--success-soft);
  color: var(--success);
}
.status-badge.left_school,
.status-badge.passed_out,
.status-badge.tc_issued,
.status-badge.alumni {
  background: rgba(148, 163, 184, 0.15);
  color: #64748b;
}
.table-photo {
  align-items: center;
  background: var(--primary-soft);
  border-radius: 50%;
  color: var(--primary-strong);
  display: inline-flex;
  font-size: 12px;
  font-weight: 700;
  height: 32px;
  justify-content: center;
  overflow: hidden;
  width: 32px;
}
.table-photo img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}
.inline-field-actions {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.inline-field-actions input {
  flex: 1;
  min-width: 120px;
}
.doc-action-row {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
}
.replace-doc-label {
  font-size: 12px;
}
.activity-timeline {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.timeline-item {
  border-left: 3px solid var(--primary);
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 12px;
}
.timeline-item span {
  color: var(--muted);
  font-size: 12px;
}
.doc-summary-list {
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
}
.doc-summary-list li {
  font-size: 13px;
  margin-bottom: 6px;
}
.permission-matrix-wrap {
  margin-top: 1rem;
  overflow-x: auto;
}
.permission-matrix {
  min-width: 720px;
}
.permission-matrix th,
.permission-matrix td {
  text-align: center;
  font-size: 12px;
}
.permission-matrix td:first-child,
.permission-matrix th:first-child {
  text-align: left;
  text-transform: capitalize;
  white-space: nowrap;
}
.role-create-form {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  margin-bottom: 1rem;
}
.period-chip {
  background: var(--primary-soft);
  color: var(--primary-strong);
  margin: 2px 4px 2px 0;
}
.quick-actions {
  flex-wrap: wrap;
}
.document-list {
  display: grid;
  gap: var(--space-3);
  margin-top: var(--space-4);
}
.document-card,
.empty-state {
  background: var(--surface-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  display: grid;
  gap: var(--space-2);
  min-width: 0;
  padding: var(--space-4);
}
.document-card a {
  color: var(--primary);
  font-weight: 800;
  text-decoration: none;
}
.document-card a:hover {
  color: var(--primary-strong);
  text-decoration: underline;
}
@media (max-width: 1180px) {
  .app-shell {
    grid-template-columns: 240px minmax(0, 1fr);
  }
  .span-4,
  .span-5,
  .span-6,
  .span-7,
  .span-8 {
    grid-column: span 12;
  }
}
@media (max-width: 860px) {
  .login-layout {
    grid-template-columns: 1fr;
  }
  .role-grid {
    grid-template-columns: 1fr 1fr;
  }
  .app-shell {
    grid-template-columns: 1fr;
    padding: var(--space-3);
  }
  .sidebar {
    gap: var(--space-4);
    max-height: none;
    padding: var(--space-4);
    position: static;
  }
  .sidebar.collapsed {
    width: auto;
  }
  .sidebar.collapsed .nav-label,
  .sidebar.collapsed .brand-full,
  .sidebar.collapsed .eyebrow,
  .sidebar.collapsed .sidebar-profile {
    display: initial;
  }
  .brand-short {
    display: none !important;
  }
  .nav-list {
    display: flex;
    gap: var(--space-2);
    margin: 0 -2px;
    overflow-x: auto;
    padding: 2px;
  }
  .nav-list button {
    flex: 0 0 auto;
    width: auto;
  }
  .nav-icon {
    flex-basis: 34px;
    height: 34px;
  }
  .topbar,
  .page-hero {
    align-items: stretch;
    flex-direction: column;
  }
  .dash-welcome {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
  }
  .dash-welcome-actions {
    align-items: flex-start;
  }
  .dash-stats {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
  .dash-modules {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }
  .actions,
  .profile-trigger {
    width: 100%;
  }
  .actions {
    align-items: stretch;
    display: grid;
    gap: var(--space-2);
    grid-template-columns: 1fr 1fr;
  }
  .global-search-wrap {
    grid-column: 1 / -1;
    width: 100%;
  }
  .notification-menu-wrap,
  .profile-menu-wrap {
    width: 100%;
  }
  .notification-button,
  .refresh-button,
  .profile-trigger {
    width: 100%;
  }
  .profile-menu-wrap {
    grid-column: 1 / -1;
  }
  .notification-backdrop {
    display: block;
  }
  .notification-menu {
    left: 0;
    max-width: none;
    position: fixed;
    right: 0;
    top: auto;
    bottom: 0;
    width: auto;
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    max-height: min(70vh, 520px);
    z-index: 260;
  }
  .refresh-button .button-label,
  .profile-name,
  .chevron {
    display: none;
  }
  .pagination-bar {
    align-items: stretch;
    flex-direction: column;
  }
  .pagination-controls {
    align-items: stretch;
    flex-direction: column;
    width: 100%;
  }
  .pagination-nav {
    justify-content: space-between;
    width: 100%;
  }
  .pagination-nav-btn {
    flex: 1 1 0;
    justify-content: center;
  }
  .pagination-page-nums {
    display: none;
  }
  .page-size-select {
    width: 100%;
  }
  .toast-stack {
    bottom: 16px;
    left: 16px;
    right: 16px;
  }
  .toast-stack .toast {
    max-width: none;
    min-width: 0;
    width: 100%;
  }
  .profile-menu {
    left: 0;
    right: auto;
  }
}
@media (max-width: 560px) {
  .login-shell {
    padding: var(--space-4);
  }
  .role-grid {
    grid-template-columns: 1fr;
  }
  .login-card,
  .panel,
  .page-hero,
  .metric-card,
  .topbar {
    padding: var(--space-4);
  }
  .workspace {
    gap: var(--space-4);
  }
  .metrics-grid,
  .form-grid,
  .form-grid.compact {
    grid-template-columns: 1fr;
  }
  .dash-stats {
    grid-template-columns: 1fr;
  }
  .dash-stat-card {
    padding: 16px 18px;
  }
  .dash-modules {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-3);
  }
  .dash-module {
    padding: 18px 12px 16px;
  }
  .dash-quick-section {
    padding: var(--space-4);
  }
  .toolbar,
  .section-head,
  .pagination {
    align-items: stretch;
    flex-direction: column;
  }
  .pagination {
    justify-content: flex-start;
  }
  table {
    min-width: 620px;
  }
  .table-actions {
    align-items: stretch;
    flex-direction: column;
  }
  .table-actions button {
    width: 100%;
  }
}
.timetable-visual {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-4);
}
.timetable-board .tt-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
}
.tt-create-btn {
  flex-shrink: 0;
}
.tt-selectors {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  padding: 0 var(--space-4) var(--space-3);
}
.tt-select {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 160px;
}
.tt-select-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted, #64748b);
}
.tt-board-head {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-4) 0;
}
.tt-board-title {
  margin: 0;
  font-size: 20px;
  font-weight: 800;
}
.tt-active {
  flex-shrink: 0;
}
.tt-board-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-5);
  padding: var(--space-2) var(--space-4) var(--space-3);
}
.tt-meta-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tt-meta-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-muted, #64748b);
}
.tt-meta-value {
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-strong, var(--primary));
}
.tt-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-4) var(--space-2);
  border-bottom: 1px solid var(--border);
}
.tt-tab {
  appearance: none;
  background: none;
  border: 0;
  border-radius: 8px 8px 0 0;
  border-bottom: 2px solid transparent;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-muted, #64748b);
  cursor: pointer;
  transition:
    color 0.15s,
    border-color 0.15s,
    background 0.15s;
}
.tt-tab:hover {
  color: var(--primary-strong, var(--primary));
}
.tt-tab.active {
  color: var(--primary-strong, var(--primary));
  border-bottom-color: var(--primary);
}
.tt-tab.has-periods:not(.active)::after {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
  margin-left: 6px;
  vertical-align: middle;
  opacity: 0.6;
}
.tt-table {
  margin: var(--space-3) var(--space-4) var(--space-4);
}
.tt-col-period {
  width: 120px;
}
.tt-col-time {
  width: 100px;
}
.tt-col-room {
  width: 110px;
}
.tt-col-action {
  width: 90px;
  text-align: right;
}
.tt-room-tag {
  color: var(--text-muted, #64748b);
  font-size: 12px;
}
.tt-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1250;
  padding: var(--space-4);
}
.tt-modal {
  background: var(--surface, #fff);
  border-radius: var(--radius-lg, 14px);
  width: min(640px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  padding: var(--space-4);
}
.tt-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: var(--space-3);
}
.tt-close {
  appearance: none;
  border: 0;
  background: none;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  color: var(--text-muted, #64748b);
}
.tt-modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  margin-top: var(--space-4);
}
@media (max-width: 640px) {
  .tt-board-head,
  .tt-board-meta,
  .tt-selectors {
    padding-left: var(--space-3);
    padding-right: var(--space-3);
  }
  .tt-table {
    margin-left: var(--space-2);
    margin-right: var(--space-2);
  }
}
.tt-day-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}
.tt-day-header {
  background: var(--primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
}
.tt-day-name {
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.5px;
}
.tt-class-badge {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 12px;
}
.tt-periods {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1px;
  background: var(--border);
}
.tt-period-card {
  background: var(--surface);
  padding: 12px 14px;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  transition: background 0.15s;
}
.tt-period-card:hover {
  background: var(--primary-soft);
}
.tt-period-num {
  background: var(--primary-soft);
  color: var(--primary-strong);
  font-weight: 800;
  font-size: 11px;
  border-radius: 6px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.tt-period-info {
  flex: 1;
  min-width: 0;
}
.tt-subject {
  font-weight: 700;
  font-size: 14px;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tt-time {
  font-size: 12px;
  color: var(--muted);
  margin-top: 2px;
}
.tt-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-end;
  flex-shrink: 0;
}
.tt-teacher {
  font-size: 11px;
  color: var(--primary-strong);
  font-weight: 600;
}
.tt-room {
  font-size: 10px;
  color: var(--muted);
  background: var(--border);
  padding: 1px 6px;
  border-radius: 4px;
}
.tt-empty {
  background: var(--surface);
  padding: 20px;
  text-align: center;
  color: var(--muted);
  font-style: italic;
}
.invoice-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-4);
  padding: var(--space-4);
}
.invoice-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px;
  transition: box-shadow 0.15s, border-color 0.15s;
}
.invoice-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border-color: var(--primary);
}
.clickable-card {
  cursor: pointer;
}
.fee-summary-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}
.fee-summary-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 3px solid var(--primary);
  border-radius: var(--radius);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 14px;
}
.fee-summary-card.ok {
  border-left-color: var(--success, #16a34a);
}
.fee-summary-card.warn {
  border-left-color: var(--warning, #d97706);
}
.fee-summary-card.danger {
  border-left-color: var(--danger, #dc2626);
}
.fee-summary-card .fs-label {
  color: var(--text-muted);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.fee-summary-card .fs-value {
  color: var(--text);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.1;
}
.fee-gen-card {
  padding: 16px 18px;
}
.fee-gen-head {
  align-items: center;
  display: flex;
  gap: var(--space-3);
  justify-content: space-between;
  margin-bottom: 12px;
}
.fee-gen-head h3 {
  margin: 0;
}
.fee-gen-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-3);
}
.fee-gen-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-3);
  margin-top: 12px;
}
.fg-stat {
  background: var(--surface-soft, #f8fafc);
  border: 1px solid var(--border-soft, var(--border));
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px 12px;
}
.fg-stat .fg-label {
  color: var(--text-muted);
  font-size: 11px;
  font-weight: 600;
}
.fg-stat .fg-value {
  color: var(--text);
  font-size: 16px;
  font-weight: 700;
}
.fee-gen-confirm {
  background: var(--success-soft, #dcfce7);
  border-radius: var(--radius);
  color: var(--success-strong, #15803d);
  font-size: 12px;
  font-weight: 600;
  margin: 12px 0 0;
  padding: 8px 12px;
}
.fee-gen-target {
  margin-top: 12px;
}
.fee-gen-target .collect-search-field {
  display: block;
  max-width: 520px;
}
.fee-gen-target-note {
  margin: 6px 0 0;
}
.fee-structure-card {
  padding: 16px 18px;
}
.fee-preset-row {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin: 12px 0;
}
.fee-preset-label {
  color: var(--text-muted);
  font-size: 12px;
  font-weight: 700;
  margin-right: 4px;
}
.fee-structure-table {
  border: 1px solid var(--border-soft, var(--border));
  border-radius: var(--radius);
  overflow: hidden;
}
.fsc-head,
.fsc-row {
  align-items: center;
  display: grid;
  gap: var(--space-2);
  grid-template-columns: 2fr 1.1fr 1.2fr 1fr 40px;
  padding: 8px 12px;
}
.fsc-head {
  background: var(--surface-soft, #f8fafc);
  border-bottom: 1px solid var(--border-soft, var(--border));
  color: var(--text-muted);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
}
.fsc-row {
  border-bottom: 1px solid var(--border-soft, var(--border));
}
.fsc-row input[type=text],
.fsc-row input[type=number],
.fsc-row select {
  height: 34px;
  width: 100%;
}
.fsc-check {
  align-items: center;
  display: flex;
  gap: 6px;
  font-size: 12px;
}
.fsc-check input[type=checkbox] {
  height: auto;
  width: auto;
}
.fsc-total {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
}
.fsc-total strong {
  font-size: 15px;
}
@media (max-width: 700px) {
  .fsc-head {
    display: none;
  }
  .fsc-row {
    grid-template-columns: 1fr 1fr;
    row-gap: 6px;
  }
  .fsc-row .fsc-label {
    grid-column: 1 / -1;
  }
}
.collect-card {
  padding: 16px 18px;
}
.collect-filters {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}
.collect-search {
  position: relative;
  display: flex;
  gap: var(--space-2);
  align-items: stretch;
}
.collect-search input {
  flex: 1 1 auto;
}
.collect-search-results {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
  left: 0;
  max-height: 280px;
  overflow-y: auto;
  position: absolute;
  right: 0;
  top: calc(100% + 4px);
  z-index: 40;
}
.collect-result {
  background: none;
  border: 0;
  border-bottom: 1px solid var(--border-soft, var(--border));
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px 12px;
  text-align: left;
  width: 100%;
}
.collect-result:hover {
  background: var(--primary-soft);
}
.collect-result .cr-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
}
.collect-result .cr-meta {
  font-size: 11px;
  color: var(--text-muted);
}
.collect-search-empty {
  color: var(--text-muted);
  font-size: 12px;
  padding: 6px 2px 0;
}
.collect-student-summary {
  align-items: center;
  background: var(--surface-soft, #f8fafc);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  justify-content: space-between;
  margin-bottom: var(--space-3);
  padding: 12px 16px;
}
.css-main {
  align-items: center;
  display: flex;
  gap: 12px;
}
.css-avatar {
  align-items: center;
  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--primary-strong, var(--primary)));
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 15px;
  font-weight: 700;
  height: 42px;
  justify-content: center;
  text-transform: uppercase;
  width: 42px;
}
.css-name {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
}
.css-meta {
  font-size: 12px;
  color: var(--text-muted);
}
.css-stats {
  display: flex;
  gap: var(--space-4);
}
.css-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: right;
}
.css-stat span {
  font-size: 11px;
  color: var(--text-muted);
  font-weight: 600;
}
.css-stat strong {
  font-size: 16px;
}
.pending-demands {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.pending-demand-row {
  align-items: center;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  display: grid;
  gap: 12px;
  grid-template-columns: 28px 1.4fr 1.2fr auto;
  padding: 8px 12px;
}
.pending-demand-row.is-selected {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px var(--primary-soft);
}
.pending-demand-row.is-paid {
  opacity: 0.6;
}
.pd-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.pd-number {
  font-family: monospace;
  font-size: 12px;
  font-weight: 700;
  color: var(--primary-strong);
}
.pd-period {
  font-size: 11px;
  color: var(--text-muted);
}
.pd-amounts {
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: right;
}
.pd-total {
  font-size: 13px;
  font-weight: 600;
}
.pd-balance {
  font-size: 11px;
  font-weight: 600;
}
.payment-summary {
  background: var(--surface-soft, #f8fafc);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: var(--space-3) 0;
  padding: 12px 16px;
}
.payment-summary .ps-row {
  display: flex;
  font-size: 12px;
  justify-content: space-between;
}
.payment-summary .ps-row span {
  color: var(--text-muted);
}
.payment-summary .ps-row.net,
.payment-summary .ps-row.remaining {
  border-top: 1px dashed var(--border);
  font-size: 14px;
  margin-top: 4px;
  padding-top: 6px;
}
.payment-summary .ps-row.net strong {
  color: var(--primary-strong);
}
.collect-empty {
  margin-top: var(--space-2);
}
.fee-list-head {
  align-items: flex-start;
}
.fee-list-actions {
  align-items: center;
  display: flex;
  gap: var(--space-2);
}
.view-toggle {
  background: var(--surface-soft, #f1f5f9);
  border: 1px solid var(--border);
  border-radius: 999px;
  display: inline-flex;
  overflow: hidden;
  padding: 2px;
}
.view-toggle button {
  background: none;
  border: 0;
  border-radius: 999px;
  color: var(--text-muted);
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  min-height: 28px;
  min-width: 0;
  padding: 0 14px;
}
.view-toggle button.active {
  background: var(--primary);
  color: #fff;
}
.filter-bar {
  background: var(--surface-soft, #f8fafc);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin: 0 var(--space-4) var(--space-3);
  padding: 12px 14px;
}
.filter-bar-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--space-3);
}
.filter-bar-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  justify-content: flex-end;
  margin-top: 12px;
}
.invoice-cards.compact {
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: var(--space-3);
  padding: var(--space-4);
}
.invoice-cards.compact .invoice-card {
  padding: 12px;
}
.invoice-cards.compact .inv-student {
  font-size: 13px;
  margin-bottom: 6px;
}
.invoice-cards.compact .inv-meta {
  margin: -4px 0 8px;
}
.inv-mini-details {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  margin-bottom: 10px;
}
.inv-mini-details span {
  color: var(--text-muted);
  font-size: 11px;
}
.inv-mini-details strong {
  color: var(--text);
  font-size: 12px;
  margin-left: 3px;
}
.clickable-row {
  cursor: pointer;
}
.clickable-row:hover {
  background: var(--primary-soft);
}
@media (max-width: 1200px) {
  .fee-summary-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .fee-gen-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .fee-gen-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  .collect-filters {
    grid-template-columns: 1fr 1fr;
  }
  .collect-search-field {
    grid-column: 1 / -1;
  }
}
@media (max-width: 720px) {
  .fee-summary-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .fee-gen-head {
    align-items: stretch;
    flex-direction: column;
  }
  .fee-gen-head .compact-submit {
    width: 100%;
  }
  .fee-gen-grid {
    grid-template-columns: 1fr 1fr;
  }
  .collect-filters {
    grid-template-columns: 1fr;
  }
  .collect-student-summary {
    align-items: flex-start;
    flex-direction: column;
  }
  .css-stats {
    width: 100%;
    justify-content: space-between;
  }
  .css-stat {
    text-align: left;
  }
  .pending-demand-row {
    grid-template-columns: 24px 1fr auto;
  }
  .pending-demand-row .status-badge {
    grid-column: 2 / -1;
    justify-self: start;
  }
  .fee-list-head {
    flex-direction: column;
    gap: var(--space-2);
  }
  .filter-bar {
    margin-left: var(--space-2);
    margin-right: var(--space-2);
  }
}
@media (max-width: 480px) {
  .fee-summary-grid {
    grid-template-columns: 1fr 1fr;
  }
  .fee-gen-grid {
    grid-template-columns: 1fr;
  }
  .fee-gen-stats {
    grid-template-columns: 1fr 1fr;
  }
}
.inv-footer-actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}
.inv-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}
.inv-number {
  font-weight: 700;
  font-size: 13px;
  color: var(--primary-strong);
  font-family: monospace;
}
.inv-student {
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 12px;
}
.inv-meta {
  font-size: 12px;
  color: var(--text-muted);
  margin: -8px 0 10px;
}
.fee-breakdown {
  margin: 12px 0;
  padding: 12px;
  background: var(--surface-2, #f8fafc);
  border-radius: var(--radius);
  border: 1px solid var(--border);
}
.hint-text {
  font-size: 13px;
  color: var(--text-muted);
  margin: 0 0 12px;
  line-height: 1.45;
}
.payment-chips {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}
.payment-chip {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  padding: 8px 10px;
  background: var(--surface-2, #f8fafc);
  border-radius: 8px;
  border: 1px solid var(--border);
}
.status-badge.small {
  font-size: 10px;
  padding: 2px 6px;
}
.status-badge.void {
  background: #fee2e2;
  color: #991b1b;
}
.stops-editor {
  margin: 12px 0;
}
.stops-editor .inline-input {
  width: 100%;
  min-width: 70px;
  padding: 6px 8px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 12px;
}
.section-head.compact h4 {
  margin: 0;
  font-size: 14px;
}
.muted {
  color: var(--text-muted);
  font-size: 12px;
}
.inv-details {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  margin-bottom: 14px;
}
.inv-detail {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.inv-label {
  font-size: 11px;
  color: var(--muted);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.inv-value {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
}
.inv-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid var(--border);
}
.inv-due {
  font-size: 12px;
  color: var(--muted);
}
.payroll-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-4);
  padding: var(--space-4);
}
.payroll-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px;
  transition: box-shadow 0.15s, border-color 0.15s;
}
.payroll-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border-color: var(--primary);
}
.pr-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 14px;
}
.pr-teacher {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
}
.pr-period {
  font-size: 13px;
  color: var(--muted);
  margin-top: 2px;
}
.pr-breakdown {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;
}
.pr-row {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  padding: 4px 0;
}
.pr-total {
  font-weight: 800;
  font-size: 16px;
  color: var(--primary-strong);
  border-top: 2px solid var(--primary);
  padding-top: 8px;
  margin-top: 4px;
}
.pr-actions {
  display: flex;
  gap: 8px;
  padding-top: 12px;
  border-top: 1px solid var(--border);
  flex-wrap: wrap;
}
.success-text {
  color: var(--success) !important;
}
.danger-text {
  color: var(--danger) !important;
}
.readonly-field {
  background: var(--primary-soft) !important;
  cursor: not-allowed;
  font-weight: 700;
}
.empty-state {
  padding: 40px 20px;
  text-align: center;
  color: var(--muted);
}
.empty-state p {
  font-size: 14px;
  font-style: italic;
}
.exam-card-footer .danger-btn {
  background: var(--danger);
  border: none;
  border-radius: var(--radius);
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  transition: opacity 0.15s;
}
.exam-card-footer .danger-btn:hover:not(:disabled) {
  opacity: 0.85;
  transform: none;
}
.exam-cards {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  padding: var(--space-4);
}
.exam-card {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.exam-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transform: translateY(-3px);
}
.exam-card-header {
  align-items: flex-start;
  display: flex;
  gap: var(--space-2);
  justify-content: space-between;
  padding: var(--space-4) var(--space-4) var(--space-2);
}
.exam-card-title {
  font-size: 15px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  color: var(--text);
}
.exam-card-body {
  display: grid;
  flex: 1;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-4);
}
.exam-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}
.exam-tag {
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 10px;
}
.exam-tag.subject {
  background: #ede9fe;
  color: #6d28d9;
}
.exam-tag.chapter {
  background: #e0f2fe;
  color: #0369a1;
}
.exam-card-meta {
  display: grid;
  gap: 4px;
}
.exam-meta-item {
  color: var(--muted);
  font-size: 13px;
}
.exam-meta-item strong {
  color: var(--text-soft);
  font-weight: 600;
}
.exam-card-footer {
  align-items: center;
  border-top: 1px solid var(--border-soft);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
}
.exam-card[data-status=draft] {
  border-left: 3px solid #94a3b8;
}
.exam-card[data-status=published] {
  border-left: 3px solid #22c55e;
}
.exam-card[data-status=closed] {
  border-left: 3px solid #ef4444;
}
@media (max-width: 640px) {
  .timetable-visual {
    padding: var(--space-2);
  }
  .tt-periods {
    grid-template-columns: 1fr;
  }
  .invoice-cards {
    grid-template-columns: 1fr;
    padding: var(--space-2);
  }
  .payroll-cards {
    grid-template-columns: 1fr;
    padding: var(--space-2);
  }
  .inv-details {
    grid-template-columns: 1fr;
  }
  .exam-cards {
    grid-template-columns: 1fr;
    padding: var(--space-2);
  }
  .main-panel {
    min-width: 0;
  }
  .topbar-title h2 {
    font-size: 22px;
  }
  .data-card .toolbar,
  .data-card .listing-toolbar,
  .data-card .pagination-bar {
    padding: var(--space-3);
  }
}
.ui-empty-state {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-6) var(--space-4);
  text-align: center;
}
.ui-empty-icon {
  color: #b8c5d4;
  height: 56px;
  width: 56px;
}
.ui-empty-icon svg {
  height: 100%;
  width: 100%;
}
.ui-empty-title {
  color: var(--text);
  font-size: 15px;
  font-weight: 700;
  margin: 0;
}
.ui-empty-message {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  max-width: 360px;
}
.ui-empty-action {
  margin-top: var(--space-2);
}
.table-skeleton {
  display: grid;
  gap: 10px;
  padding: var(--space-3) 0;
}
.table-skeleton-embedded {
  padding: var(--space-2) 0;
}
.skeleton-row {
  display: grid;
  gap: 10px;
}
.skeleton-cell {
  animation: skeleton-shimmer 1.4s ease-in-out infinite;
  background:
    linear-gradient(
      90deg,
      #eef2f6 0%,
      #f8fafc 45%,
      #eef2f6 90%);
  background-size: 200% 100%;
  border-radius: 6px;
  height: 14px;
}
.skeleton-header .skeleton-cell {
  height: 12px;
  opacity: 0.7;
}
@keyframes skeleton-shimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
.listing-table-panel {
  position: relative;
}
.listing-table-panel.is-refreshing .table-wrap,
.listing-table-panel.is-refreshing .exam-cards,
.listing-table-panel.is-refreshing .timetable-visual {
  opacity: 0.55;
  pointer-events: none;
  transition: opacity 160ms ease;
}
.listing-table-panel.is-refreshing::after {
  animation: spin 0.8s linear infinite;
  border: 2px solid rgba(15, 118, 110, 0.15);
  border-radius: 50%;
  border-top-color: var(--primary);
  content: "";
  height: 22px;
  position: absolute;
  right: 12px;
  top: 8px;
  width: 22px;
}
.action-btn {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  white-space: nowrap;
}
.action-btn-icon {
  font-size: 11px;
  line-height: 1;
}
.action-btn-label {
  font-size: 12px;
}
.action-btn:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}
.listing-toolbar .btn-spinner {
  border: 2px solid rgba(15, 118, 110, 0.2);
  border-radius: 50%;
  border-top-color: var(--primary);
  display: inline-block;
  height: 12px;
  margin-right: 6px;
  vertical-align: middle;
  width: 12px;
  animation: spin 0.8s linear infinite;
}
@media (max-width: 860px) {
  .listing-filters {
    flex-wrap: wrap;
    gap: var(--space-2);
  }
  .listing-toolbar {
    align-items: stretch;
    flex-direction: column;
    gap: var(--space-3);
  }
  .listing-toolbar-actions {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .action-btn-label {
    display: none;
  }
  .action-btn {
    min-width: 32px;
    justify-content: center;
    padding-left: 8px;
    padding-right: 8px;
  }
}
.wizard-steps {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.wizard-step {
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: var(--surface-muted, #f3f4f6);
  color: var(--text-muted, #6b7280);
  font-size: 0.85rem;
}
.wizard-step.active {
  background: var(--accent, var(--primary));
  color: #fff;
}
.wizard-step.done {
  background: #dcfce7;
  color: #166534;
}
.wizard-panel {
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;
}
.wizard-nav,
.wizard-actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.warning-chip {
  display: inline-block;
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
  background: #fef3c7;
  color: #92400e;
  font-size: 0.8rem;
}
tr.ineligible {
  opacity: 0.65;
}
.password-change-overlay {
  align-items: center;
  background: rgba(15, 23, 42, 0.45);
  display: grid;
  inset: 0;
  justify-items: center;
  padding: 24px;
  position: fixed;
  z-index: 1200;
}
.password-change-panel {
  max-width: 420px;
  width: 100%;
}
.checkbox-row {
  align-items: center;
  display: flex;
  gap: 8px;
}
.forgot-password-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px 18px;
  justify-content: space-between;
  margin: 8px 0 16px;
}
.forgot-link {
  background: none;
  border: none;
  padding: 0;
  color: #2563eb;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}
.forgot-link:hover {
  text-decoration: underline;
}
.verify-resend-box {
  background: #fff7ed;
  border: 1px solid #fdba74;
  border-radius: 12px;
  display: grid;
  gap: 10px;
  margin-top: 12px;
  padding: 14px;
}
.verify-resend-copy {
  color: #9a3412;
  font-size: 13px;
  line-height: 1.45;
  margin: 0;
}
.verify-resend-box .dev-otp-hint,
.verify-resend-box .dev-otp-hint a {
  word-break: break-all;
}
.fee-pred-filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2, 8px);
  align-items: center;
}
.fee-pred-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2, 8px);
  align-items: center;
}
.risk-stack {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.risk-row {
  display: grid;
  grid-template-columns: 72px 1fr 36px;
  gap: 8px;
  align-items: center;
}
.risk-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.risk-badge.low {
  background: #ecfdf5;
  color: #047857;
}
.risk-badge.medium {
  background: #fffbeb;
  color: #b45309;
}
.risk-badge.high {
  background: #fff7ed;
  color: #c2410c;
}
.risk-badge.critical {
  background: #fef2f2;
  color: #b91c1c;
}
.bar-fill.risk-low {
  background: #10b981;
}
.bar-fill.risk-medium {
  background: #f59e0b;
}
.bar-fill.risk-high {
  background: #f97316;
}
.bar-fill.risk-critical {
  background: #ef4444;
}
.bar-fill.late {
  background: #f59e0b;
}
.bar-fill.default {
  background: #ef4444;
}
.trend-chart {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  min-height: 160px;
  padding: 8px 4px 0;
}
.trend-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 0;
}
.trend-bars {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 120px;
  width: 100%;
  justify-content: center;
}
.trend-bar {
  width: 12px;
  border-radius: 4px 4px 0 0;
  min-height: 4px;
}
.trend-bar.billed {
  background: rgba(13, 148, 136, 0.28);
}
.trend-bar.collected {
  background: #0d9488;
}
.trend-label {
  font-size: 11px;
  color: var(--muted, #64748b);
}
.trend-rate {
  font-size: 11px;
  font-weight: 700;
  color: var(--text, #0f172a);
}
.trend-legend {
  display: flex;
  gap: 16px;
  margin-top: 10px;
  font-size: 12px;
  color: var(--muted, #64748b);
}
.trend-legend .lg {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  margin-right: 6px;
  vertical-align: middle;
}
.trend-legend .lg.billed {
  background: rgba(13, 148, 136, 0.28);
}
.trend-legend .lg.collected {
  background: #0d9488;
}
.mini-meter {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 6px;
  align-items: center;
  min-width: 90px;
}
.factors-cell .factor-chip {
  display: inline-block;
  margin: 1px 2px;
  padding: 1px 6px;
  border-radius: 6px;
  background: rgba(15, 118, 110, 0.08);
  font-size: 10px;
  color: var(--primary, #0f766e);
}
.reminder-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-3, 12px);
}
.reminder-card {
  border: 1px solid var(--border, #e2e8f0);
  border-radius: 12px;
  padding: 12px;
  background: #fff;
}
.reminder-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.reminder-body {
  white-space: pre-wrap;
  font-size: 12px;
  color: var(--muted, #64748b);
  max-height: 120px;
  overflow: auto;
  margin: 0 0 10px;
}
.reminder-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
@media (max-width: 900px) {
  .fee-pred-risk-panel,
  .fee-pred-trend-panel {
    grid-column: 1 / -1;
  }
}
.ttgen-guide {
  background:
    linear-gradient(
      180deg,
      #f0fdfa 0%,
      #ffffff 100%);
  border: 1px solid #99f6e4;
  border-radius: 16px;
  display: grid;
  gap: 16px;
  padding: 18px 20px;
}
.ttgen-guide-top {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  justify-content: space-between;
}
.ttgen-guide-top h3 {
  font-size: 1.05rem;
  line-height: 1.45;
  margin: 4px 0 0;
  max-width: 52rem;
}
.ttgen-steps {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
}
.ttgen-steps li {
  background: #fff;
  border: 1px solid var(--border, #e2e8f0);
  border-radius: 12px;
  display: flex;
  gap: 10px;
  padding: 12px;
}
.ttgen-steps li.active {
  border-color: #14b8a6;
  box-shadow: 0 0 0 1px #14b8a6 inset;
}
.ttgen-steps li.done {
  background: #f0fdfa;
  border-color: #99f6e4;
}
.ttgen-steps strong {
  display: block;
  font-size: 13px;
  margin-bottom: 2px;
}
.ttgen-steps p {
  color: var(--muted, #64748b);
  font-size: 12px;
  line-height: 1.4;
  margin: 0;
}
.ttgen-step-num {
  align-items: center;
  background: #ccfbf1;
  border-radius: 999px;
  color: #0f766e;
  display: inline-flex;
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: 800;
  height: 28px;
  justify-content: center;
  width: 28px;
}
.ttgen-steps li.active .ttgen-step-num {
  background: #0f766e;
  color: #fff;
}
.ttgen-steps li.done .ttgen-step-num {
  background: #14b8a6;
  color: #fff;
}
.ttgen-guide-actions {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.ttgen-chip-label {
  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 700;
  margin-right: 6px;
  text-transform: uppercase;
  white-space: nowrap;
}
.ttgen-empty-start {
  padding: 28px 20px 24px;
  text-align: center;
}
.ttgen-empty-actions {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}
.ttgen-page .sr-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
.ttgen-page .ttgen-filters {
  align-items: end;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.ttgen-filter-field {
  display: grid;
  gap: 4px;
  width: 160px;
}
.ttgen-filter-field > span {
  color: var(--muted, #64748b);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.ttgen-filter-field .filter-select,
.ttgen-filter-field select {
  box-sizing: border-box;
  min-height: 36px;
  width: 100%;
}
.ttgen-class-filter {
  min-width: 0;
}
.ttgen-context {
  align-items: center;
  background:
    radial-gradient(
      circle at 92% 15%,
      rgba(45, 212, 191, 0.22),
      transparent 30%),
    linear-gradient(
      120deg,
      #0f2e2b 0%,
      #115e59 100%);
  border: 1px solid rgba(153, 246, 228, 0.25);
  border-radius: 16px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 18px 20px;
}
.ttgen-context-main,
.ttgen-context-actions,
.ttgen-context-meta {
  align-items: center;
  display: flex;
}
.ttgen-context-main {
  gap: 14px;
  flex: 1;
  min-width: 0;
}
.ttgen-context-actions {
  gap: 10px;
}
.ttgen-context-copy {
  flex: 1;
  min-width: 0;
}
.ttgen-context .eyebrow {
  color: #99f6e4;
  margin: 0;
}
.ttgen-banner-name {
  display: block;
  margin: 4px 0 8px;
}
.ttgen-banner-name input {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 8px;
  box-sizing: border-box;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 700;
  max-width: 520px;
  min-height: 40px;
  padding: 0 12px;
  width: 100%;
}
.ttgen-banner-name input::placeholder {
  color: rgba(204, 251, 241, 0.7);
}
.ttgen-banner-name input:focus {
  background: rgba(255, 255, 255, 0.18);
  border-color: #99f6e4;
  outline: none;
}
.ttgen-banner-name input[readonly] {
  cursor: default;
  opacity: 0.85;
}
.ttgen-context-icon {
  align-items: center;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  font-size: 13px;
  font-weight: 800;
  height: 46px;
  justify-content: center;
  width: 46px;
}
.ttgen-context-meta {
  color: #ccfbf1;
  flex-wrap: wrap;
  font-size: 11px;
  gap: 12px;
}
.ttgen-context-meta span + span::before {
  color: #5eead4;
  content: "\\2022";
  margin-right: 12px;
}
.ttgen-plan-badge {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding: 5px 10px;
  text-transform: uppercase;
}
.ttgen-plan-badge[data-status=applied] {
  background: #dcfce7;
  border-color: #86efac;
  color: #166534;
}
.ttgen-setup-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 0.85fr);
}
.ttgen-bell-editor {
  min-width: 0;
}
.ttgen-setup-head,
.ttgen-save-row {
  align-items: center;
  display: flex;
  gap: 12px;
  justify-content: space-between;
}
.ttgen-setup-head h4,
.ttgen-teacher-editor h4 {
  margin: 0 0 3px;
}
.ttgen-plan-name {
  display: grid;
  font-size: 11px;
  font-weight: 700;
  gap: 5px;
  margin-top: 14px;
}
.ttgen-plan-name > span,
.ttgen-teacher-time-form label > span {
  color: var(--muted, #64748b);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.ttgen-plan-name input,
.ttgen-teacher-time-form input,
.ttgen-teacher-time-form select {
  border: 1px solid var(--border, #e2e8f0);
  border-radius: 8px;
  box-sizing: border-box;
  min-height: 36px;
  padding: 0 10px;
  width: 100%;
}
.ttgen-plan-name input[readonly] {
  background: #f8fafc;
}
.ttgen-save-row {
  border-top: 1px solid var(--border, #e2e8f0);
  margin-top: 14px;
  padding-top: 12px;
}
.ttgen-teacher-editor {
  align-self: start;
  background: var(--surface-soft, #f8fafc);
  border: 1px solid var(--border, #e2e8f0);
  border-radius: 12px;
  padding: 14px;
}
.ttgen-teacher-time-form,
.ttgen-teacher-time-form label {
  display: grid;
  gap: 5px;
}
.ttgen-teacher-time-form {
  border-bottom: 1px solid var(--border, #e2e8f0);
  gap: 10px;
  margin-top: 14px;
  padding-bottom: 14px;
}
.ttgen-teacher-time-form label > span {
  color: var(--muted, #64748b);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
}
.ttgen-time-pair {
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr;
}
.ttgen-availability-list {
  display: grid;
  gap: 7px;
  margin-top: 12px;
  max-height: 240px;
  overflow: auto;
}
.ttgen-availability-rule {
  align-items: center;
  background: #fff;
  border: 1px solid var(--border, #e2e8f0);
  border-radius: 9px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  padding: 8px;
}
.ttgen-availability-rule strong,
.ttgen-availability-rule span {
  display: block;
}
.ttgen-availability-rule strong {
  font-size: 11px;
}
.ttgen-availability-rule span {
  color: var(--muted, #64748b);
  font-size: 10px;
  margin-top: 2px;
}
.ttgen-empty-rule {
  color: var(--muted, #64748b);
  font-size: 11px;
  margin: 12px 0 0;
}
.ttgen-status {
  text-transform: capitalize;
  font-size: 1.35rem !important;
}
.ttgen-period-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.ttgen-period-grid {
  display: grid;
  gap: 8px;
  margin-top: 14px;
}
.ttgen-period-row {
  align-items: center;
  background: var(--surface-soft, #f8fafc);
  border: 1px solid var(--border, #e2e8f0);
  border-radius: 10px;
  display: grid;
  gap: 8px;
  grid-template-columns: 36px minmax(0, 1.6fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) 72px;
  padding: 9px;
}
.ttgen-period-row.ttgen-period-head {
  background: transparent;
  border: none;
  color: var(--muted, #64748b);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 0 9px;
  text-transform: uppercase;
}
.ttgen-period-row input,
.ttgen-period-row select {
  border: 1px solid var(--border, #e2e8f0);
  border-radius: 7px;
  box-sizing: border-box;
  min-height: 36px;
  padding: 5px 8px;
  width: 100%;
}
.ttgen-period-row input[readonly],
.ttgen-period-row select:disabled {
  background: #f1f5f9;
  color: #334155;
}
.ttgen-period-row .ghost {
  justify-self: end;
  min-width: 72px;
}
.ttgen-period-number {
  align-self: center;
  background: #ccfbf1;
  border-radius: 999px;
  color: #0f766e;
  font-size: 11px;
  font-weight: 700;
  padding: 5px;
  text-align: center;
}
.ttgen-constraints .form-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
  font-size: 12px;
}
.ttgen-constraints .form-field input {
  border: 1px solid var(--border, #e2e8f0);
  border-radius: 8px;
  min-height: 34px;
  padding: 0 10px;
}
.ttgen-constraints .checkbox-row {
  align-items: center;
  display: flex;
  gap: 8px;
  font-size: 12px;
  margin: 8px 0 12px;
}
.ttgen-facility-list {
  border-top: 1px dashed var(--border, #e2e8f0);
  margin-top: 8px;
  padding-top: 10px;
}
.ttgen-facility {
  align-items: center;
  display: flex;
  gap: 8px;
  font-size: 12px;
  margin-bottom: 6px;
}
.ttgen-fac-type {
  background: #ecfeff;
  border-radius: 999px;
  color: #0f766e;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  text-transform: uppercase;
}
.ttgen-fac-type[data-type=lab] {
  background: #eff6ff;
  color: #1d4ed8;
}
.ttgen-fac-type[data-type=sports] {
  background: #fef3c7;
  color: #b45309;
}
.ttgen-fac-type[data-type=library] {
  background: #f3e8ff;
  color: #7e22ce;
}
.ttgen-avail-block {
  border-top: 1px dashed var(--border, #e2e8f0);
  margin-top: 12px;
  padding-top: 10px;
}
.ttgen-avail-form {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;
}
.ttgen-avail-form .filter-select {
  flex: 1 1 120px;
  min-width: 0;
}
.muted.tiny {
  font-size: 11px;
  margin: 2px 0;
}
.ttgen-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}
.ttgen-conflict-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}
.ttgen-chip {
  background: var(--surface-soft, #f8fafc);
  border: 1px solid var(--border, #e2e8f0);
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
}
.ttgen-conflict-list {
  list-style: none;
  margin: 0;
  max-height: 280px;
  overflow: auto;
  padding: 0;
}
.ttgen-conflict-list li {
  border-bottom: 1px solid var(--border, #e2e8f0);
  display: flex;
  gap: 8px;
  font-size: 12px;
  padding: 8px 0;
}
.ttgen-conflict-list li.err .ttgen-sev {
  color: #dc2626;
}
.ttgen-conflict-list li.warn .ttgen-sev {
  color: #d97706;
}
.ttgen-sev {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
}
.ttgen-unplaced {
  border-top: 1px dashed var(--border, #e2e8f0);
  margin-top: 12px;
  padding-top: 10px;
}
.ttgen-class-chips {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 15px;
}
.ttgen-chip-btn {
  background: #fff;
  border: 1px solid var(--border, #e2e8f0);
  border-radius: 999px;
  color: var(--text, #0f172a);
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  margin: 0;
  padding: 6px 14px;
}
.ttgen-chip-btn:hover {
  border-color: #14b8a6;
  color: #0f766e;
}
.ttgen-chip-btn.active {
  background: #0f766e;
  border-color: #0f766e;
  color: #fff;
}
.ttgen-toolbar {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  padding: 12px 16px;
}
.ttgen-toolbar-left {
  flex: 1;
  min-width: 220px;
}
.ttgen-toolbar-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.ttgen-selected-hint {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 13px;
}
.ttgen-slot-editor {
  background: var(--surface-soft, #f8fafc);
  border: 1px solid var(--border, #e2e8f0);
  border-radius: 12px;
  margin-bottom: 12px;
  padding: 12px;
}
.ttgen-slot-editor-grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 12px;
}
.ttgen-slot-editor-grid label {
  display: grid;
  gap: 4px;
}
.ttgen-slot-editor-grid label > span {
  color: var(--muted, #64748b);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
}
.ttgen-slot-editor-grid input,
.ttgen-slot-editor-grid select {
  border: 1px solid var(--border, #e2e8f0);
  border-radius: 8px;
  min-height: 36px;
  padding: 0 10px;
}
.ttgen-load {
  border-top: 1px solid var(--border, #e2e8f0);
  margin-top: 14px;
  padding-top: 12px;
}
.ttgen-load-list {
  display: grid;
  gap: 6px;
  margin-top: 8px;
}
.ttgen-load-row {
  align-items: center;
  background: #f8fafc;
  border-radius: 8px;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  padding: 6px 10px;
}
.ttgen-load-row.maxed {
  background: #fef2f2;
  color: #b91c1c;
}
.ttgen-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.ttgen-legend-item {
  align-items: center;
  color: var(--muted, #64748b);
  display: inline-flex;
  font-size: 11px;
  font-weight: 600;
  gap: 6px;
}
.ttgen-legend-item::before {
  border-radius: 3px;
  content: "";
  display: inline-block;
  height: 10px;
  width: 10px;
}
.ttgen-legend-item[data-type=subject]::before {
  background: #0d9488;
}
.ttgen-legend-item[data-type=lab]::before {
  background: #2563eb;
}
.ttgen-legend-item[data-type=sports]::before {
  background: #d97706;
}
.ttgen-legend-item[data-type=library]::before {
  background: #7c3aed;
}
.ttgen-legend-item[data-type=break]::before {
  background: #ea580c;
}
.ttgen-cal-wrap {
  border: 1px solid #dbe3ee;
  border-radius: 12px;
  max-height: min(70vh, 720px);
  max-width: 100%;
  overflow: auto;
}
.ttgen-calendar {
  border-collapse: separate;
  border-spacing: 0;
  min-width: 920px;
  width: 100%;
}
.ttgen-calendar th,
.ttgen-calendar td {
  border-bottom: 1px solid #e2e8f0;
  border-right: 1px solid #e2e8f0;
  font-size: 11px;
  padding: 8px;
  vertical-align: top;
}
.ttgen-calendar thead th {
  background:
    linear-gradient(
      180deg,
      #0f766e 0%,
      #0d9488 100%);
  color: #fff;
  font-weight: 700;
  position: sticky;
  top: 0;
  z-index: 2;
}
.ttgen-calendar thead th.is-today {
  background:
    linear-gradient(
      180deg,
      #115e59 0%,
      #0f766e 100%);
  box-shadow: inset 0 -3px 0 #fbbf24;
}
.ttgen-day-full {
  display: none;
}
.ttgen-day-short {
  display: inline;
}
.ttgen-sticky-col {
  background: #f0fdfa;
  left: 0;
  position: sticky;
  z-index: 1;
}
.ttgen-calendar thead .ttgen-sticky-col {
  background:
    linear-gradient(
      180deg,
      #0f766e 0%,
      #0d9488 100%);
  z-index: 3;
}
.ttgen-calendar tbody th {
  background: #f0fdfa;
  min-width: 96px;
  text-align: left;
  z-index: 1;
}
.ttgen-period-label {
  display: block;
  font-weight: 700;
}
.ttgen-calendar tr.is-break td,
.ttgen-calendar tr.is-break th {
  background: #fff7ed;
}
.ttgen-cell {
  background: #fff;
  min-height: 72px;
  min-width: 124px;
  position: relative;
  transition: background 0.15s ease;
}
.ttgen-cell.is-today {
  background: #f8fffd;
}
.ttgen-cell.is-empty {
  background-image:
    linear-gradient(
      45deg,
      rgba(148, 163, 184, 0.06) 25%,
      transparent 25%,
      transparent 50%,
      rgba(148, 163, 184, 0.06) 50%,
      rgba(148, 163, 184, 0.06) 75%,
      transparent 75%,
      transparent);
  background-size: 10px 10px;
  cursor: pointer;
}
.ttgen-cell.is-assigning {
  background: #ecfdf5;
  box-shadow: inset 0 0 0 2px #0d9488;
}
.ttgen-cell.is-empty .ttgen-free {
  color: #0f766e;
}
.ttgen-cell.drop-target {
  outline: 2px dashed #14b8a6;
  outline-offset: -2px;
}
.ttgen-cell.click-target {
  cursor: pointer;
}
.ttgen-cell.click-target:hover {
  background: #ecfdf5;
  box-shadow: inset 0 0 0 2px #14b8a6;
}
.ttgen-cell.has-conflict {
  background: #fef2f2;
}
.ttgen-slot {
  background:
    linear-gradient(
      180deg,
      hsla(var(--slot-hue, 168), 55%, 96%, 1) 0%,
      #ffffff 100%);
  border: 1px solid hsla(var(--slot-hue, 168), 40%, 78%, 1);
  border-left: 3px solid hsl(var(--slot-hue, 168), 55%, 38%);
  border-radius: 8px;
  cursor: grab;
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-bottom: 4px;
  padding: 6px 7px;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.ttgen-slot:active {
  cursor: grabbing;
}
.ttgen-slot:hover {
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.12);
  transform: translateY(-1px);
}
.ttgen-slot.selected {
  box-shadow: 0 0 0 2px #0d9488;
}
.ttgen-slot.locked {
  cursor: default;
  opacity: 0.85;
}
.ttgen-slot[data-type=lab] {
  border-left-color: #2563eb;
  background: #eff6ff;
}
.ttgen-slot[data-type=sports] {
  border-left-color: #d97706;
  background: #fffbeb;
}
.ttgen-slot[data-type=library] {
  border-left-color: #7c3aed;
  background: #f5f3ff;
}
.ttgen-slot[data-type=break] {
  border-left-color: #ea580c;
}
.ttgen-slot strong {
  font-size: 11px;
  line-height: 1.25;
}
.ttgen-slot span {
  font-size: 10px;
  line-height: 1.3;
}
.ttgen-room {
  color: #0f766e;
  font-size: 10px;
  font-weight: 600;
}
.ttgen-break {
  color: #c2410c;
  display: block;
  font-size: 11px;
  font-weight: 700;
  text-align: center;
}
.ttgen-free {
  color: #94a3b8;
  display: block;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 18px 0;
  text-align: center;
  text-transform: uppercase;
}
.ttgen-calendar-panel.compact .ttgen-cell {
  min-height: 52px;
  min-width: 100px;
  padding: 4px;
}
.ttgen-calendar-panel.compact .ttgen-slot {
  gap: 0;
  padding: 3px 5px;
}
.ttgen-calendar-panel.compact .ttgen-slot span.muted,
.ttgen-calendar-panel.compact .ttgen-room {
  display: none;
}
.ttgen-calendar-panel.compact .ttgen-free {
  padding: 10px 0;
}
@media (min-width: 1100px) {
  .ttgen-day-full {
    display: inline;
  }
  .ttgen-day-short {
    display: none;
  }
}
@media (max-width: 1100px) {
  .ttgen-steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 900px) {
  .ttgen-context,
  .ttgen-context-actions,
  .ttgen-setup-head,
  .ttgen-save-row,
  .ttgen-toolbar,
  .ttgen-guide-top,
  .ttgen-guide-actions {
    align-items: stretch;
    flex-direction: column;
  }
  .ttgen-steps {
    grid-template-columns: 1fr;
  }
  .ttgen-setup-grid {
    grid-template-columns: 1fr;
  }
  .ttgen-filter-field {
    width: min(100%, 180px);
  }
  .ttgen-period-row.ttgen-period-head {
    display: none;
  }
  .ttgen-period-row {
    grid-template-columns: 36px 1fr 1fr;
  }
  .ttgen-period-row input[type=time],
  .ttgen-period-row select,
  .ttgen-period-row .ghost {
    grid-column: span 1;
  }
  .ttgen-period-row input[type=text] {
    grid-column: 2 / -1;
  }
  .ttgen-toolbar-actions {
    align-items: stretch;
    flex-direction: column;
  }
}
/*# sourceMappingURL=app.component.css.map */
`], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 141 });
})();

// src/app/interceptors/auth-expired.interceptor.ts
var authExpiredInterceptor = (req, next) => {
  return next(req).pipe(tap({
    error: (error) => {
      if (error.status === 401 && localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY)) {
        localStorage.removeItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY);
        localStorage.removeItem(APP_CONSTANTS.LOCAL_STORAGE_USER_KEY);
        window.location.reload();
      }
    }
  }));
};

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([authExpiredInterceptor])), provideRouter([])]
}).catch((err) => console.error(err));
/*! Bundled license information:

@angular/common/fesm2022/http.mjs:
  (**
   * @license Angular v18.2.14
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/platform-browser/fesm2022/platform-browser.mjs:
  (**
   * @license Angular v18.2.14
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/router/fesm2022/router.mjs:
  (**
   * @license Angular v18.2.14
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
