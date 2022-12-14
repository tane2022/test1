import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import GenericTemplate from '../templates/GenericTemplate';

type Props = {} & RouteComponentProps<{}>;

const CheckReportList: React.FC<Props> = (props) => {

  return (
    <GenericTemplate title={'巡視実施記録一覧'}>
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
    <p></p>
    <MaterialTable
        columns={[
          { title: '巡視日時', field: 'inDatetime', headerStyle: { maxWidth: 30},
            cellStyle: { paddingTop: 3, paddingBottom: 3, }},
          { title: '巡視方法', field: 'name', headerStyle: { maxWidth: 80},
            cellStyle: { paddingTop: 3, paddingBottom: 3, }},
          { title: '巡視者', field: 'kigyo', headerStyle: { maxWidth: 80},
            cellStyle: { paddingTop: 3, paddingBottom: 3, }},
          { title: '現場担当者', field: 'tachiba' , headerStyle: { maxWidth: 100},
            cellStyle: { paddingTop: 3, paddingBottom: 3, }},
          { title: '指摘有無', field: 'kaishi', headerStyle: { maxWidth: 80},
            cellStyle: { paddingTop: 3, paddingBottom: 3, }},
        ]}
        data={[
          { inDatetime: '2022/8/1 13:45', name: '"遠隔"', kigyo: '元請　太郎', tachiba: '下請　一郎', kaishi: '有'},
          { inDatetime: '2022/8/2 14:30', name: '"遠隔"', kigyo: '本間　章兵衛', tachiba: '下請　次郎', kaishi: '有'},
          { inDatetime: '2022/8/3 15:48', name: '"現地"', kigyo: '種村　慎太郎', tachiba: '協力　一平', kaishi: '有'},
          { inDatetime: '2022/8/4 14:30', name: '"現地"', kigyo: '本間　次郎', tachiba: '協力　三平', kaishi: '有'},
          { inDatetime: '2022/8/5 15:45', name: '"遠隔"', kigyo: '内装　一郎', tachiba: '日本　太郎', kaishi: '有'},
          { inDatetime: '2022/8/6 13:45', name: '"遠隔"', kigyo: '内装　三郎', tachiba: '日本　花子', kaishi: '有'},
          { inDatetime: '2022/8/7 13:45', name: '"遠隔"', kigyo: '外構　久兵衛', tachiba: '安全　大一', kaishi: '無'},
        ]}
        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,position: 'sticky', top: 0, paddingTop: 3, paddingBottom: 3,
          backgroundColor: "#1565C0", color: "#FFF" },
          paging: true,
          maxBodyHeight: 300,
          search: true,
          searchFieldVariant: "standard",
          toolbar: true
        }}
      />

    </GenericTemplate>
  );
};

export default withRouter(CheckReportList);