import { Route, Switch, withRouter } from 'react-router-dom';
import { Chat } from '../components/Chat/Chat';
import { Listing } from '../components/Listing/Listing';
import { Rating } from '../components/Rating/Rating';

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Rating} />
      <Route path="/listing" component={Listing} />
      <Route path="/chat" component={Chat} />
    </Switch>
  );
};

export default withRouter(AppRouter);
