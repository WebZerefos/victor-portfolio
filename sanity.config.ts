import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"

import schemas from "./sanity/schemas"

const config = defineConfig({
	projectId: "kzw3qm4y",
	dataset: "production",
	title: "My 2023 Portfolio",
	apiVersion: "2023-03-04",
	basePath: "/admin",
	plugins: [structureTool(), visionTool()],
	schema: { types: schemas },
})

export default config
