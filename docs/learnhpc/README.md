# LearnHPC: dynamic creation of HPC infrastructure for educational purposes

EU-wide requirements for HPC training are exploding as the adoption of HPC in the wider
scientific community gathers pace. However, the number of topics that can be thoroughly
addressed without providing access to actual HPC resources is very limited, even at the
introductory level. In cases where such access is available, security concerns and the
overhead of the process of provisioning accounts make the scalability of this approach
questionable.

EU-wide access to HPC resources on the scale required to meet the training needs of all
countries is an objective that we attempt to address with this project. The proposed
solution essentially provisions virtual HPC systems in a public cloud. This
infrastructure will allow us to dynamically create temporary event-specific HPC clusters
for training purposes, **including a scientific software stack**.

The scientific software stack will be provided by the European Environment for
Scientific Software Installations ([EESSI](https://eessi.github.io/docs/)) which uses a
software distribution system developed at CERN, CernVM-FS, and makes a research-grade
scalable software stack available for a wide set of HPC systems, as well as servers,
desktops and laptops (including MacOS and Windows!).

> ## Magic Castle
> 
> The concept is built upon the solution of
> [Compute Canada](https://www.computecanada.ca/),
> [Magic Castle](https://github.com/ComputeCanada/magic_castle), which aims to recreate
> the Compute Canada user experience in public cloud. Magic Castle uses the open-source
> software Terraform and HashiCorp Language (HCL) to define the virtual machines,
> volumes, and networks that are required to replicate a virtual HPC infrastructure. 

Our adaption of Magic Castle aims to recreate the EESSI HPC user experience, for
training purposes, primarily on the
[Fenix Research Infrastructure](https://fenix-ri.eu/) but can also leverage other cloud
providers such as Azure, AWS, OVH and any provider using OpenStack for provisioning.
After deployment, the user is provided with a complete HPC cluster software environment
including a Slurm scheduler, a Globus Endpoint, JupyterHub, LDAP, DNS, and a wide
selection of research software applications compiled by experts with EasyBuild.

## Accessing LearnHPC resources

At present, we do not have a specific mechanism to request access to LearnHPC resources.
To find out what is possible, please get in touch by email with Alan O'Cais
([alan@learnhpc.eu](mailto:alan@learnhpc.eu))

## Accessing larger scale resources

The resources we can provide are solely for training purposes. They are not intended to
be long-lived or large scale. *If you are in the EU* and would like to get access to
larger scale resources, particularly as you move from training to HPC usage, I would
suggest you get in touch with the following projects who can help point you in the right
direction:

* [CASTIEL](https://www.castiel-project.eu/): CASTIEL, the Coordination and Support
  Action (CSA) closely associated with EuroCC, combines the National Competence Centres
  (NCC) formed in EuroCC into a pan-European network.
  
  CASTIEL should be able to link you
  to your National Competence Centre which can support you in your usage of HPC.

* [PRACE](https://prace-ri.eu/): The mission of PRACE (Partnership for Advanced
  Computing in Europe) is to enable high-impact scientific discovery and engineering
  research and development across all disciplines to enhance European competitiveness
  for the benefit of society. PRACE seeks to realise this mission by offering world
  class computing and data management resources and services through a
  [peer review process](https://prace-ri.eu/hpc-access/project-access/project-access-the-peer-review-process/).
  
  PRACE also has connections to national HPC sites, in addition to providing various
  levels of access to a huge range of European HPC resources (including the largest HPC
  sites in Europe)
  
