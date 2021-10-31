import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import postTravel from 'services/postTravel';
import CityForm from 'components/NewTravel/CityForm';
import ScheduleForm from 'components/NewTravel/ScheduleForm';

function NewTravel() {
   const dispatch = useDispatch();
   const history = useHistory();
   const [t] = useTranslation('global');
   const status = useSelector((state) => state.travels.status);
   const [state, setState] = useState({
      step: window.localStorage.getItem('newCity') ? 1 : 0,
      city: window.localStorage.getItem('newCity') || '',
      startDay: '',
      endDay: '',
      itineraryStartTime: '',
      itineraryEndTime: '',
      customEntryLocations: {},
      customVisitLocations: [],
      preferences: [],
   });

   useEffect(() => {
      switch (status.loading) {
         case 'succeded':
            toast.success(t('travel.success'), {
               autoClose: 2000,
            });
            history.push('/travels');
            break;
         case 'rejected':
            let error =
               status.error === 500
                  ? t('login.errorServer')
                  : t('auth.duplicateKey');
            toast.error(error, {
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

   const nextStep = (input, value) => {
      if (state.step === 4) {
         var travel = {
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
         };
         dispatch(postTravel(travel));
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
         return <CityForm nextStep={nextStep} />;
      case 1:
         return (
            <ScheduleForm
               prevStep={prevStep}
               nextStep={nextStep}
               values={state}
               handleChange={handleChange}
            />
         );
      case 2:
         return (
            // <EntryForm
            //    prevStep={prevStep}
            //    nextStep={nextStep}
            //    values={state}
            //    handleChangeAdd={handleChangeAdd}
            //    handleChangeRemove={handleChangeRemove}
            // />
            <h1>Entry</h1>
         );
      case 3:
         return (
            // <VisitForm
            //    prevStep={prevStep}
            //    nextStep={nextStep}
            //    values={state}
            //    handleChangeAdd={handleChangeAdd}
            //    handleChangeRemove={handleChangeRemove}
            // />
            <h1>Visit</h1>
         );
      case 4:
         return (
            // <PreferencesForm
            //    prevStep={prevStep}
            //    nextStep={nextStep}
            //    values={state}
            //    handleChangeAdd={handleChangeAdd}
            //    handleChangeRemove={handleChangeRemove}
            // />
            <h1>Preferences</h1>
         );
      case 5:
         return <Redirect to="/travels" />;
      default:
         return <Redirect to="/cities" />;
   }
}

export default NewTravel;
