import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import GenericTemplate from '../templates/GenericTemplate';

import {Button} from '@material-ui/core';

import SampleImage from "../images/weather_1week.png"

type Props = {} & RouteComponentProps<{}>;

const ConstInfo: React.FC<Props> = (props) => {

  const move = () => {
    props.history.push({
      pathname: '/remoteCheckStart',
      state: { sourcePage: 'HomePage' }
    });
  };

  return (
    <GenericTemplate title={'現場情報'}>

      <MaterialTable
        columns={[
          { title: '物件No', field: 'itemName', headerStyle: { maxWidth: 0},
            cellStyle: { paddingTop: 3, paddingBottom: 3, }},
          { title: '物件名', field: 'category', headerStyle: { minWidth: 175},
            cellStyle: { paddingTop: 3, paddingBottom: 3, }},
        ]}
        data={[
          { itemName: '1234567890', category: '本間章朗様邸新築工事'},
        ]}
        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,position: 'sticky', top: 0,
            backgroundColor: "#1565C0", color: "#FFF", paddingTop: 3, paddingBottom: 3, },
          paging: false,
          maxBodyHeight: 300,
          search: false,
          searchFieldVariant: "standard",
          toolbar: false
        }}
      />
      <MaterialTable
        columns={[
          { title: '１列目', field: 'firstColumn', headerStyle: { maxWidth: 0},
            cellStyle: { paddingTop: 3, paddingBottom: 3, backgroundColor: "#1565C0", color: "#FFF", }},
          { title: '２列目', field: 'secondColumn', headerStyle: { maxWidth: 0},
            cellStyle: { paddingTop: 3, paddingBottom: 3, }},
        ]}
        data={[
          { firstColumn:'着工日', secondColumn: '2022/8/1' },
          { firstColumn:'竣工日', secondColumn: '2022/12/24' },
          { firstColumn:'建築確認検査日', secondColumn: '2022/10/14' },
          { firstColumn:'施主検査日', secondColumn: '2022/12/1'},
          { firstColumn:'本日の巡視予定', secondColumn: '"遠隔"'},
        ]}
        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,position: 'sticky', top: 0,
            backgroundColor: "#1565C0", color: "#FFF", paddingTop: 3, paddingBottom: 3, },
          paging: false,
          maxBodyHeight: 300,
          search: false,
          searchFieldVariant: "standard",
          toolbar: false,
          header: false
        }}
      />
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      onClick={move}
    >
    遠隔巡視開始
    </Button>

    <p></p>
    現地の週間天気
    <br></br>
    <img src={SampleImage} alt="sample" />    
    <br></br>
    ⇒ <a href="https://weather.nifty.com/cs/catalog/weather_pinpoint/catalog_13103_1.htm">東京都港区の天気</a>

    <p></p>
    本日の入退状況
    <MaterialTable
        columns={[
          { title: '氏名', field: 'name', headerStyle: { maxWidth: 75 },
            cellStyle: { paddingTop: 3, paddingBottom: 3, maxWidth: 75 }},
          { title: '入場時刻', field: 'inDatetime', headerStyle: { maxWidth: 100 },
            cellStyle: { paddingTop: 3, paddingBottom: 3,maxWidth: 0 }},
          { title: '退場時刻', field: 'outDatetime', headerStyle: { maxWidth: 100 },
            cellStyle: { paddingTop: 3, paddingBottom: 3, maxWidth: 0 }},
        ]}
        data={[
          { name: '日本　太郎', inDatetime: '2022/8/1 05:45', outDatetime: '2022/8/1 13:18'},
          { name: '本間　太郎', inDatetime: '2022/8/1 07:10', outDatetime: ''},
          { name: '種村　次郎', inDatetime: '2022/8/1 06:22', outDatetime: ''},
          { name: '内装　一郎', inDatetime: '2022/8/1 07:45', outDatetime: '2022/8/1 16:11'},
          { name: '内装　三郎', inDatetime: '2022/8/1 06:53', outDatetime: '2022/8/1 16:32'},
          { name: '外構　久兵衛', inDatetime: '2022/8/1 08:00', outDatetime: '2022/8/1 17:55'},
        ]}
        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,
            backgroundColor: "#1565C0", color: "#FFF", paddingTop: 3, paddingBottom: 3, },
          paging: false,
          maxBodyHeight: 300,
          search: false,
          searchFieldVariant: "standard",
          toolbar: false
        }}
      />
    </GenericTemplate>
  );
};

export default withRouter(ConstInfo);