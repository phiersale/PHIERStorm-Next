import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const {
      signatureId,
      topConcerns,
      otherIssues,
      solutions,
      endWar,
      article25,
      investigations,
      endUnauthorizedConflicts,
      authoritarianGuardrails,
      prosecuteCorruption,
      affordableHealthcare,
      housingStability,
      foodSecurity,
      tradeStability,
      willOrganize,
      canContact,
      ageRange,
      politicalIdentity,
    } = await req.json();

    // Validate required fields
    if (!signatureId) {
      return NextResponse.json(
        { error: "Signature ID is required" },
        { status: 400 }
      );
    }

    if (!endWar || !article25 || !investigations) {
      return NextResponse.json(
        { error: "endWar, article25, and investigations are required" },
        { status: 400 }
      );
    }

    // Merge topConcerns with otherIssues
    const allTopConcerns = [...(topConcerns || [])];
    if (otherIssues?.trim()) {
      allTopConcerns.push(otherIssues.trim());
    }

    // Ensure solutions is an array
    const solutionsArray = Array.isArray(solutions)
      ? solutions
      : solutions
      ? [solutions]
      : [];

    // Create or update survey
    const survey = await prisma.survey.upsert({
      where: { signatureId },
      update: {
        topConcerns: allTopConcerns,
        otherIssues: otherIssues || null,
        solutions: solutionsArray,
        endWar,
        article25,
        investigations,
        endUnauthorizedConflicts,
        authoritarianGuardrails,
        prosecuteCorruption,
        affordableHealthcare,
        housingStability,
        foodSecurity,
        tradeStability,
        willOrganize: Boolean(willOrganize),
        canContact: Boolean(canContact),
        ageRange,
        politicalIdentity,
      },
      create: {
        signatureId,
        topConcerns: allTopConcerns,
        otherIssues: otherIssues || null,
        solutions: solutionsArray,
        endWar,
        article25,
        investigations,
        endUnauthorizedConflicts,
        authoritarianGuardrails,
        prosecuteCorruption,
        affordableHealthcare,
        housingStability,
        foodSecurity,
        tradeStability,
        willOrganize: Boolean(willOrganize),
        canContact: Boolean(canContact),
        ageRange,
        politicalIdentity,
      },
    });

    return NextResponse.json(
      { success: true, id: survey.id },
      { status: 200 }
    );

  } catch (err) {
    console.error("Survey API error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
