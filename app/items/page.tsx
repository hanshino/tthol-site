import prisma from "@/lib/prisma";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { zhTW } from "@mui/x-data-grid/locales";

const columns: GridColDef[] = [
  { field: "id", headerName: "編號", width: 90 },
  { field: "name", headerName: "名稱", width: 150 },
  { field: "note", headerName: "備註", width: 150 },
  { field: "type", headerName: "類型", width: 150 },
  { field: "summary", headerName: "簡述", width: 150 },
  { field: "level", headerName: "等級", type: "number", width: 110 },
  { field: "hp", headerName: "HP", type: "number", width: 90 },
  { field: "mp", headerName: "MP", type: "number", width: 90 },
  { field: "str", headerName: "外功", type: "number", width: 90 },
  { field: "pow", headerName: "內力", type: "number", width: 90 },
  { field: "vit", headerName: "根骨", type: "number", width: 90 },
  { field: "dex", headerName: "技巧", type: "number", width: 90 },
  { field: "agi", headerName: "身法", type: "number", width: 90 },
  { field: "wis", headerName: "玄學", type: "number", width: 90 },
  { field: "atk", headerName: "物攻", type: "number", width: 90 },
  { field: "matk", headerName: "內勁", type: "number", width: 90 },
  { field: "def", headerName: "防禦", type: "number", width: 90 },
  { field: "mdef", headerName: "護勁", type: "number", width: 90 },
  { field: "dodge", headerName: "閃躲", type: "number", width: 90 },
  { field: "uncanny_dodge", headerName: "拆招", type: "number", width: 90 },
  { field: "critical", headerName: "重擊", type: "number", width: 90 },
  { field: "hit", headerName: "命中", type: "number", width: 90 },
  { field: "speed", headerName: "移動", type: "number", width: 90 },
  // { field: "fire", headerName: "火抗", type: "number", width: 90 },
  // { field: "water", headerName: "水抗", type: "number", width: 90 },
  // { field: "thunder", headerName: "雷抗", type: "number", width: 90 },
  // { field: "tree", headerName: "木抗", type: "number", width: 90 },
  // { field: "freeze", headerName: "抗定", type: "number", width: 90 },
  { field: "min_damage", headerName: "傷害min", type: "number", width: 110 },
  { field: "max_damage", headerName: "傷害max", type: "number", width: 110 },
  {
    field: "min_pdamage",
    headerName: "內勁傷害min",
    type: "number",
    width: 110,
  },
  {
    field: "max_pdamage",
    headerName: "內勁傷害max",
    type: "number",
    width: 110,
  },
  { field: "weight", headerName: "重量", type: "number", width: 110 },
  { field: "picture", headerName: "圖片", width: 150 },
];

export default async function Item() {
  const items = await prisma.items.findMany();

  ("use client");
  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={items}
        columns={columns}
        initialState={{ density: "compact" }}
        localeText={zhTW.components.MuiDataGrid.defaultProps.localeText}
      />
    </Box>
  );
}
