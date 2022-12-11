import React, { Suspense } from "react";
import renderComponents from "../util/components/renderComponents";

import Skeleton from "@mui/material/Skeleton";
import { ErrorBoundary } from "../features/errorBoundary";

const MuiBox = React.lazy(() => import("@mui/material/Box"));

export default function Box({
  components = [],
  flex = false,
  centerHorizontal = false,
  centerVertical = false,
  minHeight = "100%",
  textAlign = "left",
}: IBox) {
  const children = React.useMemo(
    () => renderComponents(components),
    [components]
  );

  let sx: any = {};

  if (flex) sx.display = "flex";
  if (centerHorizontal) sx.justifyContent = "center";
  if (centerVertical) sx.alignItems = "center";
  if (minHeight) sx.minHeight = minHeight;
  if (textAlign) sx.textAlign = "center";

  const suspenseFallback = () => <Skeleton variant="rectangular" />;

  return (
    <ErrorBoundary>
      <Suspense fallback={suspenseFallback()}>
        <MuiBox sx={{ ...sx }}>{children}</MuiBox>;
      </Suspense>
    </ErrorBoundary>
  );
}

export interface IBox {
  flex?: boolean;
  centerHorizontal?: boolean;
  centerVertical?: boolean;
  minHeight?: any;
  textAlign?: string;
  components?: any[];
}