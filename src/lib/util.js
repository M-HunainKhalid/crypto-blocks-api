import https from "https";

export const fetch = (url, resolve) => {
  let data = "";
  https
    .get(url, (resp) => {
      resp.on("data", (d) => {
        data += d;
      });
      resp.on("end", () => {
        data = JSON.parse(data);
        resolve(data);
      });
    })
    .on("error", (e) => {
      console.error(e);
    });
};

export const transformBlock = ({
  block_index: blockIndex,
  prev_block: prevBlock,
  fee,
  size,
  tx: transactions,
}) => ({ blockIndex, prevBlock, fee, size, transactions });
