tips.json
------

import axios from "axios";

export const Tips = (props) => {
    const tipsId = props;
    
    axios
        .get(`${String(process.env.NEXT_PUBLIC_API_URL)}` + `XXXXXXX/${tipsId}`)
        .then((res) => {
            console.log(res.data);
            return(
                res.data
            );
        })
        .catch((error)=>{
            console.log(error);
        });
};
------ 

confirmdiamic
-----
  import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export type ConfirmDiallogProps = {
    onClose : (value : string) => void
    dialogTitle? : string
    message? : string
}

export const ConfirmDiallog = (props : ConfirmDiallogProps) => {
    const {onClose, dialogTitle, message } = props;

    // // ダイアログを開くボタン押下時
    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // // 閉じるボタン押下時
    // const handleClose = () => {
    //     setOpen(false);
    //     alert('キャンセルボタンが押されました');
    // };

    return (
        <div>
            {/* <Button variant='contained'
                    onClick={handleClickOpen}
                    sx={{
                        width: '10%',
                        height: 50,
                    }}
            >
                { buttonTitle }
            </Button> */}

            <Dialog
                // open = {open}
                // onClose = {handleClose}
                open
                onClose = {() => onClose('close')}
                aria-labelledby="ConfirmDialogButtonTitle"  // Id
                aria-describedby="ConfirmDialogButton"      // 要素の概要
            >
                <DialogTitle id="ConfirmDialogTitle">
                    { dialogTitle }
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="ConfirmDialogText">
                        { message }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick= {() => onClose('ok')}>更新</Button>
                    <Button onClick= {() => onClose('cancel') }>キャンセル</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
--------
menucall centrer
\\\\----
import * as MenuLayout from './Layout/index';

import TodayIcon from '@mui/icons-material/Today';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import DescriptionIcon from '@mui/icons-material/Description';
import HistoryToggleOfIcon from '@mui/icons-material/HistoryToggleOff';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MessageIcon from '@mui/icons-material/Message';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ProductionQuantityLimitsTwoToneIcon from '@mui/icons-material/ProductionQuantityLimitsTwoTone';
import PlaylistAddCheckTwoToneIcon from '@mui/icons-material/PlaylistAddCheckCircleTwoTone';
import CalenderMonthIcon from '@mui/icons-material/CalendarMonth';
import FeaturePlayListIcon from '@mui/icons-material/FeaturedPlayList';
import ForumIcon from '@mui/icons-material/Forum';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';

const MenuCallCenterArr: MenuLayout.MenuItem[] = [
    { id: 1, url:"/CallCenter/TodoList", icon:<TodayIcon />, text:'本日予定'},
    { id: 2, url:"/CallCenter/OutCall", icon:<CallTwoToneIcon />, text:'アウトコール'},
    { id: 9, url:"/CallCenter/Customer", icon:<PersonSearchIcon />, text:'顧客検索'},
    { id: 10, url:"/CallCenter/OrderTodayList", icon:<ProductionQuantityLimitsTwoToneIcon />, text:'受注速報'},
    { id: 11, url:"/CallCenter/RequestState", icon:<PlaylistAddCheckTwoToneIcon />, text:'依頼状況'},
    { id: 12, url:"/CallCenter/TodayReception", icon:<FeaturePlayListIcon />, text:'本日応対'},
    { id: 13, url:"/CallCenter/MsgList", icon:<ForumIcon />, text:'伝言状況'},
    { id: 14, url:"/CallCenter/CallList", icon:<ContactPhoneIcon />, text:'コールリスト'},
    { id: 15, url:"/CallCenter/CallBack", icon:<PhoneCallbackIcon />, text:'折り返し'},
    { id: 16, url:"/CallCenter/ShiftWork", icon:<CalenderMonthIcon />, text:'シフト'},
];

const MenuCallCenterReceptionArr: MenuLayout.MenuItem[] = [
    { id: 3, url:"/CallCenter/BasicRegist", icon:<PersonAddIcon />, text:'応対入力'},
    { id: 4, url:"/CallCenter/Order", icon:<AddShoppingCartIcon />, text:'受注入力'},
    { id: 5, url:"/CallCenter/PurchaseHistory", icon:<HistoryToggleOfIcon />, text:'購入履歴'},
    { id: 6, url:"/CallCenter/SendDoc", icon:<DescriptionIcon />, text:'資料送付'},
    { id: 7, url:"/CallCenter/InputMsg", icon:<MessageIcon />, text:'伝言入力'},
    { id: 8, url:"/CallCenter/DmSendHistory", icon:<MarkAsUnreadIcon />, text:'ＤＭ発送履歴'}
];

export const MenuItems = () =>{ 
    return MenuCallCenterArr.concat(MenuCallCenterReceptionArr)
};

export default MenuItems;

-----------------employed
-
  import  * as React from 'react';
import * as MenuLayout from './Layout/index';

// アイコン関連
import HistoryToggleOfIcon from '@mui/icons-material/HistoryToggleOff';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// #region メニュー配列設定
const MenuEmployeeArr: MenuLayout.MenuItem[] = [
    { id: 1, url:"/CallCenter/Employee/Order", icon:<AddShoppingCartIcon />, text:'社販受注入力'},
    { id: 2, url:"/CallCenter/Employee/OrderHistory", icon:<HistoryToggleOfIcon />, text:'社販購入履歴'}
];
// #endregion

export default function MenuEmployee () {
    return (
        <MenuLayout.Menu MenuArr={MenuEmployeeArr}/>
    );
};
