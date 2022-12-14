import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from 'material-table';
import GenericTemplateRemoteCheck from '../templates/GenericTemplateRemoteCheck';

import { Button } from '@material-ui/core';

import SampleImage from "../images/cont_in.png"


type Props = {} & RouteComponentProps<{}>;

const RemoteCheckVideo: React.FC<Props> = (props) => {

  const move = () => {
    props.history.push({
      pathname: '/checkReport',
      state: { sourcePage: 'HomePage' }
    });
  };

  return (
    <GenericTemplateRemoteCheck title={''}>
    <br></br>
    <img src={SampleImage} alt="sample" />    
    <br></br>
        <p></p>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={move}
        >
          巡視終了
        </Button>

    </GenericTemplateRemoteCheck>
  );
};

export default withRouter(RemoteCheckVideo);