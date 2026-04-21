export class DataService {
  async getHeavyData() {
    // simulate slow DB / API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      message: "Heavy data loaded",
      timestamp: new Date().toISOString(),
    };
  }
}
