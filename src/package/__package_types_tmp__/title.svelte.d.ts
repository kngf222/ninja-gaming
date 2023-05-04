/** @typedef {typeof __propDef.props}  TitleProps */
/** @typedef {typeof __propDef.events}  TitleEvents */
/** @typedef {typeof __propDef.slots}  TitleSlots */
export default class Title extends SvelteComponentTyped<{
    title?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TitleProps = typeof __propDef.props;
export type TitleEvents = typeof __propDef.events;
export type TitleSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
