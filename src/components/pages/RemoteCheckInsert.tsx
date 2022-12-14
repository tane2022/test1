import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import GenericTemplate from '../templates/GenericTemplate';

import { Button } from '@material-ui/core';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

type Props = {} & RouteComponentProps<{}>;

const RemoteCheckInsert: React.FC<Props> = (props) => {

  const move = () => {
    props.history.push({
      pathname: '/constInfo',
      state: { sourcePage: 'HomePage' }
    });
  };

  return (
    <GenericTemplate title={'巡視登録'}>

      <RadioGroup defaultValue="male" row>
      巡視方法　　
        <FormControlLabel value="female" control={<Radio />} label="現地" />
        <FormControlLabel value="male" control={<Radio />} label="遠隔" />
      </RadioGroup>
      <p></p>

      遠隔巡視予定
      <MaterialTable
        columns={[
          { title: '巡視予定日', field: 'itemName', headerStyle: { maxWidth: 120},
            cellStyle: { paddingTop: 3, paddingBottom: 3,}},
          { title: '巡視時刻', field: 'category', headerStyle: { minWidth: 150},
            cellStyle: { paddingTop: 3, paddingBottom: 3,}},
        ]}
        data={[
          { itemName: '2022/12/12', category: '13:00' },
        ]}

        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,position: 'sticky', top: 0, paddingTop: 3, paddingBottom: 3,
          backgroundColor: "#1565C0", color: "#FFF" },
          paging: false,
          maxBodyHeight: 300,
          search: false,
          searchFieldVariant: "standard",
          toolbar: false
        }}
      />

<MaterialTable
        columns={[
          { title: '現場側対応者', field: 'itemName', headerStyle: { maxWidth: 120},
          cellStyle: { paddingTop: 3, paddingBottom: 3,}},
          { title: '所属会社', field: 'category', headerStyle: { minWidth: 150},
          cellStyle: { paddingTop: 3, paddingBottom: 3,}},
        ]}
        data={[
          { itemName: '種村　慎太郎', category: '日本電気株式会社' },
        ]}

        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,position: 'sticky', top: 0, paddingTop: 3, paddingBottom: 3,
          backgroundColor: "#1565C0", color: "#FFF" },
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
          登録
        </Button>

    </GenericTemplate>
  );
};

export default withRouter(RemoteCheckInsert);