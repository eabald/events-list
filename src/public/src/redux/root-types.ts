// Types
import { EventsAction } from "./events/events.types";
import { UtilsAction } from "./utils/utils.types";

/**
 * Global state management types
 * @author Maciej Krawczyk
 */
export type RootAction = EventsAction | UtilsAction;
