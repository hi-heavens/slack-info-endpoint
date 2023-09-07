exports.getPersonalDetails = (req, res) => {
  const { slack_name, track } = req.query;
  try {
    returnResponse = {
      slack_name,
      current_day: "Monday",
      utc_time: "2023-08-21T15:04:05Z",
      track,
      github_file_url:
        "https://github.com/username/repo/blob/main/file_name.ext",
      github_repo_url: "https://github.com/username/repo",
      status_code: 200,
    };

    res.status(200).json({ status: true, returnResponse });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};
