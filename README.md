table 
-----

import React, { useState } from 'react'
import * as Layout from "../../../components/Layout/index";
import Head from 'next/head';
import { DataGrid, GridColDef, jaJP } from '@mui/x-data-grid';
import { Button, Grid, Link as MuiLink } from '@mui/material';
import Box from '@mui/material/Box';
import NextLink from "next/link";
import { StyledDataGrid, StyledHeader, StyledTitleHeader } from "../../../styles/Styled";
import { ConfirmDiallogProps, ConfirmDiallog } from '../../../components/Common/ComfirmDialog';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link'
import { useTheme } from "@mui/material/styles";
import { useRouter } from 'next/router'


const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    borderColor: 'text.primary',
    width: '5rem',
    height: '5rem',
};

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}
export const Main = (): JSX.Element => {
    const theme = useTheme();
    const router = useRouter()
    return (
        <React.Fragment>
            <div>
                <div>
                    <Head>
                        <title>折り返し対応履歴</title>
                    </Head>
                    <div>
                        折り返し対応履歴
                    </div>
                    <Box >
                        <br />
                        <br />
                        <br />
                        <Box sx={{
                            height: '90%',
                            width: '100%',
                        }}>
                            <Box
                                sx={{
                                    height: '100%',
                                    width: '100%',
                                    maxWidth: "50%",
                                }}>
                                <Box
                                    sx={{
                                        bgcolor: 'info.main',
                                        color: 'background.paper',
                                        p: 2,
                                        textAlign: 'center',
                                        // maxWidth: "50%",
                                    }}
                                >
                                    <StyledTitleHeader>
                                        <strong>折り返し対応履歴</strong>
                                    </StyledTitleHeader>
                                </Box>
                                <div>
                                    <TableContainer component={Paper} sx={{ maxWidth: "100%", justifyContent: "center" }}>
                                        <Table sx={{ textAlign: "center", border: 0, backgroundColor: "#1976d2", }}>
                                        </Table>
                                        <Table sx={{ maxWidth: "100%" }}  >
                                            <TableHead sx={{ commonStyles, border: 0.5 }}>
                                                <TableRow sx={{ commonStyles, border: 0.5 }} >
                                                    <TableCell align="center" sx={{ commonStyles, borderRight: 0.5 }}>対応日時</TableCell>
                                                    <TableCell align="center" sx={{ commonStyles, borderRight: 0.5 }}>2022/05/17 14:13</TableCell>

                                                </TableRow>
                                            </TableHead>
                                            <TableHead sx={{ commonStyles, border: 0.5 }}>
                                                <TableRow sx={{ commonStyles, border: 0.5 }}>

                                                    <TableCell align="center" sx={{ commonStyles, borderRight: 0.5 }}  >状態</TableCell>
                                                    <TableCell align="center" sx={{ commonStyles, borderRight: 0.5 }}>未着手</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableHead sx={{ commonStyles, border: 0.5 }}>
                                                <TableRow sx={{ commonStyles, border: 0.5 }}>
                                                    <TableCell align="center" sx={{ commonStyles, borderRight: 0.5 }}  >対応担当者</TableCell>
                                                    <TableCell align="center" sx={{ commonStyles, borderRight: 0.5 }}>電話研修2</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableHead sx={{ commonStyles, border: 0.5 }}>
                                                <TableRow sx={{ commonStyles, border: 0.5 }}>
                                                    <TableCell align="center" sx={{ commonStyles, borderRight: 0.5 }}  >備考</TableCell>
                                                    <TableCell align="center" sx={{ commonStyles, borderRight: 0.5 }}>楽しむお名前：テスト太郎</TableCell>
                                                </TableRow>
                                            </TableHead>

                                        </Table>
                                    </TableContainer >
                                    <Box sx={{
                                        height: '100%',
                                        width: '100%',
                                    }}>
                                        <br />

                                        {/*ボタン */}
                                        <StyledHeader>
                                            <Grid container spacing={4} >
                                                <Grid item xs={8} >
                                                    <Box
                                                        display="flex"
                                                        justifyContent="flex-end"
                                                        alignItems="flex-end"
                                                    >
                                                        <Button color="primary" size='large' variant="contained"
                                                        >更新
                                                        </Button>
                                                    </Box >
                                                </Grid>
                                                <Grid item xs={4} >
                                                    <Button color="primary" size='large' variant="contained"
                                                        type="button" onClick={() => router.push('/CallCenter/CallBack')}
                                                    >戻る
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </StyledHeader>
                                    </Box >
                                </div>
                            </Box >
                        </Box>
                    </Box>
                </div>
            </div >
        </React.Fragment >
    )
};

