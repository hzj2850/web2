import Vue from 'vue';
import {
    Tabbar,
    TabbarItem,
    Image,
    Row,
    Col,
    Switch,
    RadioGroup,
    Radio,
    Popup,
    Icon,
    DatetimePicker,
    List,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    Loading,
    Toast,
    Button,
    NavBar,
    Field,
    Cell,
    CellGroup,
    Uploader,
    Search,
    Area,
    Overlay,
    Dialog,
    PullRefresh,
    Stepper,
    ActionSheet,
    Picker,
    Lazyload,
    CountDown
} from 'vant';

Vue.use(Row)
    .use(Col)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Image)
    .use(Switch)
    .use(RadioGroup)
    .use(Radio)
    .use(Popup)
    .use(Icon)
    .use(DatetimePicker)
    .use(List)
    .use(Swipe)
    .use(SwipeItem)
    .use(Grid)
    .use(GridItem)
    .use(Loading)
    .use(Toast)
    .use(Button)
    .use(NavBar)
    .use(Field)
    .use(Cell)
    .use(CellGroup)
    .use(Uploader)
    .use(Search)
    .use(Area)
    .use(Overlay)
    .use(Dialog)
    .use(PullRefresh)
    .use(Stepper)
    .use(ActionSheet)
    .use(Picker)
    .use(Lazyload)
    .use(CountDown)

Toast.setDefaultOptions('loading', {duration: 0, forbidClick: true});
