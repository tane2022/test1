import React from "react";
import GenericTemplateTop from "../templates/GenericTemplateTop";

import { RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import Icon from '@material-ui/core/Icon';
import { orange } from "@material-ui/core/colors";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeWork from "@material-ui/icons/HomeWork";

type Props = {} & RouteComponentProps<{}>;

const HomePage: React.FC<Props> = (props) => {

  return (
    <GenericTemplateTop title={'現場一覧'}>
    <Card color = 'inherit'>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" href={"/constInfo"}>
          <HomeWork />
        </IconButton>
        <Typography variant="body2">
          物件No：1234567890<br/>
          物件名：本間章朗様邸　新築工事<br />
          入場/退場者数：100/32<br/>
          進捗遅延報告：無<br />
          巡視方法(予定)：遠隔<br/>
          巡視日時(予定)：2022/12/12 13:00
        </Typography>
      </CardActions>
    </Card>
    <br/>
    <Card>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" href={"/constInfo"}>
        <HomeWork />
        </IconButton>
        <Typography variant="body2">
          物件No：2385739799<br/>
          物件名：山本賢司様邸　新築工事<br />
          入場/退場者数：400/380<br/>
          進捗遅延報告：無<br />
          巡視方法(予定)：未設定<br/>
          巡視日時(予定)：
        </Typography>
      </CardActions>
    </Card>
    <br/>
    <Card>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" href={"/constInfo"}>
        <HomeWork />
        </IconButton>
        <Typography variant="body2">
          物件No：9237597978<br/>
          物件名：笹田幸恵様邸　新築工事<br />
          入場/退場者数：500/346<br/>
          進捗遅延報告：有<br />
          巡視方法(予定)：現地<br/>
          巡視日時(予定)：2022/12/13 8:00
        </Typography>
      </CardActions>
    </Card>
    <br/>
    <Card>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" href={"/constInfo"}>
        <HomeWork />
        </IconButton>
        <Typography variant="body2">
          物件No：2134897851<br/>
          物件名：日野哲様邸　新築工事<br />
          入場/退場者数：200/200<br/>
          進捗遅延報告：無<br />
          巡視方法(予定)：未設定<br/>
          巡視日時(予定)：
        </Typography>
      </CardActions>
    </Card>
    <br/>
    <Card>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" href={"/constInfo"}>
        <HomeWork />
        </IconButton>
        <Typography variant="body2">
          物件No：3339845612<br/>
          物件名：渡邊亮磨様邸　新築工事<br />
          入場/退場者数：250/89<br/>
          進捗遅延報告：有<br />
          巡視方法(予定)：現地<br/>
          巡視日時(予定)：2022/12/14 9:30
        </Typography>
      </CardActions>
    </Card>
    <br/>
    <Card >
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" href={"/constInfo"}>
        <HomeWork />
        </IconButton>
        <Typography variant="body2">
          物件No：2395794596<br/>
          物件名：澤出浩一様邸　新築工事<br />
          入場/退場者数：250/100<br/>
          進捗遅延報告：無<br />
          巡視方法(予定)：未設定<br/>
          巡視日時(予定)：
        </Typography>
      </CardActions>
    </Card>
    <br/>

      <MaterialTable
        columns={[
          { title: '物件No', field: 'itemName', headerStyle: { minWidth: 0}, defaultSort: 'asc', cellStyle: { paddingTop: 3, paddingBottom: 3, }},
          { title: '物件名', field: 'category', headerStyle: { minWidth: 120}, cellStyle: { paddingTop: 3, paddingBottom: 3, }},
          { title: '入場/退場者数', field: 'weight', headerStyle: { maxWidth: 110, }, cellStyle: { paddingTop: 3, paddingBottom: 3, }},
          { title: '進捗遅延報告', field: 'price', headerStyle: { maxWidth: 110}, cellStyle: { paddingTop: 3, paddingBottom: 3, }},
          { title: '巡視方法(予定)', field: 'checkMethod', headerStyle: { maxWidth: 120}, cellStyle: { paddingTop: 3, paddingBottom: 3, }},
          { title: '巡視時刻(予定)', field: 'checkDate', headerStyle: { maxWidth: 120}, cellStyle: { paddingTop: 3, paddingBottom: 3, }},
        ]}
        data={[
          { itemName: '1234567890', category: '本間章朗様邸　新築工事', weight: '100/32', price: '無', checkMethod: '遠隔', checkDate: '2022/12/12 13:00' },
          { itemName: '2385739799', category: '山本賢司様邸　新築工事', weight: '400/380', price: '無', checkMethod: '未設定', checkDate: '' },
          { itemName: '9237597978', category: '笹田幸恵様邸　新築工事', weight: '500/346', price: '有', checkMethod: '現地', checkDate: '2022/12/13 8:00' },
          { itemName: '2134897851', category: '日野哲様邸　新築工事', weight: '200/200', price: '無', checkMethod: '未設定', checkDate: '' },
          { itemName: '3339845612', category: '渡邊亮磨様邸　新築工事', weight: '250/89', price: '有', checkMethod: '現地', checkDate: '2022/12/14 9:30' },
          { itemName: '2395794596', category: '澤出浩一様邸　新築工事', weight: '250/100', price: '無', checkMethod: '未設定', checkDate: '' },
        ]}

        options={{
          showTitle: false,
          headerStyle: { whiteSpace: 'nowrap' ,position: 'sticky', 
          backgroundColor: "#1565C0", color: "#FFF", paddingTop: 5, paddingBottom: 5,},
          paging: true,
          maxBodyHeight: 600,
          // header: false
          // fixedColumns: { left: 1}
        }}

        localization={{
          header: { actions: '' },
        }}
        actions={[
          {
            icon: () => <Icon style={{ color: orange[500] }}> home_work</Icon>,
            tooltip: '現場情報',
            onClick: (_, rowData) => {
            props.history.push({
                pathname: '/constInfo',
                state: { sourcePage: 'HomePage' }
              });
          }}
        ]}

      />
    </GenericTemplateTop>
  );
};

export default HomePage;