type AnimationStyle = any;

type Position = "top" | "center" | "bottom" | undefined;

export interface ToastManagerProps {
  positionValue: number;
  width: number | "auto";
  duration: number;
  end: number;
  animationIn?: any;
  animationOut?: any;
  backdropTransitionOutTiming: number;
  backdropTransitionInTiming: number;
  animationInTiming: number;
  animationOutTiming: number;
  backdropColor: string;
  backdropOpacity: number;
  hasBackdrop: boolean;
  height: number | "auto";
  style: any;
  textStyle: any;
  theme: any;
  animationStyle?: AnimationStyle;
  position?: Position;
  showCloseIcon: boolean;
  showProgressBar: boolean;
  isRTL: boolean;
  colors?: Partial<ToastManagerColors>,
}

export interface ToastManagerState {
  isShow: boolean;
  text: string;
  opacityValue: any;
  barWidth: any;
  barColor: string;
  icon: string;
  position: Position;
  duration?: number;
  oldDuration?: number;
  animationStyle: Record<
    AnimationStyle,
    {
      animationIn: string;
      animationOut: string;
    }
  >;
}

export interface ToastManagerColors {
  light: {
    text: string;
    back: string;
  };
  dark: {
    text: string;
    back: string;
  };
  default: string;
  info: string;
  success: string;
  warn: string;
  error: string;
  textDefault: string;
  textDark: string;
}