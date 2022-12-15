import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import GenericTemplate from '../templates/GenericTemplate';

import {Button} from '@material-ui/core';

type Props = {} & RouteComponentProps<{}>;

const InfoDeliver: React.FC<Props> = (props) => {

  const move = () => {
    props.history.push({
      pathname: '/ConstInfo',
      state: { sourcePage: 'HomePage' }
    });
  };

  return (
    <GenericTemplate title={'伝達登録'}>
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
          { title: '１列目', field: 'firstColumn', 
            cellStyle: { paddingTop: 3, paddingBottom: 3, backgroundColor: "#1565C0", color: "#FFF", }},
          { title: '２列目', field: 'secondColumn',
            cellStyle: { paddingTop: 3, paddingBottom: 3, minWidth: 190}},
        ]}
        data={[
          { firstColumn:'発信先', secondColumn: '入場者全員' },
          { firstColumn:'伝達事項', secondColumn: '今日は、雨予報なので戸締りを確実にお願いします。合わせて資材の雨養生も確実にお願いします。' },
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

        <p></p>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={move} 
        >
          登録
        </Button>
    </GenericTemplate>
  );
};

export default withRouter(InfoDeliver);