import resource from "resource-router-middleware";
import { fetch, transformBlock } from "../lib/util";

export default () =>
  resource({
    /** Property name to store preloaded entity on `request`. */
    id: "hash",

    /** GET / - List all entities */
    index({ query }, res) {
      let date = query.date || new Date().valueOf();
      fetch(`https://blockchain.info/blocks/${date}?format=json`, (data) => {
        res.json(data);
      });
    },

    /** GET /:id - Return a given entity */
    read({ params: { hash } }, res) {
      fetch(`https://blockchain.info/rawblock/${hash}`, (data) => {
        res.json(transformBlock(data));
      });
    },
  });
