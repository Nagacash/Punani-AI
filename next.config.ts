import type { NextConfig } from "next"
import path from "node:path"

const nextConfig: NextConfig = {
  // The parent project has its own lockfile; pin the build root so Turbopack
  // does not pick the wrong one.
  turbopack: { root: path.resolve(process.cwd()) },
}

export default nextConfig
