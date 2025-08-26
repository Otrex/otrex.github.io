import { Any } from "@/lib/type";
import React from "react";

export default function mountedHOC<P = Any>(WrappedComponent: React.FC<P>) {
  return function EnhancedComponent(
    props: P extends React.JSX.IntrinsicAttributes
      ? P
      : P & React.JSX.IntrinsicAttributes
  ) {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
      return () => setMounted(false);
    }, []);

    if (!mounted) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}
