// Types
import { EventsAction } from "./events/events.types";
import { UtilsAction } from "./utils/utils.types";

export type RootAction = EventsAction | UtilsAction;