export const Index = (): JSX.Element => {
    return (
        <React.Fragment>
            <Layout.Index mainComponent={<Main />} title='折り返し対応履歴' />
        </React.Fragment>

    );
};

export default Index;

---- constant common 
-----
// ソースで使用する定数やエラーコードなどを記載する
export const FIRST_NUMBER = 1;

// **********************************
// 名称区分　定義
// **********************************
export const CST_NAME_KBN_CALLKBN = '23';           // コール区分
export const CST_NAME_KBN_COMPFLG2 = 'JS';          // 完了区分（検討状態）


// **********************************
// 論理削除区分　定義
// **********************************
export const CST_DAT_KBN_USE = '1';                 // 利用中
export const CST_DAT_KBN_DELETE = '9';              // 削除


// **********************************
// 伝言状況完了区分　定義
// **********************************
export const CST_MSGLIST_COMPLETE_KBN_UNFIN = 0;      // 未完了
export const CST_MSGLIST_COMPLETE_KBN_FIN = 1;        // 完了

// **********************************
// 完了区分　定義
// **********************************
export const CST_COMPLETE_KBN_UNFIN = '00001';      // 未完了
export const CST_COMPLETE_KBN_FIN = '00002';        // 完了


// **********************************
// 本日の予定一覧　背景色
// **********************************
export const CST_COLOR_TODOLSIT_FINISH = '#696969';        // 完了
export const CST_COLOR_TODOLSIT_HOLD = '#e0ffff';          // 保留
export const CST_COLOR_TODOLSIT_MESSAGE = '#ffe0be';       // 伝言
export const CST_COLOR_TODOLSIT_WELLCALL = '#ffff66';      // お元気コール
export const CST_COLOR_TODOLSIT_PRODARRIVCALL = '#ffffff'; // 商品着日コール
export const CST_COLOR_TODOLSIT_DELINOTIFCALL = '#ffad90'; // 届日連絡コール
export const CST_COLOR_TODOLSIT_RETURNREASON = '#ff570d';  // 返品理由保留
export const CST_COLOR_TODOLSIT_REQUESTAPPR = '#ffbbff';   // 依頼承認
export const CST_COLOR_TODOLSIT_REPEATREGIST = '#78ff94';  // リピータ伝票登録
export const CST_COLOR_TODOLSIT_RETURNCONF = '#adff2f';    // 返品確認
export const CST_COLOR_TODOLSIT_REQUESTINV = '#a1eefd';    // 調査依頼
export const CST_COLOR_TODOLSIT_OTHER = '#b0ffb0';         // 上記以外

// **********************************
// 色　定義
// **********************************
export const CST_COLOR_WHITE    = '#ffffff';        // 白
export const CST_COLOR_RED      = '#ff0000';        // 赤
export const CST_COLOR_GREEN    = '#ccffcc';        // 緑
export const CST_COLOR_HB_GREEN = '#ccffbb';        // 緑（ホバー用）
export const CST_COLOR_GRAY     = '#cccccc';        // グレー
export const CST_COLOR_HB_GRAY  = '#b3b3b3';        // グレー（ホバー用）
---------

