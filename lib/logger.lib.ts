import chalk from "chalk";
import consola from "consola";
class Logger {
  protected mainColor: string = "#9677d4";
  protected successColor: string = "#41f45e";
  protected errorColor: string = "#ba1e1e";

  /**
   * general logging functions
   * all these functions have the same structure
   * @param strs strings to log (joined with one space)
   */
  public write = (item: any) => console.log(item);
  public log = (str: string) => consola.info(chalk.hex(this.mainColor).bold(str));
  public error = (str: string) => consola.error(chalk.hex(this.errorColor).bold(str));
  public success = (str: string) => consola.success(chalk.hex(this.successColor).bold(str));

  /**
   * clears the console
   */
  public clear = () => console.clear();
  console: any;
}
export const logger = new Logger();
export default {
  logger,
};
