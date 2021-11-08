import me from "./me.jpg";

export const Logo = (props: { w: number; h: number }) => (
  <img src={me} className="rounded-lg" width={props.w} height={props.h} />
);
