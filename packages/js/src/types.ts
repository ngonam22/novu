export enum NotificationStatus {
  READ = 'read',
  SEEN = 'seen',
  UNREAD = 'unread',
  UNSEEN = 'unseen',
}

export enum NotificationButton {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum NotificationActionStatus {
  PENDING = 'pending',
  DONE = 'done',
}

export enum AvatarType {
  NONE = 'none',
  USER = 'user',
  SYSTEM_ICON = 'system_icon',
  SYSTEM_CUSTOM = 'system_custom',
}

export enum CtaType {
  REDIRECT = 'redirect',
}

export enum PreferenceLevel {
  GLOBAL = 'global',
  TEMPLATE = 'template',
}

export enum ChannelType {
  IN_APP = 'in_app',
  EMAIL = 'email',
  SMS = 'sms',
  CHAT = 'chat',
  PUSH = 'push',
}

export enum PreferenceOverrideSource {
  SUBSCRIBER = 'subscriber',
  TEMPLATE = 'template',
  WORKFLOW_OVERRIDE = 'workflowOverride',
}

export enum WebSocketEvent {
  RECEIVED = 'notification_received',
  UNREAD = 'unread_count_changed',
  UNSEEN = 'unseen_count_changed',
}

export enum ActionTypeEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export type Session = {
  token: string;
  unreadCount: number;
};

export type Avatar = {
  type: AvatarType;
  data: string | null;
};

export type MessageButton = {
  type: NotificationButton;
  content: string;
  resultContent?: string;
};

export type MessageAction = {
  status?: NotificationActionStatus;
  buttons?: MessageButton[];
  result: {
    payload?: Record<string, unknown>;
    type?: NotificationButton;
  };
};

export type Subscriber = {
  id: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  subscriberId: string;
};

export type Action = {
  label: string;
  url?: string;
  isCompleted: boolean;
};

export type InboxNotification = {
  id: string;
  // subject?: string;
  body: string;
  to: Subscriber;
  isRead: boolean;
  isArchived: boolean;
  createdAt: string;
  readAt?: string | null;
  archivedAt?: string | null;
  actor?: Subscriber;
  avatar?: Avatar;
  primaryAction?: Action;
  secondaryAction?: Action;
  channelType: ChannelType;
  tags?: string[];
};

export type NotificationFilter = {
  tags?: string[];
  read?: boolean;
  archived?: boolean;
};

export type Workflow = {
  id: string;
  name: string;
  critical: boolean;
  identifier: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: Record<string, any>;
};

export type ChannelPreference = {
  email?: boolean;
  sms?: boolean;
  in_app?: boolean;
  chat?: boolean;
  push?: boolean;
};

export type PaginatedResponse<T = unknown> = {
  data: T[];
  hasMore: boolean;
  totalCount: number;
  pageSize: number;
  page: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TODO = any;
