import { DataSourceName, DataSourceRegistry } from "../../src";

/**
 * ColombiaGovernmentDataSource Test Suite
 * @author GUH <contact@covid19.fyi>
 */
describe("ColombiaGovernmentSource", () => {
  test("Should fetch and parse", async () => {
    try {
      const dataSource = DataSourceRegistry.getDataSource(DataSourceName.COL_GOV);
      const json = await dataSource.getPageContent();
      await dataSource.parsePageContent(json);
    }
    catch (e) {
      console.error(e);
    }
  });
});