common 2
----
// **********************************
// Tips用タイトル　定義
// **********************************
// コールセンター一般
export const CST_TIPS_TITLE_TODOLIST = "本日の予定";
export const CST_TIPS_TITLE_OUTCALL = "アウトコール";
export const CST_TIPS_TITLE_CUSTOMER = "顧客検索";
export const CST_TIPS_TITLE_ORDERTODAYLIST = "受注速報";
export const CST_TIPS_TITLE_REQUESTSTATE = "依頼状況";
export const CST_TIPS_TITLE_TODAYRECEPTION = "本日応対";
export const CST_TIPS_TITLE_MSGLIST = "伝言状況";
export const CST_TIPS_TITLE_CALLLIST = "コールリスト";
export const CST_TIPS_TITLE_CALLBACK = "折り返し";
export const CST_TIPS_TITLE_SHIFTWORK = "シフト";
export const CST_TIPS_TITLE_BASICREGIST = "応対入力";
export const CST_TIPS_TITLE_ORDER = "受注入力";
export const CST_TIPS_TITLE_PURCHASEHISTORY = "購入履歴";
export const CST_TIPS_TITLE_SENDDOC = "資料送付";
export const CST_TIPS_TITLE_INPUTMSG = "伝言入力";
export const CST_TIPS_TITLE_DMSENDHISTORY = "DM発送履歴";

// 社販受注
export const CST_TIPS_TITLE_EMPLOYEE_ORDER = "社販受注";
export const CST_TIPS_TITLE_EMPLOYEE_PURCHASEHISTORY = "社販購入履歴";

// コールセンター管理
export const CST_TIPS_TITLE_REGISTOPERATOR = "担当者登録";
export const CST_TIPS_TITLE_SETAUTHORITY = "セキュリティ設定";
export const CST_TIPS_TITLE_INPUTANNOUNCE = "メッセージ入力";
export const CST_TIPS_TITLE_SALESTARGET = "売上目標";
export const CST_TIPS_TITLE_SHIPMANAGEMENT = "出荷管理";

// 社販受注管理
export const CST_TIPS_TITLE_EMPLOYEE_CUSTOMERMAINTE = "社販顧客メンテ";
export const CST_TIPS_TITLE_EMPLOYEE_CHANGECUSTOMER = "社販顧客変更";
export const CST_TIPS_TITLE_EMPLOYEE_SCHEDULE = "社販スケジュール";

// オファー管理
export const CST_TIPS_TITLE_OFFER = "オファー管理";

// 在庫管理
export const CST_TIPS_TITLE_STOCKMANAGE = "在庫管理";

// 受注取込
export const CST_TIPS_TITLE_IMPORTORDER = "受注取込";

// EC伝票取込
export const CST_TIPS_TITLE_IMPORTECORDER = "EC伝票取込";

// **********************************
// Tips用本文　定義
// **********************************
// コールセンター一般
export const CST_TIPS_CONTENT_TODOLIST = "本日の予定TIPS";
export const CST_TIPS_CONTENT_OUTCALL = "アウトコールTIPS";
export const CST_TIPS_CONTENT_CUSTOMER = "顧客検索TIPS";
export const CST_TIPS_CONTENT_ORDERTODAYLIST = "受注速報TIPS";
export const CST_TIPS_CONTENT_REQUESTSTATE = "依頼状況TIPS";
export const CST_TIPS_CONTENT_TODAYRECEPTION = "●一覧の背景色・文字色について\n　背景色が緑：完了している応対情報になります。\n　文字色が赤：留守区分が1の応対情報になります。\n\n" +
                                               "●担当顧客分のみ表示ボタン押下時\n　ログイン者の担当顧客分の応対情報を表示します。\n　（ボタン名が「受付分全て表示」に変わります）\n" +
                                               "●受付分全て表示ボタン押下時\n　担当でない顧客の応対情報も表示します。\n　（ボタン名が「担当顧客分のみ表示」に変わります）\n\n" +
                                               "●完了区分のリストボックス選択時\n　選択された完了区分に合致する応対情報の一覧が\n　表示されます。\n\n" +
                                               "●詳細ボタン押下時\n　該当顧客の新規応対登録画面が表示されます。\n\n" +
                                               "●顧客名リンク押下時\n　該当顧客の応対入力画面が表示されます。\n　（ログイン者の権限がないもしくは、抹消顧客の場合は\n　　リンク表示されません）"
                                               ;
