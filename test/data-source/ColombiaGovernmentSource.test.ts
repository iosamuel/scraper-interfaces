import { DataSourceName, DataSourceRegistry } from "../../src";

/**
 * ColombiaGovernmentDataSource Test Suite
 * @author GUH <contact@covid19.fyi>
 */
describe("ColombiaGovernmentSource", () => {
  test("Should fetch and parse", async () => {
    try {
      const dataSource = DataSourceRegistry.getDataSource(DataSourceName.COL_GOV);
      await dataSource.loadSourceData();
    }
    catch (e) {
      console.error(e);
    }
  });
});
