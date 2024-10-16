import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
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

const experiences = [
  {
    title: "Data Engineer",
    company: "ProPetro",
    description: [
      "Engineered and automated a robust data quality monitoring framework using Azure Synapse Analytics, processing 8TB of oil and gas data.",
      "Integrated Apache Spark with a metadata database, boosting data processing transparency and efficiency by 25%.",
      "Designed and deployed interactive Power BI dashboards, enhancing monitoring efficiency by 40%.",
      "Collaborated with cross-functional teams to streamline data workflows, reducing data latency by 30%.",
    ],
    date: "June 2024 - August 2024",
  },
  {
    title: "Data Engineer",
    company: "CISCO",
    description: [
      "Contributed to customer retention and usability research within a $10 billion-funded research lab.",
      "Architected and deployed a robust data integration system utilizing Apache Airflow, enhancing data ingestion speed by 90%.",
      "Fortified the system’s resilience and decreased system downtime by 74%.",
      "Developed scalable ETL pipelines, improving data accessibility and usability for over 50 stakeholders.",
      "Initiated AWS DMS instance setup, facilitating migration from on-premise MySQL to AWS Aurora MySQL.",
      "Orchestrated endpoint creation, testing, and management to ensure seamless data transmission with a 100% success rate.",
      "Enhanced cloud infrastructure by implementing security best practices, reducing vulnerabilities by 45%.",
      "Automated backup and recovery processes, ensuring data integrity and availability.",
    ],
    date: "April 2022 - August 2023",
  },
  {
    title: "Production Analyst",
    company: "Wiley Mthree",
    description: [
      "Accelerated data analysis by 20% through strategic utilization of Amazon S3 and Athena’s serverless querying.",
      "Furnished data-driven insights crucial for informed decision-making, and built dashboards using Business Intelligence platforms (PowerBI).",
      "Resolved high-priority incidents, ensuring minimal downtime and maximum productivity.",
      "Streamlined support processes, reducing resolution time by 25%.",
    ],
    date: "January 2022 - March 2022",
  },
  {
    title: "ETL Developer",
    company: "nmg Technologies",
    description: [
      "Architected Azure CosmosDB data pipelines managing over 1 million records daily, improving data retrieval speed by 30% with efficient indexing and partitioning techniques.",
      "Optimized batch workflows using Azure Data Factory and Functions, increasing NoSQL storage efficiency for large datasets.",
      "Transformed JSON data into Azure Synapse Analytics, reducing retrieval times by 25% and enhancing data consistency through refined ETL processes.",
      "Fine-tuned database queries, reducing system load by 10% and supporting higher processing efficiency.",
      "Documented data models and system relationships, cutting new team member onboarding time by 50%.",
    ],
    date: "May 2020 - December 2021",
  }
];

function Experience() {
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
        Experience
      </Typography>
      <Grid container direction="column" spacing={4}>
        {experiences.map((experience, index) => (
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
                    {experience.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "#ff8c00" }}
                  >
                    {experience.company}
                  </Typography>
                  <List>
                    {experience.description.map((point, i) => (
                      <ListItem key={i} sx={{ color: "#ccc" }}>
                        <ListItemText primary={point} />
                      </ListItem>
                    ))}
                  </List>
                  <Typography
                    variant="body2"
                    sx={{ color: "#ff8c00", marginTop: "10px" }}
                  >
                    {experience.date}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Experience;
