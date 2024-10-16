import React from "react";
import { Typography, Grid, Card, CardContent, Box } from "@mui/material";
import { motion } from "framer-motion";

const cardVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.6)",
    transition: {
      duration: 0.3,
    },
  },
};


const projects = [
  {
    title: "PySpark Data Analysis: Transforming Insights into Action",
    description:
      "Led an innovative data analysis project on Databricks, optimizing CSV data processing with PySpark. Achieved a 15% reduction in data processing time through advanced transformations and a dynamic PySpark dashboard, enabling real-time monitoring and a 20% improvement in data visualization efficiency.",
    techStack: "Tech Stack: PySpark, Databricks, CSV, Data Visualization",
  },
  {
    title:
      "Pipeline Development and Analytics Implementation on Olympic Data using AZURE",
    description:
      "Spearheaded a transformative Azure data engineering project, reducing redundancy by 30% and boosting project cohesion by 25% through seamless dataset integration and advanced SQL queries. Created visually engaging Power BI dashboards for Tokyo Olympic data.",
    techStack:
      "Tech Stack: Azure Data Factory, Synapse Analytics, Databricks, SQL, Power BI",
    link: "https://github.com/victorpaul579/olympic-Azure-project",
  },
  {
    title: "AWS ETL Movies Project",
    description:
      "Executed ETL operations on movie data, setting up an EC2 instance and leveraging S3 for data storage. Processed and analyzed data efficiently, showcasing the power of AWS in managing and analyzing large datasets.",
    techStack: "Tech Stack: AWS EC2, S3, ETL, Movielens, CPI Data",
    link: "https://github.com/victorpaul579/aws_ETL_movies",
  },
  {
    title: "Uber Data Engineering Project",
    description:
      "Implemented a comprehensive data engineering solution for Uber trip data using Apache Spark and AWS. Extracted, transformed, and loaded trip data to uncover valuable insights and patterns.",
    techStack: "Tech Stack: Apache Spark, AWS, ETL, Data Analysis",
    link: "https://github.com/victorpaul579/uber_data_engineering_project",
  },
  {
    title: "Student Performance ML with AWS CI/CD",
    description:
      "Developed a machine learning pipeline to predict student performance using AWS services and CI/CD practices. Included data collection, preprocessing, model training, and deployment, leveraging AWS SageMaker, CodePipeline, and CodeDeploy.",
    techStack:
      "Tech Stack: AWS SageMaker, CodePipeline, CodeDeploy, Machine Learning",
    link: "https://github.com/victorpaul579/student_performance_ML_AWS_CI-CD",
  },
  {
    title: "Loan Prediction Analysis",
    description:
      "Built a machine learning model to predict loan approval status, enhancing the accuracy of predictions through meticulous data preprocessing, feature engineering, and model evaluation.",
    techStack:
      "Tech Stack: Python, Scikit-learn, Machine Learning, Data Preprocessing",
    link: "https://github.com/victorpaul579/loan-prediction-analysis",
  },
];

function Projects() {
  return (
    <Box
      sx={{ backgroundColor: "#121212", padding: "20px", borderRadius: "8px" }}
    >
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ color: "#fff", textAlign: "center" }}
      >
        Projects
      </Typography>
      <Grid container direction="column" spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index}>
            <motion.div whileHover="hover" variants={cardVariants}>
              <Card
                sx={{
                  backgroundColor: "#1e1e1e",
                  border: "1px solid #333",
                  borderRadius: "10px",
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "#bb86fc" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "#ccc" }}
                  >
                    {project.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#ff8c00", marginTop: "10px" }}
                  >
                    {project.techStack}
                  </Typography>
                  {project.link && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ color: "#bb86fc" }}
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
