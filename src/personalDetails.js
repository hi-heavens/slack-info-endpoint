exports.getPersonalDetails = (req, res) => {
  const { slack_name, track } = req.query;
  try {
    const current_day = new Date().toLocaleString("en-US", { weekday: "long" });
    const utc_time = new Date().toISOString();
    const github_file_url =
      "https://github.com/hi-heavens/slack-info-endpoint/blob/main/server.js";
    const github_repo_url = "https://github.com/hi-heavens/slack-info-endpoint";
    const status_code = 200;

    returnedResponse = {
      slack_name,
      current_day,
      utc_time,
      track,
      github_file_url,
      github_repo_url,
      status_code,
    };

    res.status(200).json(returnedResponse);
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};
