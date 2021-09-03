import me from "./assets/me.jpg";
import me1 from "./assets/me1.png";

export const Logo = (props: { w?: number; h?: number }) => (
    <img src={me1} className="rounded-lg" width={props.w} height={props.h} />
);
