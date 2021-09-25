import { version } from '../../package.json';
import { Router } from 'express';
import blocks from './blocks';

export default () => {
	let api = Router();

	// mount the blocks resource
	api.use('/blocks', blocks());

	// perhaps expose some API metadata at the root
	api.get('/', (_, res) => {
		res.json({ version });
	});

	return api;
}
