import { renderToString } from "react-dom/server";
import type { NextApiRequest, NextApiResponse } from "next";

function getIconSvgStr(
  type: string,
  name: string,
  config: Record<string, unknown>
): string {
  const { [name]: Icon } = require(`react-icons/${type}/index.js`);
  return renderToString(Icon({ ...config }));
}

function handleResp(
  res: NextApiResponse<string>,
  content: any,
  status: number = 200
) {
  res.setHeader("Content-Type", "image/svg+xml");
  res.status(status).send(content);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const { iconConfig, ...rest } = req.query;
  const [iconType, iconName] = iconConfig as string[];
  try {
    const svgStr = getIconSvgStr(iconType, iconName, rest);
    handleResp(res, svgStr);
  } catch (err) {
    const notFoundIconSvgStr = getIconSvgStr("tb", "TbError404", rest);
    handleResp(res, notFoundIconSvgStr, 404);
  }
}
