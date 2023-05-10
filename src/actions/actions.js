const API = "https://resatunisie.tn/resatunisie-api";
import axios from "axios";
export const createContact = async (contact) => {
  const res = await axios.post(API + "/contact/create", contact);
  return res;
};
export const createBus = async (bus) => {
  const res = await axios.post(API + "/bus/create", bus);
  return res;
};
export const createBateau = async (bateau) => {
  const res = await axios.post(API + "/bateau/create", bateau);
  return res;
};
export const createVol = async (vol) => {
  const res = await axios.post(API + "/vol/create", vol);
  return res;
};
export const createVisa = async (visa) => {
  const res = await axios.post(API + "/visa/create", visa);
  return res;
};
export const createOmra = async (omra) => {
  const res = await axios.post(API + "/reservationOmra/create", omra);
  return res;
};
export const createTravel = async (omra) => {
  const res = await axios.post(API + "/reservationTravel/create", omra);
  return res;
};
export const getOmra = async () => {
  const res = await axios.post(API + "/omra/getAll");
  return res;
};
export const getOneOmra = async (id) => {
  const res = await axios.post(API + "/omra/getbyId", { id });
  return res;
};
export const getTravel = async () => {
  const res = await axios.post(API + "/travel/getAll");
  return res;
};
export const getOneTravel = async (id) => {
  const res = await axios.post(API + "/travel/getbyId", { id });
  return res;
};
export const getSlider = async () => {
  const res = await axios.post(API + "/slider/getAll");
  return res;
};
