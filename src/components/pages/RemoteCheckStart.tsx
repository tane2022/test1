import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import GenericTemplate from '../templates/GenericTemplate';

import { Button } from '@material-ui/core';

type Props = {} & RouteComponentProps<{}>;

const RemoteCheckStart: React.FC<Props> = (props) => {

  const move = () => {
    props.history.push({
      pathname: '/remoteCheckVideo',
      state: { sourcePage: 'HomePage' }
    });
  };

  return (
    <GenericTemplate title={'遠隔巡視予定'}>
      <MaterialTable
        columns={[
          { title: '巡視方法', field: 'check', cellStyle: { paddingTop: 3, paddingBottom: 3, }},
          { title: '巡視予定日時', field: 'itemName', cellStyle: { paddingTop: 3, paddingBottom: 3, }},
        ]}
        data={[
          { check: '遠隔', itemName: '2022/12/19 13:00' },
        ]}

        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,position: 'sticky', top: 0,
          backgroundColor: "#1565C0", color: "#FFF", paddingTop: 3, paddingBottom: 3,},
          paging: false,
          maxBodyHeight: 300,
          search: false,
          searchFieldVariant: "standard",
          toolbar: false
/*          searchFieldAlignment: 'left',
*/
        }}
      />

    <MaterialTable
        columns={[
          { title: '現場側対応者', field: 'itemName', headerStyle: { maxWidth: 0}, cellStyle: { paddingTop: 3, paddingBottom: 3, }},
          { title: '所属会社', field: 'category', headerStyle: { minWidth: 150}, cellStyle: { paddingTop: 3, paddingBottom: 3, }},
        ]}
        data={[
          { itemName: '種村　慎太郎', category: '日本電気株式会社' },
        ]}

        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,position: 'sticky', top: 0,
          backgroundColor: "#1565C0", color: "#FFF", paddingTop: 3, paddingBottom: 3,},
          paging: false,
          maxBodyHeight: 300,
          search: false,
          searchFieldVariant: "standard",
          toolbar: false
/*          searchFieldAlignment: 'left',
*/
        }}
      />

        <p></p>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={move}
        >
          遠隔巡視開始
        </Button>

    </GenericTemplate>
  );
};

export default withRouter(RemoteCheckStart);