export type EndpointSessionsList_OutputOK = {
  id: string;
  workDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  sessionUntilLongBreak: number;
  name: string;
  status: "new" | "active" | "completed";
  created: string;
  pomodoroCount: number;
  totalTimeElapsed: number;
}[];
export type EndpointSessionsListSubSessions_OutputOK = {
  id: string;
  type: "work" | "short_break" | "long_break";
  durationElapsed: number;
  isCompleted: boolean;
  sessionId: string | null;
  ended: string | null;
  created: string;
}[];
export type EndpointSessionsRemove_OutputNO_CONTENT = void;

export interface Contract {
  settings: {
    get: EndpointSettingsGet;
    update: EndpointSettingsUpdate;
  };
  sessions: {
    changeStatus: EndpointSessionsChangeStatus;
    create: EndpointSessionsCreate;
    getById: EndpointSessionsGetById;
    list: EndpointSessionsList;
    listSubSessions: EndpointSessionsListSubSessions;
    remove: EndpointSessionsRemove;
    update: EndpointSessionsUpdate;
  };
}
export interface EndpointSettingsGet {
  method: "get";
  input: {};
  output: {
    OK: EndpointSettingsGet_OutputOK;
  };
  media: null;
}
export interface EndpointSettingsGet_OutputOK {
  id: string;
  autoStartBreak: boolean;
  autoStartWork: boolean;
  workColor: string;
  shortBreakColor: string;
  longBreakColor: string;
  created: string;
  updated: string;
  notificationSound: {
    key: string;
    originalName: string;
    mimeType: string;
    size: number;
    thumbs: {
      size: string;
      key: string;
      width: number;
      height: number;
    }[];
  } | null;
}
export interface EndpointSettingsUpdate {
  method: "post";
  input: {
    body?: EndpointSettingsUpdate_InputBody;
  };
  output: {
    OK: EndpointSettingsUpdate_OutputOK;
  };
  media: {notificationSound: {optional: true}};
}
export interface EndpointSettingsUpdate_InputBody {
  autoStartBreak?: boolean;
  autoStartWork?: boolean;
  workColor?: string;
  shortBreakColor?: string;
  longBreakColor?: string;
}
export interface EndpointSettingsUpdate_OutputOK {
  id: string;
  autoStartBreak: boolean;
  autoStartWork: boolean;
  workColor: string;
  shortBreakColor: string;
  longBreakColor: string;
  created: string;
  updated: string;
  notificationSound: {
    key: string;
    originalName: string;
    mimeType: string;
    size: number;
    thumbs: {
      size: string;
      key: string;
      width: number;
      height: number;
    }[];
  } | null;
}
export interface EndpointSessionsChangeStatus {
  method: "post";
  input: {
    query?: EndpointSessionsChangeStatus_InputQuery;
    body?: EndpointSessionsChangeStatus_InputBody;
  };
  output: {
    OK: EndpointSessionsChangeStatus_OutputOK;
  };
  media: null;
}
export interface EndpointSessionsChangeStatus_InputQuery {
  id: string;
}
export interface EndpointSessionsChangeStatus_InputBody {
  status: "new" | "active" | "completed";
  subSessions?: {
    type: "work" | "short_break" | "long_break";
    durationElapsed: number;
    ended: string;
    isCompleted: boolean;
  }[];
  pomodoroCount?: number;
}
export interface EndpointSessionsChangeStatus_OutputOK {
  id: string;
  workDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  sessionUntilLongBreak: number;
  name: string;
  status: "new" | "active" | "completed";
  created: string;
  pomodoroCount: number;
  totalTimeElapsed: number;
}
export interface EndpointSessionsCreate {
  method: "post";
  input: {
    body?: EndpointSessionsCreate_InputBody;
  };
  output: {
    CREATED: EndpointSessionsCreate_OutputCREATED;
  };
  media: null;
}
export interface EndpointSessionsCreate_InputBody {
  name: string;
  workDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  sessionUntilLongBreak: number;
}
export interface EndpointSessionsCreate_OutputCREATED {
  id: string;
  workDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  sessionUntilLongBreak: number;
  name: string;
  status: "new" | "active" | "completed";
  created: string;
}
export interface EndpointSessionsGetById {
  method: "get";
  input: {
    query?: EndpointSessionsGetById_InputQuery;
  };
  output: {
    OK: EndpointSessionsGetById_OutputOK;
  };
  media: null;
}
export interface EndpointSessionsGetById_InputQuery {
  id: string;
}
export interface EndpointSessionsGetById_OutputOK {
  id: string;
  workDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  sessionUntilLongBreak: number;
  name: string;
  status: "new" | "active" | "completed";
  created: string;
  pomodoroCount: number;
  totalTimeElapsed: number;
  lastSubSessionType: "work" | "short_break" | "long_break";
}
export interface EndpointSessionsList {
  method: "get";
  input: {};
  output: {
    OK: EndpointSessionsList_OutputOK;
  };
  media: null;
}
export interface EndpointSessionsListSubSessions {
  method: "get";
  input: {
    query?: EndpointSessionsListSubSessions_InputQuery;
  };
  output: {
    OK: EndpointSessionsListSubSessions_OutputOK;
  };
  media: null;
}
export interface EndpointSessionsListSubSessions_InputQuery {
  sessionId: string;
}
export interface EndpointSessionsRemove {
  method: "post";
  input: {
    query?: EndpointSessionsRemove_InputQuery;
  };
  output: {
    NO_CONTENT: EndpointSessionsRemove_OutputNO_CONTENT;
  };
  media: null;
}
export interface EndpointSessionsRemove_InputQuery {
  id: string;
}
export interface EndpointSessionsUpdate {
  method: "post";
  input: {
    query?: EndpointSessionsUpdate_InputQuery;
    body?: EndpointSessionsUpdate_InputBody;
  };
  output: {
    OK: EndpointSessionsUpdate_OutputOK;
  };
  media: null;
}
export interface EndpointSessionsUpdate_InputQuery {
  id: string;
}
export interface EndpointSessionsUpdate_InputBody {
  name: string;
}
export interface EndpointSessionsUpdate_OutputOK {
  id: string;
  workDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  sessionUntilLongBreak: number;
  name: string;
  status: "new" | "active" | "completed";
  created: string;
}
