import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import GenericTemplate from '../templates/GenericTemplate';

type Props = {} & RouteComponentProps<{}>;

const ExitStaff: React.FC<Props> = (props) => {

  return (
    <GenericTemplate title={'退場者一覧'}>
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
          { title: '退場時刻', field: 'inDatetime',
          cellStyle: { paddingTop: 3, paddingBottom: 3, }},
          { title: '氏名', field: 'name',
          cellStyle: { paddingTop: 3, paddingBottom: 3,minWidth: 110}},
          { title: '所属企業', field: 'kigyo',
          cellStyle: { paddingTop: 3, paddingBottom: 3, }},
          { title: '立場', field: 'tachiba' , headerStyle: { minWidth: 90},
          cellStyle: { paddingTop: 3, paddingBottom: 3, }},
          { title: '開始報告', field: 'kaishi',
          cellStyle: { paddingTop: 3, paddingBottom: 3, }},
        ]}
        data={[
          { inDatetime: '2022/8/1 17:48', kigyo: '日本電気株式会社', name: '種村　次郎', tachiba: '作業員', kaishi: '有'},
          { inDatetime: '2022/8/1 17:55', kigyo: '日本電気株式会社', name: '本間　次郎', tachiba: '作業員', kaishi: '有'},
          { inDatetime: '2022/8/1 18:01', kigyo: '内装工務店', name: '内装　三郎', tachiba: '作業員', kaishi: '有'},
        ]}
        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,position: 'sticky', top: 0,paddingTop: 3, paddingBottom: 3,
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

export default withRouter(ExitStaff);