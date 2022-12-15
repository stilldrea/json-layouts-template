import {
  Divider,
  Chip,
  Switch,
  Badge,
  FormGroup,
  FormControlLabel,
  CircularProgress,
  Paper,
} from "@mui/material";

import renderCard from "./renderCards";
import renderGrid from "./renderGrid";
import renderText from "./renderText";

import renderButton from "./renderButton";
import renderTextField from "./renderTextField";
import renderAppbar from "./renderAppbar";
import renderSelect from "./renderSelect";
import renderList from "./renderList";
import renderAlert from "./renderAlert";
import renderTooltip from "./renderTooltip";
import renderImageField from "./renderImageField";
import renderBox from "./renderBox";
import Autocomplete from "./AutoComplete";
import SimpleDialogDemo from "./Dialog";
import renderImage from "./renderImage";
import WovenImageList from "./ImageList";
import renderTable from "./renderTable";
import renderForm from "./renderForm";
import Checkbox from "./Checkbox";
import renderTabs from "../renderTabs";
import { IBox } from "./Box";
import Crumbs from "./Crumbs";
import TemporaryDrawer from "./Drawer";
import UnderlineLink from "./Link";
import Paypal from "./Paypal";
import BasicSpeedDial from "./SpeedDial";
import PaginationOutlined from "./Pagination";
import Skeleton from "./Skeleton";
import BottomNav from "./BottomNav";
import SimpleSnackbar from "./Snackbar";
import Progress from "./Progress";
import HorizontalStepper from "./Stepper";
import Slider from "./Slider";
import Fab from "./Fab";
import RadioButtonsGroup from "./RadioGroup";
import Rating from "./Rating";
import SimpleContainer from "./Container";
import TransferList from "./TransferList";
import ToggleButton from "./ToggleButton";
import ControlledAccordions from "./Accordions";
import Avatar from "./Avatar";
import DefaultComponent from "./DefaultComponent";
import BasicChips from "./Chip";
import SimpleBadge from "./Badge";
import PositionedMenu from "./Menu";

export default function renderComponents(components: any[] = []) {
  return components.map((component: any, index: number) => {
    const {
      type,
      data = {
        components: [],
      },
    } = component;
    switch (type) {
      case "grid": {
        const { components = [], spacing = 2 }: any = data;
        return renderGrid({ components, spacing });
      }
      case "autocomplete": {
        return <Autocomplete />;
      }
      case "dialog": {
        return <SimpleDialogDemo />;
      }
      case "button": {
        const {
          color = "primary",
          text,
          clickAction,
          fullWidth,
          variant,
          sx = {},
          disabled,
          href,
          target,
        } = data;
        return renderButton({
          color,
          text,
          clickAction,
          variant,
          fullWidth,
          sx,
          disabled,
          href,
          target,
        });
      }
      case "card": {
        const { imageUrl = "", title, text, actions } = data;
        return renderCard(imageUrl, title, text, actions);
      }
      case "image": {
        const { imageUrl } = data;
        return renderImage(imageUrl);
      }
      case "imagelist": {
        return <WovenImageList />;
      }
      case "table": {
        const { rows = [], headers = [] }: any = data;
        return renderTable(headers, rows);
      }
      case "form": {
        const { components = [], label }: any = data;
        return renderForm({ components, label });
      }
      case "checkbox": {
        return <Checkbox key={index} />;
      }
      case "textfield": {
        const { label } = data;
        return renderTextField({ label });
      }
      case "tabs": {
        return renderTabs();
      }
      case "paper": {
        const { elevation = 1, padding = 2, components: cmps = [] }: any = data;
        return (
          <Paper elevation={elevation} sx={{ p: padding }}>
            {renderComponents(cmps)}
          </Paper>
        );
      }
      case "box": {
        const {
          components = [],
          centerHorizontal,
          centerVertical,
          minHeight,
          flex,
          textAlign,
          spaceEvenly,
        }: IBox = data;
        return renderBox({
          components,
          centerHorizontal,
          centerVertical,
          minHeight,
          flex,
          textAlign,
          spaceEvenly,
        });
      }
      case "circular_progress": {
        return <CircularProgress />;
      }
      case "breadcrumbs": {
        return <Crumbs />;
      }
      case "drawer": {
        return <TemporaryDrawer />;
      }
      case "link": {
        return <UnderlineLink />;
      }
      case "menu": {
        return <PositionedMenu />;
      }
      case "paypal": {
        return <Paypal />;
      }
      case "speeddial": {
        return <BasicSpeedDial />;
      }
      case "pagination": {
        return <PaginationOutlined />;
      }
      case "sketon": {
        return <Skeleton />;
      }
      case "bottom_navigation": {
        return <BottomNav />;
      }
      case "snackbar": {
        return <SimpleSnackbar />;
      }
      case "progress": {
        return <Progress />;
      }
      case "stepper": {
        return <HorizontalStepper />;
      }
      case "appbar": {
        return renderAppbar();
      }
      case "radio_group": {
      }
      case "select": {
        const { options = [], label } = data;
        return renderSelect({ options, label });
      }
      case "slider": {
        return <Slider />;
      }
      case "fab": {
        return <Fab />;
      }
      case "radiogroup": {
        return <RadioButtonsGroup />;
      }
      case "rating": {
        return <Rating />;
      }
      case "container": {
        return <SimpleContainer />;
      }
      case "switch": {
        const { label } = data;
        return (
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked={false} />}
              label={label}
            />
          </FormGroup>
        );
      }
      case "transferlist": {
        // return renderBox({});
        return <TransferList />;
      }
      case "togglebutton": {
        return <ToggleButton />;
      }
      case "accordion": {
        return <ControlledAccordions />;
      }
      case "avatar": {
        const { clickAction = "" } = data;
        return <Avatar clickAction={clickAction} />;
      }
      case "badge": {
        return <SimpleBadge />;
      }
      case "chip": {
        return <BasicChips />;
      }
      case "divider": {
        return <Divider sx={{ my: 2 }} />;
      }
      // case "icons": {
      // }
      case "list": {
        return renderList({ children: null });
      }
      case "tooltip": {
        return renderTooltip();
      }
      case "text": {
        const { text, variant } = data as any;
        return renderText(text, variant);
      }
      case "alert": {
        return renderAlert();
      }
      case "imagefield": {
        const { desc, value, handleChange } = data;
        return renderImageField({ desc, value, handleChange });
      }
      default: {
        return (
          <DefaultComponent key={index}>
            {renderText("No component data")}
          </DefaultComponent>
        );
      }
    }
  });
}
