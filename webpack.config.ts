import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }
  
  const mode: BuildMode = env.mode || 'development';
  const PORT = env.port || 3000;
  
  const isDev: boolean = mode === 'development';
  
  const config: webpack.Configuration = buildWebpackConfig({
    mode, paths, isDev, port: PORT
  })

  return config;
};