export const CST_TIPS_CONTENT_MSGLIST = "●一覧の背景色・文字色について\n　完了しているデータは背景色をグレーとしており、\n　状態欄に「完了」が表示されます。\n\n" +
                                        "●コール区分リストボックス選択時（業務部門のみ表示）\n　選択されたコール区分に合致する伝言情報の一覧が\n　表示されます。\n　未選択時は以下のコール区分の情報が表示されます。" +
                                        "\n　　・伝言　　　・返品理由保留\n　　・返品確認　・調査依頼\n\n" +
                                        "●顧客名リンク押下時\n　該当顧客の応対入力画面が表示されます。\n　（ログイン者の権限がないもしくは、抹消顧客の場合は\n　　リンク表示されません）\n\n" +
                                        "●自動送信分を出すボタン押下時（業務部門のみ表示）\n　システムより自動送信された伝言情報を表示します。\n　（ボタン名が「本人送信分を出す」に変わります）\n\n" +
                                        "●本人送信分を出すボタン押下時\n　本人が送信した伝言情報を表示します。\n　（ボタン名が「自動送信分を出す」に変わります）\n\n" +
                                        "●完了分を出す（出さない）ボタン押下時\n　コール結果が完了している情報も一覧に表示します。\n　（完了分を出さない押下時はコール結果が完了している\n　　情報は一覧に表示されません）\n\n" +
                                        "●移動ボタン押下時\n　指定された日付の伝言情報を表示します。\n　本日以外を指定した場合は「完了分を出す」設定となり、\n　完了分を出す（出さない）ボタンは無効になります。"
                                        ;
export const CST_TIPS_CONTENT_CALLLIST = "コールリストTIPS";
export const CST_TIPS_CONTENT_CALLBACK = "折り返しTIPS";
export const CST_TIPS_CONTENT_SHIFTWORK = "シフトTIPS";
export const CST_TIPS_CONTENT_BASICREGIST = "応対入力TIPS";
export const CST_TIPS_CONTENT_ORDER = "受注入力TIPS";
export const CST_TIPS_CONTENT_PURCHASEHISTORY = "購入履歴TIPS";
export const CST_TIPS_CONTENT_SENDDOC = "資料送付TIPS";
export const CST_TIPS_CONTENT_INPUTMSG = "伝言入力TIPS";
export const CST_TIPS_CONTENT_DMSENDHISTORY = "DM発送履歴TIPS";

// 社販受注
export const CST_TIPS_CONTENT_EMPLOYEE_ORDER = "社販受注TIPS";
export const CST_TIPS_CONTENT_EMPLOYEE_PURCHASEHISTORY = "社販購入履歴TIPS";

// コールセンター管理
export const CST_TIPS_CONTENT_REGISTOPERATOR = "担当者登録TIPS";
export const CST_TIPS_CONTENT_SETAUTHORITY = "セキュリティ設定TIPS";
export const CST_TIPS_CONTENT_INPUTANNOUNCE = "メッセージ入力TIPS";
export const CST_TIPS_CONTENT_SALESTARGET = "売上目標TIPS";
export const CST_TIPS_CONTENT_SHIPMANAGEMENT = "出荷管理TIPS";

// 社販受注管理
export const CST_TIPS_CONTENT_EMPLOYEE_CUSTOMERMAINTE = "社販顧客メンテTIPS";
export const CST_TIPS_CONTENT_EMPLOYEE_CHANGECUSTOMER = "社販顧客変更TIPS";
export const CST_TIPS_CONTENT_EMPLOYEE_SCHEDULE = "社販スケジュールTIPS";

// オファー管理
export const CST_TIPS_CONTENT_OFFER = "オファー管理TIPS";

// 在庫管理
export const CST_TIPS_CONTENT_STOCKMANAGE = "在庫管理TIPS";

// 受注取込
export const CST_TIPS_CONTENT_IMPORTORDER = "受注取込TIPS";

// EC伝票取込
export const CST_TIPS_CONTENT_IMPORTECORDER = "EC伝票取込TIPS";



