import { readFileSync } from 'fs';

const GET_BEST_PROFESSION_SQL = `${readFileSync(new URL('./get_bets_profession.sql', import.meta.url))}`;
const GET_BEST_CLIENT_SQL = `${readFileSync(new URL('./get_bets_clients.sql', import.meta.url))}`;

export { GET_BEST_PROFESSION_SQL, GET_BEST_CLIENT_SQL };