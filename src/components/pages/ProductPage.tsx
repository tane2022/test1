import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import GenericTemplate from '../templates/GenericTemplate';

type Props = {} & RouteComponentProps<{}>;

const ProductPage: React.FC<Props> = (props) => {

  return (
    <GenericTemplate title={'工事中'}>

    </GenericTemplate>
  );
};

export default withRouter(ProductPage);