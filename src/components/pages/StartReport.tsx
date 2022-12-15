import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import GenericTemplate from '../templates/GenericTemplate';

type Props = {} & RouteComponentProps<{}>;

const StartReport: React.FC<Props> = (props) => {
  return (
    <GenericTemplate title={'作業開始報告'}>
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
      <br></br>
      <MaterialTable
        columns={[
          { title: '１列目', field: 'firstColumn', headerStyle: { maxWidth: 0},
            cellStyle: { paddingTop: 3, paddingBottom: 3, backgroundColor: "#1565C0", color: "#FFF", }},
          { title: '２列目', field: 'secondColumn', headerStyle: { maxWidth: 0},
            cellStyle: { paddingTop: 3, paddingBottom: 3, minWidth: 160}},
        ]}
        data={[
          { firstColumn:'企業名', secondColumn: '日本電気株式会社' },
          { firstColumn:'氏名', secondColumn: '日電　太郎' },
          { firstColumn:'報告時刻', secondColumn: '2022/12/15 8:00' },
          { firstColumn:'作業内容', secondColumn: '内装工事'},
          { firstColumn:'作業場所', secondColumn: '東京都港区芝五丁目'},
          { firstColumn:'危険ポイント', secondColumn: '・・・' },
          { firstColumn:'危険対策', secondColumn: '・・・' },
          { firstColumn:'始業前点検', secondColumn: '・・・' },
          { firstColumn:'伝達事項確認', secondColumn: '・・・' },
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
      <br></br>
      <MaterialTable
        columns={[
          { title: '１列目', field: 'firstColumn', headerStyle: { maxWidth: 0},
            cellStyle: { paddingTop: 3, paddingBottom: 3, backgroundColor: "#1565C0", color: "#FFF", }},
          { title: '２列目', field: 'secondColumn', headerStyle: { maxWidth: 0},
            cellStyle: { paddingTop: 3, paddingBottom: 3, minWidth: 160}},
        ]}
        data={[
          { firstColumn:'企業名', secondColumn: '日本電気株式会社' },
          { firstColumn:'氏名', secondColumn: '日電　次郎' },
          { firstColumn:'報告時刻', secondColumn: '2022/12/15 8:15' },
          { firstColumn:'作業内容', secondColumn: '内装工事'},
          { firstColumn:'作業場所', secondColumn: '東京都港区芝五丁目'},
          { firstColumn:'危険ポイント', secondColumn: '・・・' },
          { firstColumn:'危険対策', secondColumn: '・・・' },
          { firstColumn:'始業前点検', secondColumn: '・・・' },
          { firstColumn:'伝達事項確認', secondColumn: '・・・' },
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
    </GenericTemplate>
  );
};

export default withRouter(StartReport);