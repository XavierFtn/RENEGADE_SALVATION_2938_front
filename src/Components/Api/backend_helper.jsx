import { APIClient } from "./api_helper";

import * as url from "./url_helper";

const api = new APIClient();


// Ships
export const getShips = () => api.get(url.SHIPS);
export const updateShipQuantity = (type) => api.put(url.SHIPS.concat(`/${type}/add`));

//Structures
export const getStructures = () => api.get(url.STRUCTURES);
export const createStructures = (type) => api.create(url.STRUCTURES.concat(`/${type}`));
export const deleteStructures = (id) => api.delete(url.STRUCTURES.concat(`/${id}`));

//Ressources
export const getRessources = () => api.get(url.RESSOURCES);
export const updateRessources = (type,operation,qty) => api.put(url.RESSOURCES.concat(`/${type}/${operation}/${qty}`));

//Warehouses
export const getWarehouses = () => api.get(url.WAREHOUSES);
export const updateWarehouses = () => api.put(url.WAREHOUSES);
export const deleteWarehouses = () => api.delete(url.WAREHOUSES);

//Shipyards
export const getShipyards = () => api.get(url.SHIPYARDS);
export const getShipyardsAvailable = () => api.get(url.SHIPYARDS.concat("/available"));

//Rounds
export const getRounds = () => api.get(url.ROUNDS);

//Battles
export const createBattle = (id) => api.create(url.BATTLES.concat(`/${id}`));
export const getBattles = () => api.get(url.BATTLES);

//Attack
export const createAttack =(attackdata) => api.attack(url.ATTACKS, attackdata);

//planetarySytem
export const getPlanetary1 = () => api.get(url.PLANETARIES);
export const getPlanetary2 = () => api.get(url.SYSTEM);
export const updatePlanetary = (data) => api.put(url.UPDATE_SYSTEMS, data);