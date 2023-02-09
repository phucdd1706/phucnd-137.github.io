// THIRD-PARTY IMPORTS
import { Suspense, ElementType } from "react";

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
