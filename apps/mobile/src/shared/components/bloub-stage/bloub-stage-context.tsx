import {
  createContext,
  type PropsWithChildren,
  useContext,
  useId,
  useLayoutEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { type SharedValue, useSharedValue } from "react-native-reanimated";

import { type BloubStageRequest, type BloubStageStore, createBloubStageStore } from "./bloub-stage-store";

interface BloubStageContextValue {
  store: BloubStageStore;
  /** Points the header moves up by, such as to keep a field above the keyboard. A worklet may set it. */
  lift: SharedValue<number>;
}

const BloubStageContext = createContext<BloubStageContextValue | null>(null);

export function BloubStageProvider({ children }: PropsWithChildren) {
  const [store] = useState(createBloubStageStore);
  const lift = useSharedValue(0);
  const value = useMemo(() => ({ store, lift }), [lift, store]);
  return <BloubStageContext.Provider value={value}>{children}</BloubStageContext.Provider>;
}

export function useBloubStage(): BloubStageContextValue {
  const value = useContext(BloubStageContext);
  if (!value) throw new Error("useBloubStage requires BloubStageProvider.");
  return value;
}

/**
 * Asks the stage to show `request` while this component is mounted. `null` withdraws it. Returns
 * true while the stage shows this request.
 */
export function useBloubStageRequest(request: BloubStageRequest | null, priority: number): boolean {
  const { store } = useBloubStage();
  const id = useId();
  // Only a change of this request's own state renders the requester again.
  const active = useSyncExternalStore(store.subscribe, () => store.active()?.id === id);
  // The store compares the request, so a render that changes nothing on the stage costs nothing.
  useLayoutEffect(() => {
    if (request) store.set(id, priority, request);
    else store.remove(id);
  });
  useLayoutEffect(() => () => store.remove(id), [id, store]);
  return active;
}
