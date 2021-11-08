import { useState, useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import getPlaces from 'services/getPlaces';
import putTravel from 'services/putTravel';

const ScheduleForm = lazy(() => import('components/NewTravel/ScheduleForm'));
const EntryForm = lazy(() => import('components/NewTravel/EntryForm'));
const VisitForm = lazy(() => import('components/NewTravel/VisitForm'));
const PreferencesForm = lazy(() =>
   import('components/NewTravel/PreferencesForm')
);

const toInputDate = (date) => {
   return (
      date.getFullYear() +
      '-' +
      (date.getMonth().toString().length > 1
         ? date.getMonth()
         : '0' + date.getMonth()) +
      '-' +
      (date.getDate().toString().length > 1
         ? date.getDate()
         : '0' + date.getDate()) +
      'T' +
      (date.getHours().toString().length > 1
         ? date.getHours()
         : '0' + date.getHours()) +
      ':' +
      (date.getMinutes().toString().length > 1
         ? date.getMinutes()
         : '0' + date.getMinutes())
   );
};

const toInputTime = (date) => {
   return (
      (date.getHours().toString().length > 1
         ? date.getHours()
         : '0' + date.getHours()) +
      ':' +
      (date.getMinutes().toString().length > 1
         ? date.getMinutes()
         : '0' + date.getMinutes())
   );
};

function Edit() {
   const { id } = useParams();
   const travels = useSelector((state) => state.travels.data);
   const travel = travels.find((travel) => travel['_id'] === id);
   const status = useSelector((state) => state.travels.status);
   const dispatch = useDispatch();
   const history = useHistory();
   const { i18n } = useTranslation('global');
   const lng = i18n.language;
   const [t] = useTranslation('global');

   console.log(travel);

   const [state, setState] = useState({
      step: 0,
      travelID: travel['_id'],
      city: travel['city'],
      startDay: toInputDate(new Date(travel['startDay'])),
      endDay: toInputDate(new Date(travel['endDay'])),
      itineraryStartTime: toInputTime(new Date(travel['itineraryStartTime'])),
      itineraryEndTime: toInputTime(new Date(travel['itineraryEndTime'])),
      customEntryLocations: travel['customEntryLocations'],
      customVisitLocations: travel['customVisitLocations'],
      preferences: travel['preferences'],
      travelUsers: travel['travelUsers'],
      Expenses: travel['Expenses'],
   });

   useEffect(() => {
      switch (status.loading) {
         case 'succeeded':
            toast.success(t('newTravel.success'), {
               autoClose: 2000,
            });
            history.push('/travels');
            break;
         case 'rejected':
            toast.error(t('error.serverError'), {
               autoClose: 2000,
            });
            history.push('/travels');
            break;
         default:
            break;
      }
      // eslint-disable-next-line
   }, [status]);

   useEffect(
      () => () => {
         window.localStorage.removeItem('newCity');
      },
      []
   );

   useEffect(() => {
      if (state.city === '') return;
      dispatch(getPlaces(lng, state.city.toLowerCase()));
      // eslint-disable-next-line
   }, [dispatch, lng, state.city]);

   const nextStep = (input, value) => {
      if (state.step === 3) {
         var travel = {
            _id: state.travelID,
            city: state.city,
            startDay: new Date(state.startDay).toISOString(),
            endDay: new Date(state.endDay).toISOString(),
            itineraryStartTime: new Date(
               '01/01/1970 ' + state.itineraryStartTime
            ).toISOString(),
            itineraryEndTime: new Date(
               '01/01/1970 ' + state.itineraryEndTime
            ).toISOString(),
            customVisitLocations: state.customVisitLocations,
            customEntryLocations: state.customEntryLocations,
            preferences: state.preferences,
            travelUsers: state.travelUsers,
            Expenses: state.Expenses,
         };
         dispatch(putTravel({ travel, lng }));
      }
      setState({
         ...state,
         [input]: value,
         step: state.step + 1,
      });
   };

   const prevStep = () => {
      setState({ ...state, step: state.step - 1 });
   };

   const handleChange = (input, value) => {
      setState({
         ...state,
         [input]: value,
      });
   };

   const handleChangeAdd = (input, value) => {
      if (input === 'customEntryLocations') {
         const all = state[input];
         all[value] = true;
         setState({ ...state, [input]: all });
      } else {
         const all = state[input];
         all.push(value);
         setState({ ...state, [input]: all });
      }
   };

   const handleChangeRemove = (input, value) => {
      if (input === 'customEntryLocations') {
         const all = state[input];
         delete all[value];
         setState({ ...state, [input]: all });
      } else {
         const all = state[input];
         setState({ ...state, [input]: all.filter((a) => a !== value) });
      }
   };

   switch (state.step) {
      case 0:
         return (
            <ScheduleForm
               prevStep={prevStep}
               nextStep={nextStep}
               values={state}
               handleChange={handleChange}
            />
         );
      case 1:
         return (
            <EntryForm
               prevStep={prevStep}
               nextStep={nextStep}
               values={state}
               handleChangeAdd={handleChangeAdd}
               handleChangeRemove={handleChangeRemove}
            />
         );
      case 2:
         return (
            <VisitForm
               prevStep={prevStep}
               nextStep={nextStep}
               values={state}
               handleChangeAdd={handleChangeAdd}
               handleChangeRemove={handleChangeRemove}
            />
         );
      case 3:
         return (
            <PreferencesForm
               prevStep={prevStep}
               nextStep={nextStep}
               values={state}
               handleChangeAdd={handleChangeAdd}
               handleChangeRemove={handleChangeRemove}
            />
         );
      case 4:
         return <Redirect to={`/travels/${id}`} />;
      default:
         return <Redirect to={`/travels/${id}`} />;
   }
}

export default Edit;
