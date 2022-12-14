import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import GenericTemplate from '../templates/GenericTemplate';

import {Button} from '@material-ui/core';

import SampleImage from "../images/cont_in_check.png"

type Props = {} & RouteComponentProps<{}>;

const CheckReport: React.FC<Props> = (props) => {

  const move = () => {
    props.history.push({
      pathname: '/checkReportList',
      state: { sourcePage: 'HomePage' }
    });
  };

  return (
    <GenericTemplate title={'巡視実施記録'}>
      <MaterialTable
        columns={[
          { title: '元請企業', field: 'firstColumn', cellStyle: { minWidth: 0, paddingTop: 3, paddingBottom: 3, }},
          { title: '小林組', field: 'SecondColumn', cellStyle: { minWidth: 180, paddingTop: 3, paddingBottom: 3, }}
        ]}
        data={[
          { firstColumn: '元請巡視者', SecondColumn: '本間　章兵衛'},
          { firstColumn: '下請企業', SecondColumn: '日本電気株式会社'},
          { firstColumn: '下請担当者', SecondColumn: '種村　慎太郎'},
          { firstColumn: '住所', SecondColumn: '東京都港区芝五丁目'},
          { firstColumn: '巡視方法', SecondColumn: '"遠隔"'},
          { firstColumn: '巡視日時', SecondColumn: '2022/12/19 13:13~14:32'},
          { firstColumn: '指摘事項１', SecondColumn: '梁の建付けに不備有。要確認'},
          { firstColumn: '指摘事項２', SecondColumn: '規定個所に支柱に不足有。要確認'},
          { firstColumn: '指摘事項３', SecondColumn: '・・・'},
        ]}

        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,position: 'sticky', paddingTop: 3, paddingBottom: 3,},
          paging: false,
          search: false,
          toolbar: false,
          header: true
        }}
      />
    <p></p>
    添付画像
    <br></br>
    <img src={SampleImage} alt="sample" />    

    <p></p>
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      onClick={move}
    >
    巡視実施記録一覧
    </Button>

    </GenericTemplate>
  );
};

export default withRouter(CheckReport);